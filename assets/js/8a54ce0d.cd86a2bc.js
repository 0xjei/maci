"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8042],{778:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=i(5250),n=i(2459);const s={},c="IVerifier",d={id:"solidity-docs/interfaces/IVerifier",title:"IVerifier",description:"an interface for a Groth16 verifier contract",source:"@site/versioned_docs/version-v1.x/solidity-docs/interfaces/IVerifier.md",sourceDirName:"solidity-docs/interfaces",slug:"/solidity-docs/interfaces/IVerifier",permalink:"/docs/solidity-docs/interfaces/IVerifier",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/interfaces/IVerifier.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"ITallySubsidyFactory",permalink:"/docs/solidity-docs/interfaces/ITallySubsidyFactory"},next:{title:"IVkRegistry",permalink:"/docs/solidity-docs/interfaces/IVkRegistry"}},o={},l=[{value:"verify",id:"verify",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values",level:4}];function a(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"iverifier",children:"IVerifier"}),"\n",(0,r.jsx)(t.p,{children:"an interface for a Groth16 verifier contract"}),"\n",(0,r.jsx)(t.h3,{id:"verify",children:"verify"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"function verify(uint256[8] _proof, struct SnarkCommon.VerifyingKey vk, uint256 input) external view returns (bool)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Verify a zk-SNARK proof"}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"_proof"}),(0,r.jsx)(t.td,{children:"uint256[8]"}),(0,r.jsx)(t.td,{children:"The proof"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vk"}),(0,r.jsx)(t.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,r.jsx)(t.td,{children:"The verifying key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"input"}),(0,r.jsx)(t.td,{children:"uint256"}),(0,r.jsx)(t.td,{children:"The public inputs to the circuit"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"[0]"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether the proof is valid given the verifying key and public          input. Note that this function only supports one public input.          Refer to the Semaphore source code for a verifier that supports          multiple public inputs."})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2459:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>c});var r=i(79);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);