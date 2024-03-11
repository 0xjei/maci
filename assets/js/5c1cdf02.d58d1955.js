"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6573],{4606:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=o(5250),n=o(720);const i={title:"MACI Topup",description:"How the Topup feature works",sidebar_label:"Topup",sidebar_position:22},r="Topup",a={id:"topup",title:"MACI Topup",description:"How the Topup feature works",source:"@site/versioned_docs/version-v1.x/topup.md",sourceDirName:".",slug:"/topup",permalink:"/docs/topup",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/topup.md",tags:[],version:"v1.x",sidebarPosition:22,frontMatter:{title:"MACI Topup",description:"How the Topup feature works",sidebar_label:"Topup",sidebar_position:22},sidebar:"version-1.x/mySidebar",previous:{title:"MACI poll types",permalink:"/docs/poll-types"},next:{title:"Solidity Docs",permalink:"/docs/solidity-docs/"}},c={},d=[{value:"How topup messages are processed",id:"how-topup-messages-are-processed",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Voice credits",id:"voice-credits",level:3},{value:"Reverse processing",id:"reverse-processing",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"topup",children:"Topup"}),"\n",(0,s.jsxs)(t.p,{children:["MACI v1.1.1 introduced the topup feature. This was developed by ",(0,s.jsx)(t.a,{href:"https://github.com/chaosma",children:"chaosma"}),": you can find more information on their ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@chaosma/rkyPfI7Iq",children:"post"})," and the original idea post ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@ef-zkp/rk6uaQBrI",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In a nutshell, this feature was added to support some application like quadratic funding, where once a user uses all of their voice credits when voting, they would need to signup again to be able to vote again. This is not ideal, and thus with this feature, a user can topup their voice credits, and continue to vote for a poll/quadratic funding round."}),"\n",(0,s.jsx)(t.h2,{id:"how-topup-messages-are-processed",children:"How topup messages are processed"}),"\n",(0,s.jsxs)(t.p,{children:["Topup messages are submitted on chain using the same smart contract used for voting, ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/contracts/contracts/Poll.sol",children:(0,s.jsx)(t.code,{children:"Poll"})}),". With the current design, a TopUpCredit token smart contract is required. In this implementation of MACI, there is an example token, which is an ERC20 contract with 1 decimal, of which the coordinator (or MACI's operator) has ownership of. This privileged figure can mint tokens to users (at their discretion) and users will need to deposit such tokens to the Poll contract in order to topup their voice credits."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"MACI is not concerned with the way of distributing such tokens. The operators of the MACI instance should implement their own way of distributing such tokens, as well as withdrawing them from the Poll contract. For instance, if the operator chooses to use a token with a monetary value, the Poll balance could be withdrawn and sent to fund public goods."})}),"\n",(0,s.jsxs)(t.p,{children:["To submit a topup message, a user will then need to call the TopUpCredit token approve function and approve the Poll contract to spend their tokens. Then, they will need to call the ",(0,s.jsx)(t.code,{children:"topup"})," function in the Poll contract, passing the amount of tokens they want to topup and their state index."]}),"\n",(0,s.jsx)(t.h2,{id:"considerations",children:"Considerations"}),"\n",(0,s.jsx)(t.h3,{id:"voice-credits",children:"Voice credits"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"As a MACI operator, you should be aware that voice credits should ideally be small values (< 2 ** 32) to avoid overflows or issues in the circuits operations. It is recommended to use a factor to scale down voice credits in the smart contract."})}),"\n",(0,s.jsx)(t.h3,{id:"reverse-processing",children:"Reverse processing"}),"\n",(0,s.jsxs)(t.p,{children:["As with normal vote messages (or key changes), topup messages are processed in ",(0,s.jsx)(t.a,{href:"https://maci.pse.dev/docs/key-change/#why-are-messages-processed-in-reverse-order",children:"reverse order"}),", you should be aware that as a user, you will first need to spend your voice credits, then topup."]}),"\n",(0,s.jsxs)(t.p,{children:["Here is an ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@chaosma/rkyPfI7Iq#Remarks",children:"extract from Chao's post"}),":"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"With above design, the order of vote type and topup type message matters. MACI process the message queue in reverse order. Suppose the initial > credit balance for any user is 100. Consider the following two scenarios in message queue:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Case 1"})," > [topup(balance=350), vote(weight=20,nonce=2), vote(weight=9,nonce=1)]"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"case 2"})," > [vote(weight=20,nonce=2), topup(balance=350), vote(weight=9,nonce=1)]",(0,s.jsx)(t.br,{}),"\n","The first case, the topup message is processed at last, so the vote(weight=20,nonce=2) will fail because 20 * 20 > 100. vote(weight=9,nonce=1) is the final result. In the second case, the topup message is processed before the second vote, so vote(weight=20,nonce=2) will invalidate the first vote and become the final result."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},720:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var s=o(79);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);