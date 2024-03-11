"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6044],{4216:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(5250),s=t(720);const c={title:"MACI Overview",description:"High-level overview of the MACI codebase",sidebar_label:"Overview",sidebar_position:4},n="MACI Overview",o={id:"overview",title:"MACI Overview",description:"High-level overview of the MACI codebase",source:"@site/versioned_docs/version-v1.x/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/overview.md",tags:[],version:"v1.x",sidebarPosition:4,frontMatter:{title:"MACI Overview",description:"High-level overview of the MACI codebase",sidebar_label:"Overview",sidebar_position:4},sidebar:"version-1.x/mySidebar",previous:{title:"Workflow",permalink:"/docs/workflow"},next:{title:"Installation",permalink:"/docs/installation"}},a={},l=[{value:"Circuits",id:"circuits",level:2},{value:"Smart contracts",id:"smart-contracts",level:2},{value:"TypeScript libraries",id:"typescript-libraries",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"maci-overview",children:"MACI Overview"}),"\n",(0,r.jsx)(i.p,{children:"The MACI codebase consists of three subsystems in different programming languages:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Circom circuits"}),"\n",(0,r.jsx)(i.li,{children:"Solidity smart contracts"}),"\n",(0,r.jsx)(i.li,{children:"TypeScript libraries"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"circuits",children:"Circuits"}),"\n",(0,r.jsx)(i.p,{children:"MACI has multiple circuits that ensure all off-chain computation is completed correctly. The circuits are used to generate zero-knowledge proofs (zk-SNARKs) that the votes were counted correctly. Specifically, they enforce that message processing and vote tallying were correctly executed by the coordinator. The proofs can then be verified through a verifier smart contract on-chain."}),"\n",(0,r.jsxs)(i.p,{children:["The circuits for these zero-knowledge proofs are written\nin ",(0,r.jsx)(i.a,{href:"https://iden3.io/circom",children:"Circom"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The MACI circuits are released through the ",(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-circuits",children:(0,r.jsx)(i.code,{children:"@maci-circuits"})})," NPM package."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/docs/circuits",children:"Learn more about MACI circuits"})}),"\n",(0,r.jsx)(i.h2,{id:"smart-contracts",children:"Smart contracts"}),"\n",(0,r.jsx)(i.p,{children:"The MACI smart contracts handle the on-chain aspects - both the functionality and the storage - of the voting system. They provide the functionality to deploy polls, register voters, and accept votes. They also store and manage the on-chain data from transactions, such as the encrypted votes of a poll. Finally, they verify proofs of the zk-SNARK circuits, so that everyone can validate the voting results."}),"\n",(0,r.jsxs)(i.p,{children:["The MACI smart contracts are written in ",(0,r.jsx)(i.a,{href:"https://soliditylang.org/",children:"Solidity"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Contracts are released through the ",(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-contracts",children:(0,r.jsx)(i.code,{children:"@maci-contracts"})})," NPM package."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"/docs/contracts",children:"Learn more about MACI contracts"})}),"\n",(0,r.jsx)(i.h2,{id:"typescript-libraries",children:"TypeScript libraries"}),"\n",(0,r.jsx)(i.p,{children:"The TypeScript libraries manage the business logic between the smart contracts and the circuit code. They provide a variety of functionality, such as encryption tools, utilities, and a CLI for interacting with MACI (for actions like signing up, voting, tallying votes & generating proofs)."}),"\n",(0,r.jsxs)(i.p,{children:["The MACI ",(0,r.jsx)(i.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," libraries are released through the following NPM packages:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-cli",children:(0,r.jsx)(i.code,{children:"@maci-cli"})})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-core",children:(0,r.jsx)(i.code,{children:"@maci-core"})})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-crypto",children:(0,r.jsx)(i.code,{children:"@maci-crypto"})})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-domainobjs",children:(0,r.jsx)(i.code,{children:"@maci-domainobjs"})})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://www.npmjs.com/package/maci-integrationtests",children:(0,r.jsx)(i.code,{children:"@maci-integrationtests"})})}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},720:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>n});var r=t(79);const s={},c=r.createContext(s);function n(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);