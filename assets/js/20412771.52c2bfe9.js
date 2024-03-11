"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3162],{6992:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(5250),t=n(720);const r={title:"MACI Security Audits",description:"Overview of MACI audit history with references to audit reports.",sidebar_label:"Security audits",sidebar_position:14},a="MACI Security Audits",c={id:"audit",title:"MACI Security Audits",description:"Overview of MACI audit history with references to audit reports.",source:"@site/versioned_docs/version-v1.x/audit.md",sourceDirName:".",slug:"/audit",permalink:"/docs/audit",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/audit.md",tags:[],version:"v1.x",sidebarPosition:14,frontMatter:{title:"MACI Security Audits",description:"Overview of MACI audit history with references to audit reports.",sidebar_label:"Security audits",sidebar_position:14},sidebar:"version-1.x/mySidebar",previous:{title:"Integrating",permalink:"/docs/integrating"},next:{title:"CI",permalink:"/docs/ci-pipeline"}},d={},o=[{value:"Full reports",id:"full-reports",level:2},{value:"PSE audit 2024",id:"pse-audit-2024",level:2},{value:"Veridise disclosure 2023",id:"veridise-disclosure-2023",level:2},{value:"Issue 1",id:"issue-1",level:3},{value:"Issue 2",id:"issue-2",level:3},{value:"Issue 3",id:"issue-3",level:3},{value:"HashCloak audit 2022",id:"hashcloak-audit-2022",level:2},{value:"HashCloak audit 2021",id:"hashcloak-audit-2021",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"maci-security-audits",children:"MACI Security Audits"}),"\n",(0,s.jsx)(i.h2,{id:"full-reports",children:"Full reports"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Audit by PSE Audit 2024/02 ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(7049).Z+"",children:"report"})]}),"\n",(0,s.jsxs)(i.li,{children:["Audit by HashCloak 2022/09 ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(9105).Z+"",children:"report"})]}),"\n",(0,s.jsxs)(i.li,{children:["Audit by HashCloak 2021/09 ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(715).Z+"",children:"report"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"pse-audit-2024",children:"PSE audit 2024"}),"\n",(0,s.jsx)(i.p,{children:"In February 2024 the PSE Audit team audited the MACI codebase with a focus on the smart contracts, TypeScript core, and Circom circuits Three critical bugs were found: two within the Circom circuits and one in the smart contracts. All three of these have been fixed."}),"\n",(0,s.jsxs)(i.p,{children:["Please see the ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(7049).Z+"",children:"PSE Audit report"})," for details."]}),"\n",(0,s.jsx)(i.h2,{id:"veridise-disclosure-2023",children:"Veridise disclosure 2023"}),"\n",(0,s.jsxs)(i.p,{children:["In March 2023, Veridise responsibly disclosed a number of issues to the MACI team, which were identified using their new ",(0,s.jsx)(i.a,{href:"https://twitter.com/VeridiseInc/status/1630806464695791616?s=20",children:"tool"})," for catching ZK circuit bugs."]}),"\n",(0,s.jsx)(i.p,{children:"Out of five issues disclosed, only three were relevant and have been since fixed by the MACI team. The other two issues were disregarded as they were present in older version of code which is not in use anymore."}),"\n",(0,s.jsx)(i.p,{children:"We would like to thank you the Veridise team for their effort in keeping open source projects safe."}),"\n",(0,s.jsx)(i.h3,{id:"issue-1",children:"Issue 1"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Description"})}),"\n",(0,s.jsxs)(i.p,{children:["In the template ",(0,s.jsx)(i.code,{children:"QuinSelector"}),", if you want to confirm the input signal index is a valid integer less than 2**3, you should add Num2bits(3) to check it."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Code Location"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/78609349aecd94186216ac8743d61b1cb81a097f/circuits/circom/trees/incrementalQuinTree.circom#L30",children:(0,s.jsx)(i.code,{children:"incrementalQuinTree.circom"})})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Fix"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/chaosma/maci/blob/60727d4d10406edda32ad28e53d399d41d45ed88/circuits/circom/trees/incrementalQuinTree.circom#L37",children:"Code location"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"// Ensure that index < choices\ncomponent lessThan = SafeLessThan(3);\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This was fixed by adding a new Template, ",(0,s.jsx)(i.code,{children:"SafeLesThan"})," which uses ",(0,s.jsx)(i.code,{children:"Num2Bits"})," as further check on the signals:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"// the implicit assumption of LessThan is both inputs are at most n bits\n// so we need add range check for both inputs\ntemplate SafeLessThan(n) {\n    assert(n <= 252);\n    signal input in[2];\n    signal output out;\n\n    component n2b1 = Num2Bits(n);\n    n2b1.in  <== in[0];\n    component n2b2 = Num2Bits(n);\n    n2b2.in  <== in[1];\n\n    component n2b = Num2Bits(n+1);\n\n    n2b.in <== in[0]+ (1<<n) - in[1];\n\n    out <== 1-n2b.out[n];\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"issue-2",children:"Issue 2"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Description"})}),"\n",(0,s.jsx)(i.p,{children:"This issue is the same issue number 1, this time for the input signal index."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Code Location"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/78609349aecd94186216ac8743d61b1cb81a097f/circuits/circom/trees/incrementalQuinTree.circom#L64",children:(0,s.jsx)(i.code,{children:"incrementalQuinTree.circom"})})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Fix"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/privacy-scaling-explorations/maci/pull/646/files#diff-f3ad1f61e9b95b88929664b67c873325fdf70cb8569c2a96da4b0e9f02710391",children:"PR with fix"})}),"\n",(0,s.jsxs)(i.p,{children:["As with issue number 1, a new template ",(0,s.jsx)(i.code,{children:"SafeGreaterThan"})," was added:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"// N is the number of bits the input  have.\n// The MSF is the sign bit.\ntemplate SafeGreaterThan(n) {\n    signal input in[2];\n    signal output out;\n\n    component lt = SafeLessThan(n);\n\n    lt.in[0] <== in[1];\n    lt.in[1] <== in[0];\n    lt.out ==> out;\n}\n"})}),"\n",(0,s.jsxs)(i.p,{children:["And then used it to constrain the ",(0,s.jsxs)(i.a,{href:"https://github.com/chaosma/maci/blob/2d7a3a0efd33dfc3a5f4d3f95bec3adda7abb963/circuits/circom/trees/incrementalQuinTree.circom#L115-L117",children:[(0,s.jsx)(i.code,{children:"index"})," input signal"]}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"greaterThan[i] = SafeGreaterThan(3);\ngreaterThan[i].in[0] <== i;\ngreaterThan[i].in[1] <== index;\n"})}),"\n",(0,s.jsx)(i.h3,{id:"issue-3",children:"Issue 3"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Description"})}),"\n",(0,s.jsxs)(i.p,{children:["In the template ",(0,s.jsx)(i.code,{children:"QuinGeneratePathIndices"}),", the constrains of the ",(0,s.jsx)(i.code,{children:"signal n[levels + 1]"})," don't perform well for division and modulo counting."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Code Location"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/7c1b3743ea753786011289a356eaa45ba72f9ca1/circuits/circom/trees/incrementalQuinTree.circom#L228-L242",children:(0,s.jsx)(i.code,{children:"incrementalQuinTree.circom"})})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Fix"})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"https://github.com/chaosma/maci/blob/2d7a3a0efd33dfc3a5f4d3f95bec3adda7abb963/circuits/circom/trees/incrementalQuinTree.circom#L285-L290",children:"updated code"})," uses the ",(0,s.jsx)(i.code,{children:"SafeLessThen"})," template, as shown below:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"for (var i = 0; i < levels; i++) {\n    // Check that each output element is less than the base\n    leq[i] = SafeLessThan(3);\n    leq[i].in[0] <== out[i];\n    leq[i].in[1] <== BASE;\n    leq[i].out === 1;\n\n    // Re-compute the total sum\n    sum.nums[i] <== out[i] * (BASE ** i);\n}\n"})}),"\n",(0,s.jsx)(i.h2,{id:"hashcloak-audit-2022",children:"HashCloak audit 2022"}),"\n",(0,s.jsx)(i.p,{children:"In the summer of 2022, MACI v1 was audited by HashCloak. The audit covered both the zk-SNARK circuits and the Solidity smart contracts."}),"\n",(0,s.jsx)(i.p,{children:"This audit revealed a number of high severity issues which have been remediated by the MACI development team. All issues were successfully fixed and reflected in MACI v1.1.1."}),"\n",(0,s.jsxs)(i.p,{children:["Please see the ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(9105).Z+"",children:"HashCloak report"})," for details."]}),"\n",(0,s.jsx)(i.h2,{id:"hashcloak-audit-2021",children:"HashCloak audit 2021"}),"\n",(0,s.jsx)(i.p,{children:"From July 5th, 2021 to August 2nd, 2021, the Ethereum Foundation\u2019s Applied ZKPs team engaged HashCloak for an audit of the MACI protocol. The audit was conducted with 3 auditors over 15 person weeks."}),"\n",(0,s.jsx)(i.p,{children:"The following packages were in scope:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Circuits"}),"\n",(0,s.jsx)(i.li,{children:"Contracts"}),"\n",(0,s.jsx)(i.li,{children:"Core"}),"\n",(0,s.jsx)(i.li,{children:"Crypto"}),"\n",(0,s.jsx)(i.li,{children:"Domainobjs"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"From August 18, 2021 to September 22, 2021, Hashcloak assisted the MACI team in resolving the issues."}),"\n",(0,s.jsxs)(i.p,{children:["Please see the ",(0,s.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(715).Z+"",children:"HashCloak report"})," for details."]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},715:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/files/20210922_Hashcloak_audit_report-dde10f7a56efb98ef4ca985305e76fd4.pdf"},9105:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/files/202220930_Hashcloak_audit_report-14721b7c4e340998f118116825f611e0.pdf"},7049:(e,i,n)=>{n.d(i,{Z:()=>s});const s=n.p+"assets/files/20240223_PSE_Audit_audit_report-a181b98b05198c102be49113c354b5f2.pdf"},720:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>a});var s=n(79);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);