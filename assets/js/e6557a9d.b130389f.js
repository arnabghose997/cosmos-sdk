"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[4423],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return t?i.createElement(m,r(r({ref:n},d),{},{components:t})):i.createElement(m,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const a={},r="ADR 64: ABCI 2.0 Integration (Phase II)",l={unversionedId:"architecture/adr-064-abci-2.0",id:"architecture/adr-064-abci-2.0",title:"ADR 64: ABCI 2.0 Integration (Phase II)",description:"Changelog",source:"@site/docs/architecture/adr-064-abci-2.0.md",sourceDirName:"architecture",slug:"/architecture/adr-064-abci-2.0",permalink:"/main/architecture/adr-064-abci-2.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 063: Core Module API",permalink:"/main/architecture/adr-063-core-module-api"},next:{title:"ADR-065: Store V2",permalink:"/main/architecture/adr-065-store-v2"}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"<code>ExtendVote</code>",id:"extendvote",level:3},{value:"<code>VerifyVoteExtension</code>",id:"verifyvoteextension",level:3},{value:"<code>FinalizeBlock</code>",id:"finalizeblock",level:3},{value:"Decision",id:"decision",level:2},{value:"<code>VoteExtensions</code>",id:"voteextensions",level:3},{value:"Vote Extension Propagation &amp; Verification",id:"vote-extension-propagation--verification",level:4},{value:"Vote Extension Persistence",id:"vote-extension-persistence",level:4},{value:"<code>FinalizeBlock</code>",id:"finalizeblock-1",level:3},{value:"Events",id:"events",level:4},{value:"Upgrading",id:"upgrading",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-64-abci-20-integration-phase-ii"},"ADR 64: ABCI 2.0 Integration (Phase II)"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2023-01-17: Initial Draft (@alexanderbez)"),(0,o.kt)("li",{parentName:"ul"},"2023-04-06: Add upgrading section (@alexanderbez)"),(0,o.kt)("li",{parentName:"ul"},"2023-04-10: Simplify vote extension state persistence (@alexanderbez)"),(0,o.kt)("li",{parentName:"ul"},"2023-07-07: Revise vote extension state persistence (@alexanderbez)"),(0,o.kt)("li",{parentName:"ul"},"2023-08-24: Revise vote extension power calculations and staking interface (@davidterpay)")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"ACCEPTED"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This ADR outlines the continuation of the efforts to implement ABCI++ in the Cosmos\nSDK outlined in ",(0,o.kt)("a",{parentName:"p",href:"/main/architecture/adr-060-abci-1.0"},"ADR 060: ABCI 1.0 (Phase I)"),"."),(0,o.kt)("p",null,"Specifically, this ADR outlines the design and implementation of ABCI 2.0, which\nincludes ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVote"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),"."),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"ABCI 2.0 continues the promised updates from ABCI++, specifically three additional\nABCI methods that the application can implement in order to gain further control,\ninsight and customization of the consensus process, unlocking many novel use-cases\nthat previously not possible. We describe these three new methods below:"),(0,o.kt)("h3",{id:"extendvote"},(0,o.kt)("inlineCode",{parentName:"h3"},"ExtendVote")),(0,o.kt)("p",null,"This method allows each validator process to extend the pre-commit phase of the\nCometBFT consensus process. Specifically, it allows the application to perform\ncustom business logic that extends the pre-commit vote and supply additional data\nas part of the vote, although they are signed separately by the same key."),(0,o.kt)("p",null,"The data, called vote extension, will be broadcast and received together with the\nvote it is extending, and will be made available to the application in the next\nheight. Specifically, the proposer of the next block will receive the vote extensions\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal.local_last_commit.votes"),"."),(0,o.kt)("p",null,"If the application does not have vote extension information to provide, it\nreturns a 0-length byte array as its vote extension."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Although each validator process submits its own vote extension, ONLY the ",(0,o.kt)("em",{parentName:"li"},"proposer"),"\nof the ",(0,o.kt)("em",{parentName:"li"},"next")," block will receive all the vote extensions included as part of the\npre-commit phase of the previous block. This means only the proposer will\nimplicitly have access to all the vote extensions, via ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestPrepareProposal"),",\nand that not all vote extensions may be included, since a validator does not\nhave to wait for all pre-commits, only 2/3."),(0,o.kt)("li",{parentName:"ul"},"The pre-commit vote is signed independently from the vote extension.")),(0,o.kt)("h3",{id:"verifyvoteextension"},(0,o.kt)("inlineCode",{parentName:"h3"},"VerifyVoteExtension")),(0,o.kt)("p",null,"This method allows validators to validate the vote extension data attached to\neach pre-commit message it receives. If the validation fails, the whole pre-commit\nmessage will be deemed invalid and ignored by CometBFT."),(0,o.kt)("p",null,"CometBFT uses ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," when validating a pre-commit vote. Specifically,\nfor a pre-commit, CometBFT will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reject the message if it doesn't contain a signed vote AND a signed vote extension"),(0,o.kt)("li",{parentName:"ul"},"Reject the message if the vote's signature OR the vote extension's signature fails to verify"),(0,o.kt)("li",{parentName:"ul"},"Reject the message if ",(0,o.kt)("inlineCode",{parentName:"li"},"VerifyVoteExtension")," was rejected by the app")),(0,o.kt)("p",null,"Otherwise, CometBFT will accept the pre-commit message."),(0,o.kt)("p",null,"Note, this has important consequences on liveness, i.e., if vote extensions repeatedly\ncannot be verified by correct validators, CometBFT may not be able to finalize\na block even if sufficiently many (+2/3) validators send pre-commit votes for\nthat block. Thus, ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," should be used with special care."),(0,o.kt)("p",null,"CometBFT recommends that an application that detects an invalid vote extension\nSHOULD accept it in ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseVerifyVoteExtension")," and ignore it in its own logic."),(0,o.kt)("h3",{id:"finalizeblock"},(0,o.kt)("inlineCode",{parentName:"h3"},"FinalizeBlock")),(0,o.kt)("p",null,"This method delivers a decided block to the application. The application must\nexecute the transactions in the block deterministically and update its state\naccordingly. Cryptographic commitments to the block and transaction results,\nreturned via the corresponding parameters in ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseFinalizeBlock"),", are\nincluded in the header of the next block. CometBFT calls it when a new block\nis decided."),(0,o.kt)("p",null,"In other words, ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," encapsulates the current ABCI execution flow of\n",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," into a single ABCI method.\nCometBFT will no longer execute requests for these legacy methods and instead\nwill just simply call ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),"."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"We will discuss changes to the Cosmos SDK to implement ABCI 2.0 in two distinct\nphases, ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtensions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),"."),(0,o.kt)("h3",{id:"voteextensions"},(0,o.kt)("inlineCode",{parentName:"h3"},"VoteExtensions")),(0,o.kt)("p",null,"Similarly for ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),", we propose to introduce\ntwo new handlers that an application can implement in order to provide and verify\nvote extensions."),(0,o.kt)("p",null,"We propose the following new handlers for applications to implement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ExtendVoteHandler func(sdk.Context, abci.RequestExtendVote) abci.ResponseExtendVote\ntype VerifyVoteExtensionHandler func(sdk.Context, abci.RequestVerifyVoteExtension) abci.ResponseVerifyVoteExtension\n")),(0,o.kt)("p",null,"An ephemeral context and state will be supplied to both handlers. The\ncontext will contain relevant metadata such as the block height and block hash.\nThe state will be a cached version of the committed state of the application and\nwill be discarded after the execution of the handler, this means that both handlers\nget a fresh state view and no changes made to it will be written."),(0,o.kt)("p",null,"If an application decides to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVoteHandler"),", it must return a\nnon-nil ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseExtendVote.VoteExtension"),"."),(0,o.kt)("p",null,"Recall, an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVoteHandler")," does NOT need to be deterministic,\nhowever, given a set of vote extensions, ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtensionHandler")," must be\ndeterministic, otherwise the chain may suffer from liveness faults. In addition,\nrecall CometBFT proceeds in rounds for each height, so if a decision cannot be\nmade about about a block proposal at a given height, CometBFT will proceed to the\nnext round and thus will execute ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVote")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," again for\nthe new round for each validator until 2/3 valid pre-commits can be obtained."),(0,o.kt)("p",null,"Given the broad scope of potential implementations and use-cases of vote extensions,\nand how to verify them, most applications should choose to implement the handlers\nthrough a single handler type, which can have any number of dependencies injected\nsuch as keepers. In addition, this handler type could contain some notion of\nvolatile vote extension state management which would assist in vote extension\nverification. This state management could be ephemeral or could be some form of\non-disk persistence."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// VoteExtensionHandler implements an Oracle vote extension handler.\ntype VoteExtensionHandler struct {\n    cdc   Codec\n    mk    MyKeeper\n    state VoteExtState // This could be a map or a DB connection object\n}\n\n// ExtendVoteHandler can do something with h.mk and possibly h.state to create\n// a vote extension, such as fetching a series of prices for supported assets.\nfunc (h VoteExtensionHandler) ExtendVoteHandler(ctx sdk.Context, req abci.RequestExtendVote) abci.ResponseExtendVote {\n    prices := GetPrices(ctx, h.mk.Assets())\n    bz, err := EncodePrices(h.cdc, prices)\n    if err != nil {\n        panic(fmt.Errorf("failed to encode prices for vote extension: %w", err))\n    }\n\n    // store our vote extension at the given height\n    //\n    // NOTE: Vote extensions can be overridden since we can timeout in a round.\n    SetPrices(h.state, req, bz)\n\n    return abci.ResponseExtendVote{VoteExtension: bz}\n}\n\n// VerifyVoteExtensionHandler can do something with h.state and req to verify\n// the req.VoteExtension field, such as ensuring the provided oracle prices are\n// within some valid range of our prices.\nfunc (h VoteExtensionHandler) VerifyVoteExtensionHandler(ctx sdk.Context, req abci.RequestVerifyVoteExtension) abci.ResponseVerifyVoteExtension {\n    prices, err := DecodePrices(h.cdc, req.VoteExtension)\n    if err != nil {\n        log("failed to decode vote extension", "err", err)\n        return abci.ResponseVerifyVoteExtension{Status: REJECT}\n    }\n\n    if err := ValidatePrices(h.state, req, prices); err != nil {\n        log("failed to validate vote extension", "prices", prices, "err", err)\n        return abci.ResponseVerifyVoteExtension{Status: REJECT}\n    }\n\n    // store updated vote extensions at the given height\n    //\n    // NOTE: Vote extensions can be overridden since we can timeout in a round.\n    SetPrices(h.state, req, req.VoteExtension)\n\n    return abci.ResponseVerifyVoteExtension{Status: ACCEPT}\n}\n')),(0,o.kt)("h4",{id:"vote-extension-propagation--verification"},"Vote Extension Propagation & Verification"),(0,o.kt)("p",null,"As mentioned previously, vote extensions for height ",(0,o.kt)("inlineCode",{parentName:"p"},"H")," are only made available\nto the proposer at height ",(0,o.kt)("inlineCode",{parentName:"p"},"H+1")," during ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),". However, in order to\nmake vote extensions useful, all validators should have access to the agreed upon\nvote extensions at height ",(0,o.kt)("inlineCode",{parentName:"p"},"H")," during ",(0,o.kt)("inlineCode",{parentName:"p"},"H+1"),"."),(0,o.kt)("p",null,"Since CometBFT includes all the vote extension signatures in ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),',\nwe propose that the proposing validator manually "inject" the vote extensions\nalong with their respective signatures via a special transaction, ',(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtsTx"),",\ninto the block proposal during ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtsTx")," will be\npopulated with a single ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendedCommitInfo")," object which is received directly\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),"."),(0,o.kt)("p",null,"For convention, the ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtsTx")," transaction should be the first transaction in\nthe block proposal, although chains can implement their own preferences. For\nsafety purposes, we also propose that the proposer itself verify all the vote\nextension signatures it receives in ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),"."),(0,o.kt)("p",null,"A validator, upon a ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestProcessProposal"),", will receive the injected ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtsTx"),"\nwhich includes the vote extensions along with their signatures. If no such transaction\nexists, the validator MUST REJECT the proposal."),(0,o.kt)("p",null,"When a validator inspects a ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtsTx"),", it will evaluate each ",(0,o.kt)("inlineCode",{parentName:"p"},"SignedVoteExtension"),".\nFor each signed vote extension, the validator will generate the signed bytes and\nverify the signature. At least 2/3 valid signatures, based on voting power, must\nbe received in order for the block proposal to be valid, otherwise the validator\nMUST REJECT the proposal."),(0,o.kt)("p",null,"In order to have the ability to validate signatures, ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseApp")," must have access\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/staking")," module, since this module stores an index from consensus\naddress to public key. However, we will avoid a direct dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"x/staking"),"\nand instead rely on an interface instead. In addition, the Cosmos SDK will expose\na default signature verification method which applications can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type ValidatorStore interface {\n    GetPubKeyByConsAddr(context.Context, sdk.ConsAddress) (cmtprotocrypto.PublicKey, error)\n}\n\n// ValidateVoteExtensions is a function that an application can execute in\n// ProcessProposal to verify vote extension signatures.\nfunc (app *BaseApp) ValidateVoteExtensions(ctx sdk.Context, currentHeight int64, extCommit abci.ExtendedCommitInfo) error {\n    votingPower := 0\n    totalVotingPower := 0\n\n    for _, vote := range extCommit.Votes {\n        totalVotingPower += vote.Validator.Power\n\n        if !vote.SignedLastBlock || len(vote.VoteExtension) == 0 {\n            continue\n        }\n\n        valConsAddr := sdk.ConsAddress(vote.Validator.Address)\n        pubKeyProto, err := valStore.GetPubKeyByConsAddr(ctx, valConsAddr)\n        if err != nil {\n            return fmt.Errorf("failed to get public key for validator %s: %w", valConsAddr, err)\n        }\n\n        if len(vote.ExtensionSignature) == 0 {\n            return fmt.Errorf("received a non-empty vote extension with empty signature for validator %s", valConsAddr)\n        }\n\n        cmtPubKey, err := cryptoenc.PubKeyFromProto(pubKeyProto)\n        if err != nil {\n            return fmt.Errorf("failed to convert validator %X public key: %w", valConsAddr, err)\n        }\n\n        cve := cmtproto.CanonicalVoteExtension{\n            Extension: vote.VoteExtension,\n            Height:    currentHeight - 1, // the vote extension was signed in the previous height\n            Round:     int64(extCommit.Round),\n            ChainId:   app.GetChainID(),\n        }\n\n        extSignBytes, err := cosmosio.MarshalDelimited(&cve)\n        if err != nil {\n            return fmt.Errorf("failed to encode CanonicalVoteExtension: %w", err)\n        }\n\n        if !cmtPubKey.VerifySignature(extSignBytes, vote.ExtensionSignature) {\n            return errors.New("received vote with invalid signature")\n        }\n\n        votingPower += vote.Validator.Power\n    }\n\n    if (votingPower / totalVotingPower) < threshold {\n        return errors.New("not enough voting power for the vote extensions")\n    }\n\n    return nil\n}\n')),(0,o.kt)("p",null,"Once at least 2/3 signatures, by voting power, are received and verified, the\nvalidator can use the vote extensions to derive additional data or come to some\ndecision based on the vote extensions."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: It is very important to state, that neither the vote propagation technique\nnor the vote extension verification mechanism described above is required for\napplications to implement. In other words, a proposer is not required to verify\nand propagate vote extensions along with their signatures nor are proposers\nrequired to verify those signatures. An application can implement it's own\nPKI mechanism and use that to sign and verify vote extensions.")),(0,o.kt)("h4",{id:"vote-extension-persistence"},"Vote Extension Persistence"),(0,o.kt)("p",null,"In certain contexts, it may be useful or necessary for applications to persist\ndata derived from vote extensions. In order to facilitate this use case, we propose\nto allow app developers to define a pre-FinalizeBlock hook which will be called\nat the very beginning of ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),", i.e. before ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," (see below)."),(0,o.kt)("p",null,"Note, we cannot allow applications to directly write to the application state\nduring ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," because during replay, CometBFT will NOT call ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),",\nwhich would result in an incomplete state view."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (a MyApp) PreFinalizeBlockHook(ctx sdk.Context, req.RequestFinalizeBlock) error {\n    voteExts := GetVoteExtensions(ctx, req.Txs)\n    \n    // Process and perform some compute on vote extensions, storing any resulting\n    // state.\n    if err a.processVoteExtensions(ctx, voteExts); if err != nil {\n        return err\n    }\n}\n")),(0,o.kt)("h3",{id:"finalizeblock-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"FinalizeBlock")),(0,o.kt)("p",null,"The existing ABCI methods ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," have existed\nsince the dawn of ABCI-based applications. Thus, applications, tooling, and developers\nhave grown used to these methods and their use-cases. Specifically, ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," have grown to be pretty integral and powerful within ABCI-based\napplications. E.g. an application might want to run distribution and inflation\nrelated operations prior to executing transactions and then have staking related\nchanges to happen after executing all transactions."),(0,o.kt)("p",null,"We propose to keep ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," within the SDK's core module\ninterfaces only so application developers can continue to build against existing\nexecution flows. However, we will remove ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),"\nfrom the SDK's ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseApp")," implementation and thus the ABCI surface area."),(0,o.kt)("p",null,"What will then exist is a single ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," execution flow. Specifically, in\n",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," we will execute the application's ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", followed by\nexecution of all the transactions, finally followed by execution of the application's\n",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),"."),(0,o.kt)("p",null,"Note, we will still keep the existing transaction execution mechanics within\n",(0,o.kt)("inlineCode",{parentName:"p"},"BaseApp"),", but all notions of ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx")," will be removed, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"deliverState"),"\nwill be replace with ",(0,o.kt)("inlineCode",{parentName:"p"},"finalizeState"),", which will be committed on ",(0,o.kt)("inlineCode",{parentName:"p"},"Commit"),"."),(0,o.kt)("p",null,"However, there are current parameters and fields that exist in the existing\n",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," ABCI types, such as votes that are used in distribution\nand byzantine validators used in evidence handling. These parameters exist in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," request type, and will need to be passed to the application's\nimplementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),"."),(0,o.kt)("p",null,"This means the Cosmos SDK's core module interfaces will need to be updated to\nreflect these parameters. The easiest and most straightforward way to achieve\nthis is to just pass ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestFinalizeBlock")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),".\nAlternatively, we can create dedicated proxy types in the SDK that reflect these\nlegacy ABCI types, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"LegacyBeginBlockRequest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LegacyEndBlockRequest"),". Or,\nwe can come up with new types and names altogether."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (app *BaseApp) FinalizeBlock(req abci.RequestFinalizeBlock) (*abci.ResponseFinalizeBlock, error) {\n    ctx := ...\n\n    if app.preFinalizeBlockHook != nil {\n        if err := app.preFinalizeBlockHook(ctx, req); err != nil {\n            return nil, err\n        }\n    }\n\n    beginBlockResp := app.beginBlock(ctx, req)\n    appendBlockEventAttr(beginBlockResp.Events, "begin_block")\n\n    txExecResults := make([]abci.ExecTxResult, 0, len(req.Txs))\n    for _, tx := range req.Txs {\n        result := app.runTx(runTxModeFinalize, tx)\n        txExecResults = append(txExecResults, result)\n    }\n\n    endBlockResp := app.endBlock(ctx, req)\n    appendBlockEventAttr(beginBlockResp.Events, "end_block")\n\n    return abci.ResponseFinalizeBlock{\n        TxResults:             txExecResults,\n        Events:                joinEvents(beginBlockResp.Events, endBlockResp.Events),\n        ValidatorUpdates:      endBlockResp.ValidatorUpdates,\n        ConsensusParamUpdates: endBlockResp.ConsensusParamUpdates,\n        AppHash:               nil,\n    }\n}\n')),(0,o.kt)("h4",{id:"events"},"Events"),(0,o.kt)("p",null,"Many tools, indexers and ecosystem libraries rely on the existence ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," events. Since CometBFT now only exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlockEvents"),", we\nfind that it will still be useful for these clients and tools to still query for\nand rely on existing events, especially since applications will still define\n",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," implementations."),(0,o.kt)("p",null,"In order to facilitate existing event functionality, we propose that all ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," events have a dedicated ",(0,o.kt)("inlineCode",{parentName:"p"},"EventAttribute")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"key=block")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"value=begin_block|end_block"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"EventAttribute")," will be appended to each event\nin both ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," events`. "),(0,o.kt)("h3",{id:"upgrading"},"Upgrading"),(0,o.kt)("p",null,"CometBFT defines a consensus parameter, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/v0.38.0-alpha.1/spec/abci/abci%2B%2B_app_requirements.md#abciparamsvoteextensionsenableheight"},(0,o.kt)("inlineCode",{parentName:"a"},"VoteExtensionsEnableHeight")),",\nwhich specifies the height at which vote extensions are enabled and ",(0,o.kt)("strong",{parentName:"p"},"required"),".\nIf the value is set to zero, which is the default, then vote extensions are\ndisabled and an application is not required to implement and use vote extensions."),(0,o.kt)("p",null,"However, if the value ",(0,o.kt)("inlineCode",{parentName:"p"},"H")," is positive, at all heights greater than the configured\nheight ",(0,o.kt)("inlineCode",{parentName:"p"},"H")," vote extensions must be present (even if empty). When the configured\nheight ",(0,o.kt)("inlineCode",{parentName:"p"},"H")," is reached, ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," will not include vote extensions yet,\nbut ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtendVote")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," will be called. Then, when reaching\nheight ",(0,o.kt)("inlineCode",{parentName:"p"},"H+1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," will include the vote extensions from height ",(0,o.kt)("inlineCode",{parentName:"p"},"H"),"."),(0,o.kt)("p",null,"It is very important to note, for all heights after H:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vote extensions CANNOT be disabled"),(0,o.kt)("li",{parentName:"ul"},"They are mandatory, i.e. all pre-commit messages sent MUST have an extension\nattached (even if empty)")),(0,o.kt)("p",null,"When an application updates to the Cosmos SDK version with CometBFT v0.38 support,\nin the upgrade handler it must ensure to set the consensus parameter\n",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtensionsEnableHeight")," to the correct value. E.g. if an application is set\nto perform an upgrade at height ",(0,o.kt)("inlineCode",{parentName:"p"},"H"),", then the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteExtensionsEnableHeight"),"\nshould be set to any value ",(0,o.kt)("inlineCode",{parentName:"p"},">=H+1"),". This means that at the upgrade height, ",(0,o.kt)("inlineCode",{parentName:"p"},"H"),",\nvote extensions will not be enabled yet, but at height ",(0,o.kt)("inlineCode",{parentName:"p"},"H+1")," they will be enabled."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,o.kt)("p",null,"ABCI 2.0 is naturally not backwards compatible with prior versions of the Cosmos SDK\nand CometBFT. For example, an application that requests ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestFinalizeBlock"),"\nto the same application that does not speak ABCI 2.0 will naturally fail."),(0,o.kt)("p",null,"In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock")," will be removed from the\napplication ABCI interfaces and along with the inputs and outputs being modified\nin the module interfaces."),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BeginBlock")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"EndBlock")," semantics remain, so burden on application developers\nshould be limited."),(0,o.kt)("li",{parentName:"ul"},"Less communication overhead as multiple ABCI requests are condensed into a single\nrequest."),(0,o.kt)("li",{parentName:"ul"},"Sets the groundwork for optimistic execution."),(0,o.kt)("li",{parentName:"ul"},"Vote extensions allow for an entirely new set of application primitives to be\ndeveloped, such as in-process price oracles and encrypted mempools.")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some existing Cosmos SDK core APIs may need to be modified and thus broken."),(0,o.kt)("li",{parentName:"ul"},"Signature verification in ",(0,o.kt)("inlineCode",{parentName:"li"},"ProcessProposal")," of 100+ vote extension signatures\nwill add significant performance overhead to ",(0,o.kt)("inlineCode",{parentName:"li"},"ProcessProposal"),". Granted, the\nsignature verification process can happen concurrently using an error group\nwith ",(0,o.kt)("inlineCode",{parentName:"li"},"GOMAXPROCS")," goroutines.")),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Having to manually "inject" vote extensions into the block proposal during\n',(0,o.kt)("inlineCode",{parentName:"li"},"PrepareProposal")," is an awkward approach and takes up block space unnecessarily."),(0,o.kt)("li",{parentName:"ul"},"The requirement of ",(0,o.kt)("inlineCode",{parentName:"li"},"ResetProcessProposalState")," can create a footgun for\napplication developers if they're not careful, but this is necessary in order\nfor applications to be able to commit state from vote extension computation.")),(0,o.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,o.kt)("p",null,"Future discussions include design and implementation of ABCI 3.0, which is a\ncontinuation of ABCI++ and the general discussion of optimistic execution."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/main/architecture/adr-060-abci-1.0"},"ADR 060: ABCI 1.0 (Phase I)"))))}c.isMDXComponent=!0}}]);