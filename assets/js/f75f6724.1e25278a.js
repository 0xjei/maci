"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7425],{7936:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var n=t(5893),r=t(1151);const l={title:"Testing MACI",description:"How to test MACI",sidebar_label:"Testing",sidebar_position:8},i="Testing",c={id:"testing",title:"Testing MACI",description:"How to test MACI",source:"@site/versioned_docs/version-v1.x/testing.md",sourceDirName:".",slug:"/testing",permalink:"/maci/docs/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/testing.md",tags:[],version:"v1.x",sidebarPosition:8,frontMatter:{title:"Testing MACI",description:"How to test MACI",sidebar_label:"Testing",sidebar_position:8},sidebar:"version-1.x/mySidebar",previous:{title:"Trusted Setup",permalink:"/maci/docs/trusted-setup"},next:{title:"Integrating",permalink:"/maci/docs/integrating"}},d={},a=[{value:"Unit tests",id:"unit-tests",level:3},{value:"Contracts",id:"contracts",level:2},{value:"CLI",id:"cli",level:2},{value:"Download <code>.zkey</code> files or the witness generation binaries",id:"download-zkey-files-or-the-witness-generation-binaries",level:3},{value:"Compile the witness generation binaries",id:"compile-the-witness-generation-binaries",level:3},{value:"Check the Rapidsnark binary",id:"check-the-rapidsnark-binary",level:3},{value:"Run CLI tests",id:"run-cli-tests",level:3},{value:"Run integration tests",id:"run-integration-tests",level:3},{value:"Dependency (if running on intel chip and using rapidsnark)",id:"dependency-if-running-on-intel-chip-and-using-rapidsnark",level:3},{value:"Prod Size",id:"prod-size",level:2},{value:"Message processing",id:"message-processing",level:3},{value:"Vote tallying",id:"vote-tallying",level:3},{value:"Micro size",id:"micro-size",level:2},{value:"Message processing",id:"message-processing-1",level:3},{value:"Vote tallying",id:"vote-tallying-1",level:3},{value:"Small size",id:"small-size",level:2},{value:"Message processing",id:"message-processing-2",level:3},{value:"Vote tallying",id:"vote-tallying-2",level:3},{value:"Medium size",id:"medium-size",level:2},{value:"Message processing",id:"message-processing-3",level:3},{value:"Vote tallying",id:"vote-tallying-3",level:3},{value:"6-8-3-3",id:"6-8-3-3",level:2},{value:"Message processing",id:"message-processing-4",level:3},{value:"Vote tallying",id:"vote-tallying-4",level:3},{value:"contents of <code>*.tar.gz</code>",id:"contents-of-targz",level:2},{value:"Contribution Hash",id:"contribution-hash",level:2},{value:"ProcessMessages_4-6-3-4_test.0.zkey",id:"processmessages_4-6-3-4_test0zkey",level:3},{value:"TallyVotes_4-3-4_test.0.zkey",id:"tallyvotes_4-3-4_test0zkey",level:3},{value:"ProcessMessages_7-9-3-4_test.0.zkey",id:"processmessages_7-9-3-4_test0zkey",level:3},{value:"TallyVotes_7-3-4_test.0.zkey",id:"tallyvotes_7-3-4_test0zkey",level:3},{value:"ProcessMessages_10-2-1-2_test.0.zkey",id:"processmessages_10-2-1-2_test0zkey",level:3},{value:"TallyVotes_10-1-2_test.0.zkey",id:"tallyvotes_10-1-2_test0zkey",level:3},{value:"SubsidyPerBatch_10-1-2_test.0.zkey",id:"subsidyperbatch_10-1-2_test0zkey",level:3},{value:"ProcessMessages_7-7-3-3_test.0.zkey",id:"processmessages_7-7-3-3_test0zkey",level:3},{value:"TallyVotes_7-3-3_test.0.zkey",id:"tallyvotes_7-3-3_test0zkey",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"testing",children:"Testing"}),"\n",(0,n.jsx)(s.h3,{id:"unit-tests",children:"Unit tests"}),"\n",(0,n.jsxs)(s.p,{children:["Unit tests within the project are built using ",(0,n.jsx)(s.a,{href:"https://mochajs.org/",children:"Mocha"})," and ",(0,n.jsx)(s.a,{href:"https://www.chaijs.com/",children:"Chai"}),". Mocha is a test framework that provides the environment to write and run JavaScript tests, while Chai is an assertion library that allows us to write assertions in a more expressive and readable way."]}),"\n",(0,n.jsxs)(s.p,{children:["The following submodules contain unit tests: ",(0,n.jsx)(s.code,{children:"core"}),", ",(0,n.jsx)(s.code,{children:"crypto"}),", ",(0,n.jsx)(s.code,{children:"circuits"}),",\n",(0,n.jsx)(s.code,{children:"contracts"}),", and ",(0,n.jsx)(s.code,{children:"domainobjs"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"You can run all unit tests from the root directory of the repo by running:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Or you can run unit tests within each submodule. for example to run the ",(0,n.jsx)(s.code,{children:"crypto"})," tests:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd crypto\nnpm run test\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can also run individual tests within submodules, for example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd contracts\nnpm run test-accQueue\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This test command will run ",(0,n.jsx)(s.code,{children:"AccQueue.test.ts"})]}),"\n",(0,n.jsx)(s.h2,{id:"contracts",children:"Contracts"}),"\n",(0,n.jsx)(s.p,{children:"First, compile the contracts."}),"\n",(0,n.jsxs)(s.p,{children:["From the main ",(0,n.jsx)(s.code,{children:"maci/"})," directory, run:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd contracts && \\\nnpm run compileSol\n"})}),"\n",(0,n.jsx)(s.p,{children:"To run Contracts only tests, run:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd contracts && \\\nnpm run test\n"})}),"\n",(0,n.jsx)(s.h2,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(s.p,{children:["You can test the CLI locally. First, you need to either generate ",(0,n.jsx)(s.code,{children:".zkey"})," files,\nor download them. Do not use these testing ",(0,n.jsx)(s.code,{children:".zkey"})," files in production."]}),"\n",(0,n.jsxs)(s.h3,{id:"download-zkey-files-or-the-witness-generation-binaries",children:["Download ",(0,n.jsx)(s.code,{children:".zkey"})," files or the witness generation binaries"]}),"\n",(0,n.jsxs)(s.p,{children:["MACI has three zk-SNARK circuits. Each circuit is parameterised. There should one\n",(0,n.jsx)(s.code,{children:".zkey"})," file for each circuit and set of parameters."]}),"\n",(0,n.jsxs)(s.p,{children:["Unless you wish to generate a fresh set of ",(0,n.jsx)(s.code,{children:".zkey"})," files, you should obtain\nthem from someone who has performed a multi-party trusted setup for said\ncircuits."]}),"\n",(0,n.jsxs)(s.p,{children:["Note the locations of the ",(0,n.jsx)(s.code,{children:".zkey"})," files as the CLI requires them as\ncommand-line flags."]}),"\n",(0,n.jsxs)(s.p,{children:["You cand download a ",(0,n.jsx)(s.code,{children:".zkey"})," files and associated ",(0,n.jsx)(s.code,{children:".r1cs"})," file with witness generation binaries from ",(0,n.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/wiki/Download-Precompiled-Circuit-and-Zkeys",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"compile-the-witness-generation-binaries",children:"Compile the witness generation binaries"}),"\n",(0,n.jsxs)(s.p,{children:["From the main ",(0,n.jsx)(s.code,{children:"maci/cli"})," directory, run:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"npx zkey-manager compile -c ./zkeys.config.yml\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You should see the following files in ",(0,n.jsx)(s.code,{children:"maci/cli/zkeys/"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"ProcessMessages_10-2-1-2_test\nProcessMessages_10-2-1-2_test.circom\nProcessMessages_10-2-1-2_test.dat\nProcessMessages_10-2-1-2_test.r1cs\nProcessMessages_10-2-1-2_test.sym\nProcessMessages_10-2-1-2_test_cpp\nProcessMessages_10-2-1-2_test_js\nSubsidyPerBatch_10-1-2_test\nSubsidyPerBatch_10-1-2_test.circom\nSubsidyPerBatch_10-1-2_test.dat\nSubsidyPerBatch_10-1-2_test.r1cs\nSubsidyPerBatch_10-1-2_test.sym\nSubsidyPerBatch_10-1-2_test_cpp\nSubsidyPerBatch_10-1-2_test_js\nTallyVotes_10-1-2_test\nTallyVotes_10-1-2_test.circom\nTallyVotes_10-1-2_test.dat\nTallyVotes_10-1-2_test.r1cs\nTallyVotes_10-1-2_test.sym\nTallyVotes_10-1-2_test_cpp\nTallyVotes_10-1-2_test_js\n"})}),"\n",(0,n.jsx)(s.h3,{id:"check-the-rapidsnark-binary",children:"Check the Rapidsnark binary"}),"\n",(0,n.jsxs)(s.p,{children:["Next, ensure that the ",(0,n.jsx)(s.code,{children:"prover"})," binary of ",(0,n.jsx)(s.code,{children:"rapidsnark"})," is in\n",(0,n.jsx)(s.code,{children:"~/rapidsnark/build/prover"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"run-cli-tests",children:"Run CLI tests"}),"\n",(0,n.jsxs)(s.p,{children:["You can find the tests in ",(0,n.jsx)(s.code,{children:"maci/cli/tests"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["e.g. In ",(0,n.jsx)(s.code,{children:"maci/cli/tests/vanilla"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"./test1.sh\n"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Please note that these require a hardhat node running in the background for local testing. You can start one with ",(0,n.jsx)(s.code,{children:"npm run hardhat"})," within the ",(0,n.jsx)(s.strong,{children:"contracts"})," folder."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"run-integration-tests",children:"Run integration tests"}),"\n",(0,n.jsxs)(s.p,{children:["You can find the tests in ",(0,n.jsx)(s.code,{children:"maci/integrationTests/"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"You can run them with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,n.jsx)(s.p,{children:"##\xa0Pre-Compiled Artifacts for testing"}),"\n",(0,n.jsx)(s.p,{children:"The followingcompiled circuits and zkeys are available to download:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#prod-size",children:"Prod"})," (",(0,n.jsx)(s.code,{children:"7-9-3-4"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#micro-size",children:"Micro"})," (",(0,n.jsx)(s.code,{children:"10-2-1-2"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#small-size",children:"Small"})," (",(0,n.jsx)(s.code,{children:"4-6-3-4"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#medium-size",children:"Medium"})," (",(0,n.jsx)(s.code,{children:"7-7-3-3"}),")"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#6-8-3-3",children:"6-8-3-3"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"dependency-if-running-on-intel-chip-and-using-rapidsnark",children:"Dependency (if running on intel chip and using rapidsnark)"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"glibc 2.11 (Default of Ubuntu 20.04 LTS)"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"prod-size",children:"Prod Size"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/7-9-3-4/zkeys_7-9-3-4_glibc-211.tar.gz",children:"zkeys-7-9-3-4.tar.gz"})," (2.8 GB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/7-9-3-4/ProcessMessages_7-9-3-4_test.0.zkey",children:"ProcessMessages_7-9-3-4_test.0.zkey"})," (3.8 GB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_22.ptau"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/7-9-3-4/TallyVotes_7-3-4_test.0.zkey",children:"TallyVotes_7-3-4_test.0.zkey"})," (8.5 GB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_23.ptau"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"message-processing",children:"Message processing"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Allows 78,125 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message tree depth"}),(0,n.jsx)(s.td,{children:"9"}),(0,n.jsx)(s.td,{children:"Allows 1,953,125 votes or key-change messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 messages to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vote option tree depth"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Allows 625 vote options."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"vote-tallying",children:"Vote tallying"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Allows 78,125 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State leaf batch depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 user's votes to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Allows 625 messages to be processed per batch."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"micro-size",children:"Micro size"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/10-2-1-2/zkeys_10-2-1-2_glibc-211.tar.gz",children:"zkeys_10-2-1-2_glibc-211.tar.gz"})," (403 MB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/10-2-1-2/ProcessMessages_10-2-1-2_test.0.zkey",children:"ProcessMessages_10-2-1-2_test.0.zkey"})," (190 MB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/10-2-1-2/TallyVotes_10-1-2_test.0.zkey",children:"TallyVotes_10-1-2_test.0.zkey"})," (71 MB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/10-2-1-2/SubsidyPerBatch_10-1-2_test.0.zkey",children:"SubsidyPerBatch_10-1-2_test.0.zkey"})," (202 MB)"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"*.zkey"})," files are generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_20.ptau"})]}),"\n",(0,n.jsx)(s.h3,{id:"message-processing-1",children:"Message processing"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"10"}),(0,n.jsx)(s.td,{children:"Allows 9,765,625 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message tree depth"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Allows 25 votes or key-change messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Allows 5 messages to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vote option tree depth"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Allows 25 vote options."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"vote-tallying-1",children:"Vote tallying"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"10"}),(0,n.jsx)(s.td,{children:"Allows 9,765,625 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State leaf batch depth"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Allows 5 user's votes to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Allows 25 messages to be processed per batch."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"small-size",children:"Small size"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/4-6-3-4/zkeys_4-6-3-4_glibc-211.tar.gz",children:"zkeys_4-6-3-4_glibc-211.tar.gz"})," (2.6 GB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/4-6-3-4/ProcessMessages_4-6-3-4_test.0.zkey",children:"ProcessMessages_4-6-3-4_test.0.zkey"})," (2.9 GB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_22.ptau"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/4-6-3-4/TallyVotes_4-3-4_test.0.zkey",children:"TallyVotes_4-3-4_test.0.zkey"})," (8.5 GB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_23.ptau"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"message-processing-2",children:"Message processing"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Allows 625 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message tree depth"}),(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"Allows 15,625 votes or key-change messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 messages to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vote option tree depth"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Allows 625 vote options."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"vote-tallying-2",children:"Vote tallying"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Allows 9,765,625 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State leaf batch depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 user's votes to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Allows 625 messages to be processed per batch."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"medium-size",children:"Medium size"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/7-7-3-3/zkeys_7-7-3-3_glibc-211.tar.gz",children:"zkeys_7-7-3-3_glibc-211.tar.gz"})," (4.9 GB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/7-7-3-3/ProcessMessages_7-7-3-3_test.0.zkey",children:"ProcessMessages_7-7-3-3_test.0.zkey"})," (2.2 GB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_22.ptau"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/7-7-3-3/TallyVotes_7-3-3_test.0.zkey",children:"TallyVotes_7-3-3_test.0.zkey"})," (884 MB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_22.ptau"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"message-processing-3",children:"Message processing"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Allows 78,125 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message tree depth"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Allows 78,125 votes or key-change messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 messages to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vote option tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 vote options."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"vote-tallying-3",children:"Vote tallying"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Allows 78,125 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State leaf batch depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 user's votes to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 messages to be processed per batch."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"6-8-3-3",children:"6-8-3-3"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/6-8-3-3/zkeys_6-8-3-3_glibc-211.tar.gz",children:"zkeys_6-8-3-3_glibc-211.tar.gz"})," (1.1 GB)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/6-8-3-3/ProcessMessages_6-8-3-3_test.0.zkey",children:"ProcessMessages_6-8-3-3_test.0.zkey"})," (3.4 GB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_22.ptau"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://maci-develop-fra.s3.eu-central-1.amazonaws.com/v1.1.1-aa4ba27/6-8-3-3/TallyVotes_6-3-3_test.0.zkey",children:"TallyVotes_6-3-3_test.0.zkey"})," (1.8 MB)","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["generated using ",(0,n.jsx)(s.code,{children:"powersOfTau28_hez_final_22.ptau"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"message-processing-4",children:"Message processing"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"Allows 15,625 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message tree depth"}),(0,n.jsx)(s.td,{children:"8"}),(0,n.jsx)(s.td,{children:"Allows 390,625 votes or key-change messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 messages to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vote option tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 vote options."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"vote-tallying-4",children:"Vote tallying"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Value"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State tree depth"}),(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Allows 15,625 signups."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State leaf batch depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 user's votes to be processed per batch."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Message batch tree depth"}),(0,n.jsx)(s.td,{children:"3"}),(0,n.jsx)(s.td,{children:"Allows 125 messages to be processed per batch."})]})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"contents-of-targz",children:["contents of ",(0,n.jsx)(s.code,{children:"*.tar.gz"})]}),"\n",(0,n.jsx)(s.p,{children:"It contains compiled result of the circuit:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"zkeys/\nzkeys/ProcessMessages_7-9-3-4_test.sym\nzkeys/ProcessMessages_7-9-3-4_test.circom\nzkeys/ProcessMessages_7-9-3-4_test.dat\nzkeys/TallyVotes_7-3-4_test_js/\nzkeys/TallyVotes_7-3-4_test_js/TallyVotes_7-3-4_test.wasm\nzkeys/TallyVotes_7-3-4_test_js/witness_calculator.js\nzkeys/TallyVotes_7-3-4_test_js/TallyVotes_7-3-4_test.wat\nzkeys/TallyVotes_7-3-4_test_js/generate_witness.js\nzkeys/TallyVotes_7-3-4_test.sym\nzkeys/TallyVotes_7-3-4_test.dat\nzkeys/ProcessMessages_7-9-3-4_test.r1cs\nzkeys/ProcessMessages_7-9-3-4_test\nzkeys/ProcessMessages_7-9-3-4_test_cpp/\nzkeys/ProcessMessages_7-9-3-4_test_cpp/fr.asm\nzkeys/ProcessMessages_7-9-3-4_test_cpp/calcwit.cpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/fr.hpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/ProcessMessages_7-9-3-4_test.o\nzkeys/ProcessMessages_7-9-3-4_test_cpp/calcwit.o\nzkeys/ProcessMessages_7-9-3-4_test_cpp/main.o\nzkeys/ProcessMessages_7-9-3-4_test_cpp/main.cpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/ProcessMessages_7-9-3-4_test.cpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/fr.o\nzkeys/ProcessMessages_7-9-3-4_test_cpp/circom.hpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/calcwit.hpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/fr.cpp\nzkeys/ProcessMessages_7-9-3-4_test_cpp/Makefile\nzkeys/ProcessMessages_7-9-3-4_test_cpp/fr_asm.o\nzkeys/ProcessMessages_7-9-3-4_test_js/\nzkeys/ProcessMessages_7-9-3-4_test_js/witness_calculator.js\nzkeys/ProcessMessages_7-9-3-4_test_js/ProcessMessages_7-9-3-4_test.wasm\nzkeys/ProcessMessages_7-9-3-4_test_js/ProcessMessages_7-9-3-4_test.wat\nzkeys/ProcessMessages_7-9-3-4_test_js/generate_witness.js\nzkeys/TallyVotes_7-3-4_test_cpp/\nzkeys/TallyVotes_7-3-4_test_cpp/fr.asm\nzkeys/TallyVotes_7-3-4_test_cpp/calcwit.cpp\nzkeys/TallyVotes_7-3-4_test_cpp/TallyVotes_7-3-4_test.cpp\nzkeys/TallyVotes_7-3-4_test_cpp/fr.hpp\nzkeys/TallyVotes_7-3-4_test_cpp/calcwit.o\nzkeys/TallyVotes_7-3-4_test_cpp/main.o\nzkeys/TallyVotes_7-3-4_test_cpp/main.cpp\nzkeys/TallyVotes_7-3-4_test_cpp/fr.o\nzkeys/TallyVotes_7-3-4_test_cpp/circom.hpp\nzkeys/TallyVotes_7-3-4_test_cpp/calcwit.hpp\nzkeys/TallyVotes_7-3-4_test_cpp/fr.cpp\nzkeys/TallyVotes_7-3-4_test_cpp/TallyVotes_7-3-4_test.o\nzkeys/TallyVotes_7-3-4_test_cpp/Makefile\nzkeys/TallyVotes_7-3-4_test_cpp/fr_asm.o\nzkeys/TallyVotes_7-3-4_test.r1cs\nzkeys/TallyVotes_7-3-4_test.circom\nzkeys/TallyVotes_7-3-4_test\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"contribution-hash",children:"Contribution Hash"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#ProcessMessages_4-6-3-4_test0zkey",children:"ProcessMessages_4-6-3-4_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#TallyVotes_4-3-4_test0zkey",children:"TallyVotes_4-3-4_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#ProcessMessages_7-9-3-4_test0zkey",children:"ProcessMessages_7-9-3-4_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#TallyVotes_7-3-4_test0zkey",children:"TallyVotes_7-3-3_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#ProcessMessages_10-2-1-2_test0zkey",children:"ProcessMessages_10-2-1-2_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#TallyVotes_7-3-3_test0zkey",children:"TallyVotes_7-3-3_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#SubsidyPerBatch_10-1-2_test0zkey",children:"SubsidyPerBatch_10-1-2_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#ProcessMessages_7-7-3-3_test0zkey",children:"ProcessMessages_7-7-3-3_test.0.zkey"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#TallyVotes_7-3-3_test0zkey",children:"TallyVotes_7-3-3_test.0.zkey"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"processmessages_4-6-3-4_test0zkey",children:"ProcessMessages_4-6-3-4_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"2d29ddba 11e5292e b20f681d 3ade88cd\n5c93852b 52f400b0 779e9413 03a49e35\n55b27b66 db5fec74 c8e01b0a c407b08f\n325cfc06 cb1ac909 38b2e5ff 22b34333\n"})}),"\n",(0,n.jsx)(s.h3,{id:"tallyvotes_4-3-4_test0zkey",children:"TallyVotes_4-3-4_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"d2d88532 c2e1e7bd 3c7be3fb f85da2e2\n897d11d3 d1231639 25f557e4 e5dda0fd\n454eb84a 04bf7d6d 525895fd 8168b14b\nf3a8a155 cd338e2c 5f364836 bfd7913d\n"})}),"\n",(0,n.jsx)(s.h3,{id:"processmessages_7-9-3-4_test0zkey",children:"ProcessMessages_7-9-3-4_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"75256709 6e8a034e a067ea67 16192fb2\n57bd982a e202b12f 4a1381ac 362ca197\n07ca0d33 c1ca2438 2c283eca 463c3c4d\nb1094e74 b8aaa9a3 9af75b22 0d9229e6\n"})}),"\n",(0,n.jsx)(s.h3,{id:"tallyvotes_7-3-4_test0zkey",children:"TallyVotes_7-3-4_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"f44cf32e 1709e2c4 c8dbe8dc 5b6de4be\n30b9a60c 0ddefacc af33a1d0 f54f57a2\n6eed2430 87d00e29 5bf068fd 9d89c323\n9b6ced66 c970a87d 745d35e4 5f47d7f9\n"})}),"\n",(0,n.jsx)(s.h3,{id:"processmessages_10-2-1-2_test0zkey",children:"ProcessMessages_10-2-1-2_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"23eb4980 d584c7ef 647478b9 dea49a6d\n2c595cd0 43a0e9f2 e83fbfb7 b2fd7617\n6fbe4b6f ba7f1f82 566c443d a8f0fec6\n1c2c2662 20e0df3d 12a057f3 2a071937\n"})}),"\n",(0,n.jsx)(s.h3,{id:"tallyvotes_10-1-2_test0zkey",children:"TallyVotes_10-1-2_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"ae12edd2 6f7f1d25 530177ab 27483fe0\nce9a8c26 9f015c49 203376da 911e295c\n3f205792 5d661350 da391f34 16986d6a\n61be4031 56220ca7 06ed3b9f e8504f11\n"})}),"\n",(0,n.jsx)(s.h3,{id:"subsidyperbatch_10-1-2_test0zkey",children:"SubsidyPerBatch_10-1-2_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"16dfc388 eda0bfd7 ff529e42 505ed6b7\ncbffbb79 9218b09b cfa2fe29 0806097a\n52f4839f 58ff692b 2f572309 980f218b\nc84bb980 a1346082 fb00a947 3c97d99e\n"})}),"\n",(0,n.jsx)(s.h3,{id:"processmessages_7-7-3-3_test0zkey",children:"ProcessMessages_7-7-3-3_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"e688264b e1326553 b58492d4 7c2028bc\ncda175f9 b786c4eb 44453080 369ab861\n590816fe 257c1fe1 e079415b e4e1b626\na0f752f8 413a81ba f481d335 187e0091\n"})}),"\n",(0,n.jsx)(s.h3,{id:"tallyvotes_7-3-3_test0zkey",children:"TallyVotes_7-3-3_test.0.zkey"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"6869646d 1faf2aec d8c70c85 0021858f\n8c17db02 ede8be90 9a49924c 665c931f\n66673899 095159c8 2a236903 4774f42b\n225e270f b446f8ec 33545826 3e9444b9\n"})})]})}function o(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var n=t(7294);const r={},l=n.createContext(r);function i(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);