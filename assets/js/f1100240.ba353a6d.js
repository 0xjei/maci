"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6490],{666:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=i(5893),r=i(1151);const n={slug:"maci v1.1.1",title:"Maci v1.1.1 Release",authors:{name:"ctrlc03 & chao",title:"MACI team",url:"https://pse.dev",image_url:"https://avatars.githubusercontent.com/u/61636542?s=200&v=4"},tags:["zk","maci","release","voting","security"]},o="MACI v1.1.1 Release Article",a={permalink:"/blog/maci v1.1.1",editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/blog/2023-01-18-maci-v1.1.1.md",source:"@site/blog/2023-01-18-maci-v1.1.1.md",title:"Maci v1.1.1 Release",description:"We are pleased to announce the release of an updated version of MACI - Minimal Anti-Collusion Infrastructure v1.1.1.",date:"2023-01-18T00:00:00.000Z",formattedDate:"January 18, 2023",tags:[{label:"zk",permalink:"/blog/tags/zk"},{label:"maci",permalink:"/blog/tags/maci"},{label:"release",permalink:"/blog/tags/release"},{label:"voting",permalink:"/blog/tags/voting"},{label:"security",permalink:"/blog/tags/security"}],readingTime:6.715,hasTruncateMarker:!1,authors:[{name:"ctrlc03 & chao",title:"MACI team",url:"https://pse.dev",image_url:"https://avatars.githubusercontent.com/u/61636542?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/61636542?s=200&v=4"}],frontMatter:{slug:"maci v1.1.1",title:"Maci v1.1.1 Release",authors:{name:"ctrlc03 & chao",title:"MACI team",url:"https://pse.dev",image_url:"https://avatars.githubusercontent.com/u/61636542?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/61636542?s=200&v=4"},tags:["zk","maci","release","voting","security"]},unlisted:!1,prevItem:{title:"Welcome to MACI",permalink:"/blog/welcome"},nextItem:{title:"A Technical Introduction to MACI 1.0",permalink:"/blog/MACI 1.0 Technical Introduction"}},c={authorsImageUrls:[void 0]},l=[{value:"Background",id:"background",level:2},{value:"Security Audit",id:"security-audit",level:2},{value:"New Features",id:"new-features",level:2},{value:"Top Up Credit",id:"top-up-credit",level:3},{value:"Pairwise Subsidy",id:"pairwise-subsidy",level:3},{value:"Coordinator Service",id:"coordinator-service",level:3},{value:"How to use MACI",id:"how-to-use-maci",level:2},{value:"MACI 0.x",id:"maci-0x",level:2},{value:"How to get involved",id:"how-to-get-involved",level:2},{value:"References",id:"references",level:2},{value:"Release",id:"release",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"We are pleased to announce the release of an updated version of MACI - Minimal Anti-Collusion Infrastructure v1.1.1."}),"\n",(0,s.jsx)(t.p,{children:"This new release brings a more secure product, new features, and a much needed documentation refresh. Before we dive into the updates, let's refresh your memory on what MACI is and what it was created to achieve."}),"\n",(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(t.p,{children:["MACI is an application that provides collusion resistance for on-chain voting processes. It was originally created after Vitalik's ",(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"post"}),", and has since been revisited and improved."]}),"\n",(0,s.jsx)(t.p,{children:"MACI revolves around the need for a trusted coordinator. The coordinator is in charge of setting up the system, publishing its public key, and computing the tally of the votes. Below are the main properties of MACI:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Collusion Resistance"}),(0,s.jsx)(t.td,{children:"no-one except a trusted coordinator should be certain of the validity of a vote, reducing the effectiveness of bribery."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Receipt-freeness"}),(0,s.jsx)(t.td,{children:"no-one can prove (besides to the coordinator) which way they voted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Privacy"}),(0,s.jsx)(t.td,{children:"no-one except a trusted coordinator should be able to decrypt a vote."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Uncensorability"}),(0,s.jsx)(t.td,{children:"no-one \u2014 not even the trusted coordinator, should be able to censor a vote."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Unforgeability"}),(0,s.jsx)(t.td,{children:"only the owner of a user's private key may cast a vote   tied to its corresponding public key."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Non-repudiation"}),(0,s.jsx)(t.td,{children:"no-one may modify or delete a vote after it is cast, although a user may cast another vote to nullify it."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Correct execution"}),(0,s.jsx)(t.td,{children:"no-one, not even the trusted coordinator, should be able to produce a false tally of votes."})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Since its inception, MACI has been adopted by different projects, most notably ",(0,s.jsx)(t.a,{href:"https://github.com/clrfund",children:"clr.fund"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/quadratic-funding/qfi/tree/feat/code-freeze",children:"QFI"}),". These projects prove how effective MACI can be, especially when integrated with applications that are otherwise prone to collusion, such as funding Public Goods."]}),"\n",(0,s.jsxs)(t.p,{children:["For a more detailed description of MACI, please refer to the ",(0,s.jsx)(t.a,{href:"https://medium.com/privacy-scaling-explorations/a-technical-introduction-to-maci-1-0-db95c3a9439a",children:"v1 technical introduction article"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"security-audit",children:"Security Audit"}),"\n",(0,s.jsxs)(t.p,{children:["MACI was ",(0,s.jsx)(t.a,{target:"_blank",href:i(1058).Z+"",children:"audited"})," by HashCloack in the summer of 2022. The audit team discovered certain high risk vulnerabilities, whose fixes were the focus of the MACI team in the past months."]}),"\n",(0,s.jsx)(t.p,{children:"In more details, the audit revealed two high risk issues within the zk-SNARK circuits:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Incomplete validation when processing messages"}),"\n",(0,s.jsx)(t.li,{children:"Integer overflow which could have allowed users to affect a coordinator's effort of calculating the subsidy by either making it incorrect or by intercepting the calculation"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Another notable security issue was the lack of initialization of the ",(0,s.jsx)(t.code,{children:"AccQueue"})," contract. This contract is used to store messages (votes or topups) for the different polls. Without inserting a zero value hash into the merkle tree contract as the first message during initialization, a malicious user could have performed a denial of service attack on a poll. This could have resulted in the poll results taking a very long time before being tallied by the coordinator."]}),"\n",(0,s.jsx)(t.p,{children:"All of these issues have been successfully resolved, on top of fixing minor issues and general code optimizations. The updated product uses a more up to date and secure version of Solidity, and more thorough test cases to verify the correctness of the solution."}),"\n",(0,s.jsx)(t.h2,{id:"new-features",children:"New Features"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feature"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://hackmd.io/@chaosma/rkyPfI7Iq",children:"Top Up Credit"})}),(0,s.jsx)(t.td,{children:"Users can now top up credits rather than having to sign up with a different MACI key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/pairwise-coordination-subsidies-a-new-quadratic-funding-design/5553",children:"Pairwise Subsidy"})}),(0,s.jsx)(t.td,{children:"Enhanced protection against collusion in quadratic funding"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/v1/server",children:"Coordinator Service"})}),(0,s.jsx)(t.td,{children:"Sample coordinator server for easier MACI use"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"top-up-credit",children:"Top Up Credit"}),"\n",(0,s.jsx)(t.p,{children:"Rather than requring a user to sign up multiple times, it is now possible to top up voice credits by sending a top up message on the Poll contract. Withdrawals are not enabled as this would allow a malicious user to bribe others offline to transfer their keys."}),"\n",(0,s.jsx)(t.p,{children:"Now, the Poll contract will hold all the funds deposited from users for the current poll. At the end of a poll, the coordinator can transfer the funds to a hardcoded address which can be used to fund public goods."}),"\n",(0,s.jsx)(t.p,{children:"When a user deposits tokens by calling topup, they will also need to specify the stateTree index. The topup function will insert a topup message into the message queue for them. When the voting period ends, any call of topup function will be rejected. Both voting and topup messages have the same ending time, which ensures there is a well-defined ending state for each poll."}),"\n",(0,s.jsxs)(t.p,{children:["Please note that in this approach, the initial credit is still shared across multiple polls, and the actual credit an user can spend in a given poll is the following: ",(0,s.jsx)(t.code,{children:"totalCredit=initialCredit+topupCredit"})," where the ",(0,s.jsx)(t.code,{children:"topupCredit"})," is the voice credit amount deposited by the user during the voting period of the given pollID."]}),"\n",(0,s.jsxs)(t.p,{children:["For a detailed description, please refer to this ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@chaosma/rkyPfI7Iq",children:"document"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"pairwise-subsidy",children:"Pairwise Subsidy"}),"\n",(0,s.jsx)(t.p,{children:"Pairwise subsidy is a new way to reduce collusion in quadratic funding applications. If two contributors  collude with each other, they can extract most of the public funding pool if they have enough funds."}),"\n",(0,s.jsxs)(t.p,{children:["In this ",(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/pairwise-coordination-subsidies-a-new-quadratic-funding-design/5553",children:"post"}),", Vitalik introduced this kind of collusion and also proposed a protocol to penalize this behavior. As a generalized solution, the more correlation between contributions, the smaller subsidy should be allocated to this project, as this reduces the risk of collusion between contributors. It should be noted that this solution assumes that an identity system is in place to prevent the same entity from registering with two different identities."]}),"\n",(0,s.jsxs)(t.p,{children:["Please refer to this ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@chaosma/H1_9xmT2K",children:"post"})," for a more detailed explaination of the implementation."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, please note that currently it is not possible to generate the ",(0,s.jsx)(t.code,{children:"zkeys"})," for the subsidy circuit with with the ",(0,s.jsx)(t.code,{children:"vote options"})," parameter larger than $5^2$. This issue is documented ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/issues/584",children:"here"})," and the team will focus on finding a solution to be able to support larger vote options."]}),"\n",(0,s.jsx)(t.h3,{id:"coordinator-service",children:"Coordinator Service"}),"\n",(0,s.jsxs)(t.p,{children:["MACI now includes a sample ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/v1/server",children:"coordinator service"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"There are two roles in the cordinator service: admin (i.e. MACI coordinator) and user (i.e. a voter). The admin's responsibility is to ensure that the code remains updated and that the backend services are live. The user can then simply send HTTP requests to the backend server to interact with MACI, for instance, by signing up and publishing a message on chain."}),"\n",(0,s.jsx)(t.p,{children:"The coordinator service has been wrapped into two docker instances: one for the backend server to accept user requests; one for the Mongodb service to store all necessary information on the current state such as smart contract addresses, zero knowledge proof keys and so on."}),"\n",(0,s.jsxs)(t.p,{children:["For further reading on coordinator services, please refer to this ",(0,s.jsx)(t.a,{href:"https://hackmd.io/@chaosma/SJtsfzKnF",children:"doc"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-maci",children:"How to use MACI"}),"\n",(0,s.jsx)(t.p,{children:"MACI can be used as a standalone application to carry out on-chain polls, or be implemented into new projects that can then benefit from its properties."}),"\n",(0,s.jsxs)(t.p,{children:["For use as a standalone application, a ",(0,s.jsx)(t.code,{children:"cli"})," package is provided which allows coordinators and voters to use MACI. Please refer to this ",(0,s.jsx)(t.a,{href:"https://privacy-scaling-explorations.github.io/maci/cli.html",children:"doc"})," for details on how to use it."]}),"\n",(0,s.jsxs)(t.p,{children:["To implement MACI into a project, the ",(0,s.jsx)(t.a,{href:"https://privacy-scaling-explorations.github.io/maci/",children:"documentation"})," can be used a reference, as well as reviewing how ",(0,s.jsx)(t.a,{href:"https://github.com/clrfund",children:"clr.fund"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/quadratic-funding/qfi/tree/feat/code-freeze",children:"qfi"})," use MACI in their code."]}),"\n",(0,s.jsx)(t.h2,{id:"maci-0x",children:"MACI 0.x"}),"\n",(0,s.jsx)(t.p,{children:"MACI version 0.x will be discontinued. MACI 1.x has feature parity, more robust code and newest features. Users are encouraged to use the latest version. Starting February 7, 2023, the team will focus solely on resolving issues for MACI 1.x, and will cease to provide support for version 0.x."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-get-involved",children:"How to get involved"}),"\n",(0,s.jsxs)(t.p,{children:["Should you wish to get involved with MACI or simply report a bug, feel free to visit the ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/v1",children:"repository"})," and open an issue, or comment under an open issue to notify the team of your intention to work on it."]}),"\n",(0,s.jsxs)(t.p,{children:["For any other enquiry, please reach out to us via the Privacy and Scaling Explorations (PSE) ",(0,s.jsx)(t.a,{href:"https://discord.gg/bTdZfpc69U",children:"Discord"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/v1",children:"MACI GitHub repository"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/privacy-scaling-explorations/a-technical-introduction-to-maci-1-0-db95c3a9439a",children:"A technical introduction to MACI 1.0 - Kyle Charbonnet"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"Minimal anti-collusion infrastructure - Vitalik"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/pairwise-coordination-subsidies-a-new-quadratic-funding-design/5553",children:"Pairwise Subsidy"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/v1/audit/202220930_Hashcloak_audit_report.pdf",children:"Security Audit"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"release",children:"Release"}),"\n",(0,s.jsxs)(t.p,{children:["Here is a link to the new release code in GitHub - ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/releases/tag/v1.1.1",children:"v1.1.1 Release"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1058:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/files/202220930_Hashcloak_audit_report-14721b7c4e340998f118116825f611e0.pdf"},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(7294);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);