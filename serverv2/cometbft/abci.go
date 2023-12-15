package cometbft

import (
	"context"
	"errors"
	"fmt"
	"sort"

	errorsmod "cosmossdk.io/errors"
	"cosmossdk.io/log"
	"cosmossdk.io/store/snapshots"
	snapshottypes "cosmossdk.io/store/snapshots/types"
	abci "github.com/cometbft/cometbft/abci/types"
	cmtprotocrypto "github.com/cometbft/cometbft/proto/tendermint/crypto"
	cryptocdc "github.com/cosmos/cosmos-sdk/crypto/codec"
	"github.com/cosmos/cosmos-sdk/serverv2/cometbft/types"
	"github.com/cosmos/cosmos-sdk/serverv2/core/appmanager"
	"github.com/cosmos/cosmos-sdk/serverv2/core/transaction"
	"github.com/cosmos/cosmos-sdk/serverv2/core/validator"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/gogoproto/proto"
)

var _ abci.Application = (*cometABCIWrapper)(nil)

var QueryPathBroadcastTx = "/cosmos.tx.v1beta1.Service/BroadcastTx"

type cometABCIWrapper[T transaction.Tx] struct {
	app       appmanager.App[T]
	logger    log.Logger
	trace     bool
	validator transaction.Validator[T]
	txCodec   transaction.Codec[T]

	proposalHandler types.ProposalHandler
	voteExtHandler  types.VoteExtensionsHandler

	paramStore      ParamStore // TODO: yet to figure out how consensus params are going to be handled
	snapshotManager *snapshots.Manager
}

func NewCometABCIWrapper[T transaction.Tx](app appmanager.App[T], logger log.Logger, proposalHandler types.ProposalHandler, voteExtHandler types.VoteExtensionsHandler, debug bool) abci.Application {
	return &cometABCIWrapper[T]{app: app, logger: logger, trace: debug}
}

func (w *cometABCIWrapper[T]) Info(_ context.Context, req *abci.RequestInfo) (*abci.ResponseInfo, error) {
	appVersion, err := w.app.AppVersion() // avoid the QueryContext given that we are always returning the latest here
	if err != nil {
		return nil, fmt.Errorf("failed getting app version: %w", err)
	}

	// TODO: version string?
	versionStr := fmt.Sprintf("%s@%s", w.app.ChainID(), appVersion)

	return &abci.ResponseInfo{
		Data:             w.app.ChainID(),
		Version:          versionStr,
		AppVersion:       appVersion,
		LastBlockHeight:  1,        // TODO: missing w.app.LastBlockHeight(),
		LastBlockAppHash: []byte{}, // TODO: missing w.app.AppHash(),
	}, nil
}

func (w *cometABCIWrapper[T]) Query(ctx context.Context, req *abci.RequestQuery) (*abci.ResponseQuery, error) {
	// reject special cases
	if req.Path == QueryPathBroadcastTx {
		return sdkerrors.QueryResult(errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "can't route a broadcast tx message"), w.trace), nil
	}

	qReq := &appmanager.QueryRequest{
		Height: req.Height,
		Path:   req.Path,
		Data:   req.Data,
	}

	res, err := w.app.Query(ctx, qReq)
	if err != nil {
		return nil, err
	}
	return &abci.ResponseQuery{
		Code:  0,
		Value: res.Value,
		// Proof:  res.Proof, // TODO: no proof?
		Height: res.Height,
	}, nil
}

func (w *cometABCIWrapper[T]) CheckTx(ctx context.Context, req *abci.RequestCheckTx) (*abci.ResponseCheckTx, error) {
	tx, err := w.txCodec.Decode(req.Tx)
	if err != nil {
		return nil, err
	}

	ctx, errMap := w.validator.Validate(ctx, []T{tx})

	errs := []error{}
	for hash, err := range errMap {
		errs = append(errs, fmt.Errorf("tx with hash %X failed validation with error: %w", hash, err))
	}
	if len(errs) != 0 {
		// TODO: gas info here is necessary? And ante handlers events?
		return sdkerrors.ResponseCheckTxWithEvents(errors.Join(errs...), 0, 0, nil, w.trace), nil
	}

	// TODO: wat?
	return &abci.ResponseCheckTx{
		// GasWanted: int64(gInfo.GasWanted),
		// GasUsed:   int64(gInfo.GasUsed),
		// Log:       result.Log,
		// Data:      result.Data,
		// Events:    result.Events, // TODO: this event handling should be done on cometbft's package
	}, nil
}

