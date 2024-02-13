"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4306],{1035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(5250),r=n(720);const i={},l="IMACI",d={id:"solidity-docs/interfaces/IMACI",title:"IMACI",description:"MACI interface",source:"@site/versioned_docs/version-v1.x/solidity-docs/interfaces/IMACI.md",sourceDirName:"solidity-docs/interfaces",slug:"/solidity-docs/interfaces/IMACI",permalink:"/docs/solidity-docs/interfaces/IMACI",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/interfaces/IMACI.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"IEAS",permalink:"/docs/solidity-docs/interfaces/IEAS"},next:{title:"IMessageProcessorFactory",permalink:"/docs/solidity-docs/interfaces/IMPFactory"}},c={},a=[{value:"stateTreeDepth",id:"statetreedepth",level:3},{value:"Return Values",id:"return-values",level:4},{value:"getStateAqRoot",id:"getstateaqroot",level:3},{value:"Return Values",id:"return-values-1",level:4},{value:"mergeStateAqSubRoots",id:"mergestateaqsubroots",level:3},{value:"Parameters",id:"parameters",level:4},{value:"mergeStateAq",id:"mergestateaq",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"numSignUps",id:"numsignups",level:3},{value:"Return Values",id:"return-values-3",level:4},{value:"stateAq",id:"stateaq",level:3},{value:"Return Values",id:"return-values-4",level:4}];function h(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"imaci",children:"IMACI"}),"\n",(0,s.jsx)(t.p,{children:"MACI interface"}),"\n",(0,s.jsx)(t.h3,{id:"statetreedepth",children:"stateTreeDepth"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function stateTreeDepth() external view returns (uint8)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the depth of the state tree"}),"\n",(0,s.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[0]"}),(0,s.jsx)(t.td,{children:"uint8"}),(0,s.jsx)(t.td,{children:"The depth of the state tree"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"getstateaqroot",children:"getStateAqRoot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function getStateAqRoot() external view returns (uint256)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Return the main root of the StateAq contract"}),"\n",(0,s.jsx)(t.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[0]"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The Merkle root"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"mergestateaqsubroots",children:"mergeStateAqSubRoots"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function mergeStateAqSubRoots(uint256 _numSrQueueOps, uint256 _pollId) external\n"})}),"\n",(0,s.jsx)(t.p,{children:"Allow Poll contracts to merge the state subroots"}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_numSrQueueOps"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"Number of operations"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_pollId"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The ID of the active Poll"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"mergestateaq",children:"mergeStateAq"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function mergeStateAq(uint256 _pollId) external returns (uint256)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Allow Poll contracts to merge the state root"}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_pollId"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The active Poll ID"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[0]"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The calculated Merkle root"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"numsignups",children:"numSignUps"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function numSignUps() external view returns (uint256)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the number of signups"}),"\n",(0,s.jsx)(t.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[0]"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"numsignUps The number of signups"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"stateaq",children:"stateAq"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function stateAq() external view returns (contract AccQueue)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Get the state AccQueue"}),"\n",(0,s.jsx)(t.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[0]"}),(0,s.jsx)(t.td,{children:"contract AccQueue"}),(0,s.jsx)(t.td,{children:"The state AccQueue"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},720:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(79);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);