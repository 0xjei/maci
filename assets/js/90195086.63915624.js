"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6121],{4710:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=a(5893),n=a(1151);const i={},r="FAQ",o={id:"faq",title:"FAQ",description:"- I: Attacks and mitigations",source:"@site/versioned_docs/version-v0.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/v0.x/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v0.x/faq.md",tags:[],version:"v0.x",frontMatter:{},sidebar:"version-0.x/mySidebar",previous:{title:"Contract",permalink:"/docs/v0.x/contract"},next:{title:"Minimum Anti-Collusion Infrastructure",permalink:"/docs/v0.x/introduction"}},l={},h=[{value:"I: Attacks and mitigations",id:"i-attacks-and-mitigations",level:2},{value:"If the coordinator censors messages",id:"if-the-coordinator-censors-messages",level:3},{value:"If a user submits a message with an invalid signature",id:"if-a-user-submits-a-message-with-an-invalid-signature",level:3},{value:"If an adversarial miner bribes a user and controls the <code>randomLeaf</code> value passed into the state transition snark",id:"if-an-adversarial-miner-bribes-a-user-and-controls-the-randomleaf-value-passed-into-the-state-transition-snark",level:3},{value:"User creates a command that the snark cannot process",id:"user-creates-a-command-that-the-snark-cannot-process",level:3},{value:"If a briber locks the user&#39;s key in trusted hardware",id:"if-a-briber-locks-the-users-key-in-trusted-hardware",level:3},{value:"Deposit my public key and i will pay you",id:"deposit-my-public-key-and-i-will-pay-you",level:3},{value:"If an attacker fills up the message tree with a such a large number of commands that the coordinator cannot afford to generate enough proofs to process them all",id:"if-an-attacker-fills-up-the-message-tree-with-a-such-a-large-number-of-commands-that-the-coordinator-cannot-afford-to-generate-enough-proofs-to-process-them-all",level:3},{value:"II: Claims / required invariants",id:"ii-claims--required-invariants",level:2},{value:"III: Desired features not described in this specification",id:"iii-desired-features-not-described-in-this-specification",level:2},{value:"IV: Quadratic and sybil-resistant million-dollar-homepages",id:"iv-quadratic-and-sybil-resistant-million-dollar-homepages",level:2}];function c(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#i-attacks-and-mitigations",children:"I: Attacks and mitigations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#if-the-coordinator-censors-messages",children:"If the coordinator censors messages"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#if-a-user-submits-a-message-with-an-invalid-signature",children:"If a user submits a message with an invalid signature"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.a,{href:"#if-an-adversarial-miner-bribes-a-user-and-controls-the-randomleaf-value-passed-into-the-state-transition-snark",children:["If an adversarial miner bribes a user and controls the ",(0,t.jsx)(s.code,{children:"randomLeaf"})," value passed into the state transition snark"]})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#user-creates-a-command-that-the-snark-cannot-process",children:"User creates a command that the snark cannot process"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#if-a-briber-locks-the-users-key-in-trusted-hardware",children:"If a briber locks the user's key in trusted hardware"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#deposit-my-public-key-and-i-will-pay-you",children:"Deposit my public key and i will pay you"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#if-an-attacker-fills-up-the-message-tree-with-a-such-a-large-number-of-commands-that-the-coordinator-cannot-afford-to-generate-enough-proofs-to-process-them-all",children:"If an attacker fills up the message tree with a such a large number of commands that the coordinator cannot afford to generate enough proofs to process them all"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#ii-claims--required-invariants",children:"II: Claims / required invariants"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#iii-desired-features-not-described-in-this-specification",children:"III: Desired features not described in this specification"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#iv-quadratic-and-sybil-resistant-million-dollar-homepages",children:"IV: Quadratic and sybil-resistant million-dollar-homepages"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"i-attacks-and-mitigations",children:"I: Attacks and mitigations"}),"\n",(0,t.jsx)(s.h3,{id:"if-the-coordinator-censors-messages",children:"If the coordinator censors messages"}),"\n",(0,t.jsxs)(s.p,{children:["If the coordinator censors a message ",(0,t.jsx)(s.code,{children:"N"})," by excluding it from the final vote tally, the logic in ",(0,t.jsx)(s.code,{children:"processMessage()"})," will prevent them from processsing message ",(0,t.jsx)(s.code,{children:"N+1"})," or any future message until they do so."]}),"\n",(0,t.jsx)(s.h3,{id:"if-a-user-submits-a-message-with-an-invalid-signature",children:"If a user submits a message with an invalid signature"}),"\n",(0,t.jsx)(s.p,{children:"The coordinator should verify the message's signature off-chain and if it is invalid, set the no-op flag to true and pass it into the state transition proof circuit. If the coordinator does not do this, they will fail to generate a valid proof anyway."}),"\n",(0,t.jsxs)(s.h3,{id:"if-an-adversarial-miner-bribes-a-user-and-controls-the-randomleaf-value-passed-into-the-state-transition-snark",children:["If an adversarial miner bribes a user and controls the ",(0,t.jsx)(s.code,{children:"randomLeaf"})," value passed into the state transition snark"]}),"\n",(0,t.jsx)(s.p,{children:"This adversary does not know the value of the other leaves of the state tree, so even if the coordinator updates leaf 0 with the adversary's entropy, the adversary cannot tell if the processed commmand is invalid."}),"\n",(0,t.jsx)(s.h3,{id:"user-creates-a-command-that-the-snark-cannot-process",children:"User creates a command that the snark cannot process"}),"\n",(0,t.jsx)(s.p,{children:"The the system must be designed and built in a way such that this cannot happen."}),"\n",(0,t.jsx)(s.h3,{id:"if-a-briber-locks-the-users-key-in-trusted-hardware",children:"If a briber locks the user's key in trusted hardware"}),"\n",(0,t.jsx)(s.p,{children:"Assuming that the locked key is not the user's initial public key, the briber has no way to tell if the user has not already changed their key. This scenario is therefore the same as that in which the user gives a public key to a briber witout trusted hardware."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"[name=kobi]\nI don't think the reasoning works, for example for a user with trusted hardware:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["User has trusted hardware that allows a single key change. The user has initial public key ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"k"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"pk"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," and public key ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"pk2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]})]}),"\n",(0,t.jsxs)(s.li,{children:["User registers with ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"k"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"pk"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})]}),"\n",(0,t.jsxs)(s.li,{children:["User changes to ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"pk2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]}),", with the trusted hardware attesting this is the second public key and no further key changes are allowed"]}),"\n",(0,t.jsxs)(s.li,{children:["Briber gets ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"sk2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]})," and the attestation and then uses ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"p"}),(0,t.jsx)(s.mi,{children:"k"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"pk2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["[name=barry] I think that the attack is where you lock the initial key in trusted hardware. The solution is to use ",(0,t.jsx)(s.a,{href:"https://www.vitalik.ca/general/2019/10/01/story.html",children:"https://www.vitalik.ca/general/2019/10/01/story.html"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"deposit-my-public-key-and-i-will-pay-you",children:"Deposit my public key and i will pay you"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"[name=barry] This is the most serious attack IMO. The deposit stake is weak prevention for this."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"if-an-attacker-fills-up-the-message-tree-with-a-such-a-large-number-of-commands-that-the-coordinator-cannot-afford-to-generate-enough-proofs-to-process-them-all",children:"If an attacker fills up the message tree with a such a large number of commands that the coordinator cannot afford to generate enough proofs to process them all"}),"\n",(0,t.jsx)(s.p,{children:"Each user should be allowed to publish at no cost as many messages as there are vote options, plus a small number (e.g. 2). Each subsequent message should cost the user an increasing amount of ETH. When the coordinator processes the message, the contract should return the ETH to the user. As such, the majority of non-malicious users will not have to pay any more than the gas costs to vote, and spammers must put up capital to attack the coordinator."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"[barry] there is no way to enforce this limit without allowing for bribary.\n[name=wei jie] how does this have to do with bribery? i understand this to only be an anti-spam mechanism."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"ii-claims--required-invariants",children:"II: Claims / required invariants"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"It is impossible for a coordinator to find a collision in message decryptions. i.e. they cannot decrypt a message to a different command."}),"\n",(0,t.jsx)(s.li,{children:"It is impossible for a user to create a message that the coordinator is not able to process."}),"\n",(0,t.jsx)(s.li,{children:"It is impossible for a user to create a message such that the coordinator is unable to create a zk-SNARK proof of a state root transition."}),"\n",(0,t.jsx)(s.li,{children:"No-one but the coordindator can trustlessly bribe someone."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"iii-desired-features-not-described-in-this-specification",children:"III: Desired features not described in this specification"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A perpetual sign-up process"}),"\n",(0,t.jsx)(s.li,{children:"Reuse the MACI contract for a new vote. This requires the operator to zero out each user's vote option tree."}),"\n",(0,t.jsx)(s.li,{children:"Mitigations for some of the attacks described above"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"iv-quadratic-and-sybil-resistant-million-dollar-homepages",children:"IV: Quadratic and sybil-resistant million-dollar-homepages"}),"\n",(0,t.jsxs)(s.p,{children:["Another use case for MACI is a ",(0,t.jsx)(s.a,{href:"http://www.milliondollarhomepage.com/",children:"million-dollar-homepage"})," style bulletin board where users can post and quadratically vote on images. A user who owns a ",(0,t.jsx)(s.a,{href:"https://www.poap.xyz/",children:"POAP"})," token from a real-life event can sign up and receive 2 ^ 32 voting tokens per week. To add a picture to the board, they have to burn 1 ETH, which disincentivises spam. The visual prominance of size of each picture scales with the sum of square roots of the votes that it receives."]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>r});var t=a(7294);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);