func (w *cometABCIWrapper[T]) InitChain(ctx context.Context, req *abci.RequestInitChain) (*abci.ResponseInitChain, error) {
	valUpdates := []validator.Update{}
	for _, v := range req.Validators {
		pubkey, err := cryptocdc.FromCmtProtoPublicKey(v.PubKey)
		if err != nil {
			return nil, err
		}

		valUpdates = append(valUpdates, validator.Update{
			PubKey: pubkey.Bytes(),
			Power:  v.Power,
		})
	}

	rr := appmanager.RequestInitChain{
		Time:          req.Time,
		ChainId:       req.ChainId,
		AppStateBytes: req.AppStateBytes,
		InitialHeight: req.InitialHeight,
		Validators:    valUpdates,
	}

	res, err := w.app.InitChain(ctx, rr)
	if err != nil {
		return nil, err
	}

	abciVals := make(abci.ValidatorUpdates, len(res.Validators))
	for i, update := range res.Validators {
		abciVals[i] = abci.ValidatorUpdate{
			PubKey: cmtprotocrypto.PublicKey{
				Sum: &cmtprotocrypto.PublicKey_Ed25519{
					Ed25519: update.PubKey,
				},
			},
			Power: update.Power,
		}
	}

	if len(req.Validators) > 0 {
		if len(req.Validators) != len(abciVals) {
			return nil, fmt.Errorf(
				"len(RequestInitChain.Validators) != len(GenesisValidators) (%d != %d)",
				len(req.Validators), len(abciVals),
			)
		}

		sort.Sort(abci.ValidatorUpdates(req.Validators))
		sort.Sort(abciVals)

		for i := range abciVals {
			if !proto.Equal(&abciVals[i], &req.Validators[i]) {
				return nil, fmt.Errorf("genesisValidators[%d] != req.Validators[%d] ", i, i)
			}
		}
	}

	return &abci.ResponseInitChain{
		// ConsensusParams: w.app.ConsensusParams(), // TODO: add consensus params
		Validators: abciVals,
		AppHash:    res.AppHash,
	}, nil
}

func (w *cometABCIWrapper[T]) PrepareProposal(ctx context.Context, req *abci.RequestPrepareProposal) (resp *abci.ResponsePrepareProposal, err error) {
	// do basic validation here
	if req.Height < 1 {
		return nil, errors.New("PrepareProposal called with invalid height")
	}

	defer func() {
		if err := recover(); err != nil {
			w.logger.Error(
				"panic recovered in PrepareProposal",
				"height", req.Height,
				"time", req.Time,
				"panic", err,
			)

			resp = &abci.ResponsePrepareProposal{Txs: req.Txs}
		}
	}()

	if w.proposalHandler != nil {
		return w.proposalHandler.PrepareProposal(ctx, req)
	}

	// if there's no proposal handler configured, we use the default one (but we still need to use whatever mempool is configured)

	// TODO: add default handler here

	return resp, nil
}

func (w *cometABCIWrapper[T]) ProcessProposal(ctx context.Context, req *abci.RequestProcessProposal) (resp *abci.ResponseProcessProposal, err error) {
	// CometBFT must never call ProcessProposal with a height of 0.
	// Ref: https://github.com/cometbft/cometbft/blob/059798a4f5b0c9f52aa8655fa619054a0154088c/spec/core/state.md?plain=1#L37-L38
	if req.Height < 1 {
		return nil, errors.New("ProcessProposal called with invalid height")
	}

	defer func() {
		if err := recover(); err != nil {
			w.logger.Error(
				"panic recovered in ProcessProposal",
				"height", req.Height,
				"time", req.Time,
				"hash", fmt.Sprintf("%X", req.Hash),
				"panic", err,
			)
			resp = &abci.ResponseProcessProposal{Status: abci.ResponseProcessProposal_REJECT}
		}
	}()

	if w.proposalHandler != nil {
		resp, err = w.proposalHandler.ProcessProposal(ctx, req)
	}

	// TODO: add default handler here

	if err != nil {
		w.logger.Error("failed to process proposal", "height", req.Height, "time", req.Time, "hash", fmt.Sprintf("%X", req.Hash), "err", err)
		return &abci.ResponseProcessProposal{Status: abci.ResponseProcessProposal_REJECT}, nil
	}

	return resp, nil
}

