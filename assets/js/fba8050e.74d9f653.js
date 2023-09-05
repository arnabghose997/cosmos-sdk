"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[9942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="ADR 050: SIGN_MODE_TEXTUAL: Annex 2 XXX",l={unversionedId:"architecture/adr-050-sign-mode-textual-annex2",id:"version-v0.50/architecture/adr-050-sign-mode-textual-annex2",title:"ADR 050: SIGN_MODE_TEXTUAL: Annex 2 XXX",description:"Changelog",source:"@site/versioned_docs/version-v0.50/architecture/adr-050-sign-mode-textual-annex2.md",sourceDirName:"architecture",slug:"/architecture/adr-050-sign-mode-textual-annex2",permalink:"/v0.50/architecture/adr-050-sign-mode-textual-annex2",draft:!1,tags:[],version:"v0.50",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 050: SIGN_MODE_TEXTUAL: Annex 1 Value Renderers",permalink:"/v0.50/architecture/adr-050-sign-mode-textual-annex1"},next:{title:"ADR 050: SIGN_MODE_TEXTUAL",permalink:"/v0.50/architecture/adr-050-sign-mode-textual"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-050-sign_mode_textual-annex-2-xxx"},"ADR 050: SIGN_MODE_TEXTUAL: Annex 2 XXX"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oct 3, 2022: Initial Draft")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"DRAFT"),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This annex provides normative guidance on how devices should render a\n",(0,r.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," document."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," allows a legible version of a transaction to be signed\non a hardware security device, such as a Ledger. Early versions of the\ndesign rendered transactions directly to lines of ASCII text, but this\nproved awkward from its in-band signaling, and for the need to display\nUnicode text within the transaction."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_TEXTUAL")," renders to an abstract representation, leaving it\nup to device-specific software how to present this representation given the\ncapabilities, limitations, and conventions of the deivce."),(0,r.kt)("p",null,"We offer the following normative guidance:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The presentation should be as legible as possible to the user, given\nthe capabilities of the device. If legibility could be sacrificed for other\nproperties, we would recommend just using some other signing mode.\nLegibility should focus on the common case - it is okay for unusual cases\nto be less legible.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The presentation should be invertible if possible without substantial\nsacrifice of legibility.  Any change to the rendered data should result\nin a visible change to the presentation. This extends the integrity of the\nsigning to user-visible presentation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The presentation should follow normal conventions of the device,\nwithout sacrificing legibility or invertibility."))),(0,r.kt)("p",null,"As an illustration of these principles, here is an example algorithm\nfor presentation on a device which can display a single 80-character\nline of printable ASCII characters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The presentation is broken into lines, and each line is presented in\nsequence, with user controls for going forward or backward a line.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Expert mode screens are only presented if the device is in expert mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each line of the screen starts with a number of ",(0,r.kt)("inlineCode",{parentName:"p"},">")," characters equal\nto the screen's indentation level, followed by a ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," character if this\nisn't the first line of the screen, followed by a space if either a\n",(0,r.kt)("inlineCode",{parentName:"p"},">")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," has been emitted,\nor if this header is followed by a ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", or space.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the line ends with whitespace or an ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," character, an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),"\ncharacter is appended to the line.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following ASCII control characters or backslash (",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),") are converted\nto a backslash followed by a letter code, in the manner of string literals\nin many languages:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* a: U+0007 alert or bell\n* b: U+0008 backspace\n* f: U+000C form feed\n* n: U+000A line feed\n* r: U+000D carriage return\n* t: U+0009 horizontal tab\n* v: U+000B vertical tab\n* `\\`: U+005C backslash\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All other ASCII control characters, plus non-ASCII Unicode code points,\nare shown as either:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* `\\u` followed by 4 uppercase hex chacters for code points\nin the basic multilingual plane (BMP).\n\n* `\\U` followed by 8 uppercase hex characters for other code points.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The screen will be broken into multiple lines to fit the 80-character\nlimit, considering the above transformations in a way that attempts to\nminimize the number of lines generated. Expanded control or Unicode characters\nare never split across lines."))),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"An introductory line.\nkey1: 123456\nkey2: a string that ends in whitespace   @\nkey3: a string that ends in  a single ampersand - @@\n >tricky key4<: note the leading space in the presentation\nintroducing an aggregate\n> key5: false\n> key6: a very long line of text, please co\\u00F6perate and break into\n>+  multiple lines.\n> Can we do further nesting?\n>> You bet we can!\n")),(0,r.kt)("p",null,"The inverse mapping gives us the only input which could have\ngenerated this output (JSON notation for string data):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Indent  Text\n------  ----\n0       "An introductory line."\n0       "key1: 123456"\n0       "key2: a string that ends in whitespace   "\n0       "key3: a string that ends in  a single ampersand - @"\n0       ">tricky key4<: note the leading space in the presentation"\n0       "introducing an aggregate"\n1       "key5: false"\n1       "key6: a very long line of text, please co\xf6perate and break into multiple lines."\n1       "Can we do further nesting?"\n2       "You bet we can!"\n')))}d.isMDXComponent=!0}}]);