func (w *cometABCIWrapper[T]) FinalizeBlock(ctx context.Context, req *abci.RequestFinalizeBlock) (*abci.ResponseFinalizeBlock, error) {
	if err := w.validateFinalizeBlockHeight(req); err != nil {
		return nil, err
	}

	// header := types.CometBFTHeader{
	// 	Height:             req.Height,
	// 	Hash:               req.Hash,
	// 	Time:               req.Time,
	// 	ChainID:            w.app.ChainID(),
	// 	AppHash:            w.app.AppHash(),
	// 	NextValidatorsHash: req.NextValidatorsHash,
	// 	ProposerAddress:    req.ProposerAddress,
	// 	LastCommit:         req.DecidedLastCommit,
	// 	Misbehavior:        req.Misbehavior,
	// }

	txs := make([]T, len(req.Txs))
	for i, tx := range req.Txs {
		var err error
		txs[i], err = w.txCodec.Decode(tx)
		if err != nil {
			return nil, err
		}
	}

	delBlkReq := appmanager.RequestDeliverBlock[T]{
		Height: req.Height,
		Time:   req.Time,
		Hash:   req.Hash,
		Txs:    txs,
	}

	delBlkRes, err := w.app.DeliverBlock(ctx, delBlkReq)
	if err != nil {
		return nil, err
	}

	// delBlkRes.
	// cp := w.app.ConsensusParams()

	// TODO: translate tx results

	// type ResponseDeliverBlock struct {
	// 	Apphash          []byte
	// 	ValidatorUpdates []validator.Update
	// 	TxResults        []TxResult
	// 	Events           []event.Event
	// }

	abciVals := make(abci.ValidatorUpdates, len(delBlkRes.ValidatorUpdates))
	for i, update := range delBlkRes.ValidatorUpdates {
		abciVals[i] = abci.ValidatorUpdate{
			PubKey: cmtprotocrypto.PublicKey{
				Sum: &cmtprotocrypto.PublicKey_Ed25519{
					Ed25519: update.PubKey,
				},
			},
			Power: update.Power,
		}
	}

	abciEvents := make([]abci.Event, len(delBlkRes.Events))
	for i, event := range delBlkRes.Events {
		attrs := make([]abci.EventAttribute, len(event.Attributes))
		for j, attr := range event.Attributes {
			attrs[j] = abci.EventAttribute{
				Key:   attr.Key,
				Value: attr.Value,
			}
		}

		abciEvents[i] = abci.Event{
			Type:       event.Type,
			Attributes: attrs,
		}
	}

	abciTxResults := make([]*abci.ExecTxResult, len(delBlkRes.TxResults))
	for i, txResult := range delBlkRes.TxResults {
		// TODO: put this in a helper func
		abciEvents := make([]abci.Event, len(txResult.Events))
		for i, event := range txResult.Events {
			attrs := make([]abci.EventAttribute, len(event.Attributes))
			for j, attr := range event.Attributes {
				attrs[j] = abci.EventAttribute{
					Key:   attr.Key,
					Value: attr.Value,
				}
			}

			abciEvents[i] = abci.Event{
				Type:       event.Type,
				Attributes: attrs,
			}
		}

		abciTxResults[i] = &abci.ExecTxResult{
			Code:      0, // TODO: add a status code to ExecTxResult
			Data:      []byte(txResult.Data),
			Log:       txResult.Log,
			Info:      "",
			GasWanted: txResult.GasWanted,
			GasUsed:   txResult.GasUsed,
			Events:    abciEvents,
			Codespace: "",
		}
	}

	return &abci.ResponseFinalizeBlock{
		TxResults:        abciTxResults,
		ValidatorUpdates: abciVals,
		Events:           abciEvents,
		// ConsensusParamUpdates: cp, // TODO: figure out consensus params
		AppHash: delBlkRes.Apphash,
	}, nil
}

func (w *cometABCIWrapper[T]) ExtendVote(ctx context.Context, req *abci.RequestExtendVote) (*abci.ResponseExtendVote, error) {
	cp, err := w.paramStore.Get(ctx)
	if err != nil {
		return nil, err
	}

	// Note: In this case, we do want to extend vote if the height is equal or
	// greater than VoteExtensionsEnableHeight. This defers from the check done
	// in ValidateVoteExtensions and PrepareProposal in which we'll check for
	// vote extensions on VoteExtensionsEnableHeight+1.
	extsEnabled := cp.Abci != nil && req.Height >= cp.Abci.VoteExtensionsEnableHeight && cp.Abci.VoteExtensionsEnableHeight != 0
	if !extsEnabled {
		return nil, fmt.Errorf("vote extensions are not enabled; unexpected call to ExtendVote at height %d", req.Height)
	}

	// add a deferred recover handler in case extendVote panics
	defer func() {
		if r := recover(); r != nil {
			w.logger.Error(
				"panic recovered in ExtendVote",
				"height", req.Height,
				"hash", fmt.Sprintf("%X", req.Hash),
				"panic", err,
			)
			err = fmt.Errorf("recovered application panic in ExtendVote: %v", r)
		}
	}()

	resp, err := w.voteExtHandler.ExtendVote(ctx, req)
	if err != nil {
		w.logger.Error("failed to extend vote", "height", req.Height, "hash", fmt.Sprintf("%X", req.Hash), "err", err)
		return &abci.ResponseExtendVote{VoteExtension: []byte{}}, nil
	}

	return resp, nil
}

func (w *cometABCIWrapper[T]) VerifyVoteExtension(_ context.Context, req *abci.RequestVerifyVoteExtension) (*abci.ResponseVerifyVoteExtension, error) {
	// TODO: do an interface check to see if app implements VerifyVoteExtension
	return &abci.ResponseVerifyVoteExtension{}, nil
}

func (w *cometABCIWrapper[T]) Commit(ctx context.Context, _ *abci.RequestCommit) (*abci.ResponseCommit, error) {
	retainHeight := w.app.GetBlockRetentionHeight(w.app.LastBlockHeight())

	resp := &abci.ResponseCommit{
		RetainHeight: retainHeight,
	}

	err := w.app.Commit()
	if err != nil {
		return nil, err
	}

	// TODO: revise streaming and snapshotting
	// abciListeners := w.app.StreamingManager().ABCIListeners
	w.snapshotManager.SnapshotIfApplicable(w.app.LastBlockHeight())

	return resp, nil
}

func (w *cometABCIWrapper[T]) ListSnapshots(_ context.Context, req *abci.RequestListSnapshots) (*abci.ResponseListSnapshots, error) {
	resp := &abci.ResponseListSnapshots{Snapshots: []*abci.Snapshot{}}
	if w.snapshotManager == nil {
		return resp, nil
	}

	snapshots, err := w.snapshotManager.List()
	if err != nil {
		w.logger.Error("failed to list snapshots", "err", err)
		return nil, err
	}

	for _, snapshot := range snapshots {
		abciSnapshot, err := snapshot.ToABCI()
		if err != nil {
			w.logger.Error("failed to convert ABCI snapshots", "err", err)
			return nil, err
		}

		resp.Snapshots = append(resp.Snapshots, &abciSnapshot)
	}

	return resp, nil
}

func (w *cometABCIWrapper[T]) OfferSnapshot(_ context.Context, req *abci.RequestOfferSnapshot) (*abci.ResponseOfferSnapshot, error) {
	if w.snapshotManager == nil {
		w.logger.Error("snapshot manager not configured")
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_ABORT}, nil
	}

	if req.Snapshot == nil {
		w.logger.Error("received nil snapshot")
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_REJECT}, nil
	}

	// TODO: SnapshotFromABCI should be moved to this package or out of the SDK
	snapshot, err := snapshottypes.SnapshotFromABCI(req.Snapshot)
	if err != nil {
		w.logger.Error("failed to decode snapshot metadata", "err", err)
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_REJECT}, nil
	}

	err = w.snapshotManager.Restore(snapshot)
	switch {
	case err == nil:
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_ACCEPT}, nil

	case errors.Is(err, snapshottypes.ErrUnknownFormat):
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_REJECT_FORMAT}, nil

	case errors.Is(err, snapshottypes.ErrInvalidMetadata):
		w.logger.Error(
			"rejecting invalid snapshot",
			"height", req.Snapshot.Height,
			"format", req.Snapshot.Format,
			"err", err,
		)
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_REJECT}, nil

	default:
		w.logger.Error(
			"failed to restore snapshot",
			"height", req.Snapshot.Height,
			"format", req.Snapshot.Format,
			"err", err,
		)

		// We currently don't support resetting the IAVL stores and retrying a
		// different snapshot, so we ask CometBFT to abort all snapshot restoration.
		return &abci.ResponseOfferSnapshot{Result: abci.ResponseOfferSnapshot_ABORT}, nil
	}
}

func (w *cometABCIWrapper[T]) LoadSnapshotChunk(_ context.Context, req *abci.RequestLoadSnapshotChunk) (*abci.ResponseLoadSnapshotChunk, error) {
	if w.snapshotManager == nil {
		return &abci.ResponseLoadSnapshotChunk{}, nil
	}

	chunk, err := w.snapshotManager.LoadChunk(req.Height, req.Format, req.Chunk)
	if err != nil {
		w.logger.Error(
			"failed to load snapshot chunk",
			"height", req.Height,
			"format", req.Format,
			"chunk", req.Chunk,
			"err", err,
		)
		return nil, err
	}

	return &abci.ResponseLoadSnapshotChunk{Chunk: chunk}, nil
}

func (w *cometABCIWrapper[T]) ApplySnapshotChunk(_ context.Context, req *abci.RequestApplySnapshotChunk) (*abci.ResponseApplySnapshotChunk, error) {
	if w.snapshotManager == nil {
		w.logger.Error("snapshot manager not configured")
		return &abci.ResponseApplySnapshotChunk{Result: abci.ResponseApplySnapshotChunk_ABORT}, nil
	}

	_, err := w.snapshotManager.RestoreChunk(req.Chunk)
	switch {
	case err == nil:
		return &abci.ResponseApplySnapshotChunk{Result: abci.ResponseApplySnapshotChunk_ACCEPT}, nil

	case errors.Is(err, snapshottypes.ErrChunkHashMismatch):
		w.logger.Error(
			"chunk checksum mismatch; rejecting sender and requesting refetch",
			"chunk", req.Index,
			"sender", req.Sender,
			"err", err,
		)
		return &abci.ResponseApplySnapshotChunk{
			Result:        abci.ResponseApplySnapshotChunk_RETRY,
			RefetchChunks: []uint32{req.Index},
			RejectSenders: []string{req.Sender},
		}, nil

	default:
		w.logger.Error("failed to restore snapshot", "err", err)
		return &abci.ResponseApplySnapshotChunk{Result: abci.ResponseApplySnapshotChunk_ABORT}, nil
	}
}

func (w *cometABCIWrapper[T]) validateFinalizeBlockHeight(req *abci.RequestFinalizeBlock) error {
	if req.Height < 1 {
		return fmt.Errorf("invalid height: %d", req.Height)
	}

	lastBlockHeight := w.app.LastBlockHeight()

	// expectedHeight holds the expected height to validate
	var expectedHeight int64
	if lastBlockHeight == 0 && w.app.InitialHeight() > 1 {
		// In this case, we're validating the first block of the chain, i.e no
		// previous commit. The height we're expecting is the initial height.
		expectedHeight = w.app.InitialHeight()
	} else {
		// This case can mean two things:
		//
		// - Either there was already a previous commit in the store, in which
		// case we increment the version from there.
		// - Or there was no previous commit, in which case we start at version 1.
		expectedHeight = lastBlockHeight + 1
	}

	if req.Height != expectedHeight {
		return fmt.Errorf("invalid height: %d; expected: %d", req.Height, expectedHeight)
	}

	return nil
}
