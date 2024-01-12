"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7198],{3832:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>n,metadata:()=>d,toc:()=>h});var i=l(5250),r=l(2459);const n={},s="Tally",d={id:"solidity-docs/Tally",title:"Tally",description:"The Tally contract is used during votes tallying",source:"@site/versioned_docs/version-v1.x/solidity-docs/Tally.md",sourceDirName:"solidity-docs",slug:"/solidity-docs/Tally",permalink:"/docs/solidity-docs/Tally",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/Tally.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"SubsidyFactory",permalink:"/docs/solidity-docs/SubsidyFactory"},next:{title:"TallyFactory",permalink:"/docs/solidity-docs/TallyFactory"}},c={},h=[{value:"ProcessingNotComplete",id:"processingnotcomplete",level:3},{value:"InvalidTallyVotesProof",id:"invalidtallyvotesproof",level:3},{value:"AllBallotsTallied",id:"allballotstallied",level:3},{value:"NumSignUpsTooLarge",id:"numsignupstoolarge",level:3},{value:"BatchStartIndexTooLarge",id:"batchstartindextoolarge",level:3},{value:"TallyBatchSizeTooLarge",id:"tallybatchsizetoolarge",level:3},{value:"tallyCommitment",id:"tallycommitment",level:3},{value:"tallyBatchNum",id:"tallybatchnum",level:3},{value:"sbCommitment",id:"sbcommitment",level:3},{value:"verifier",id:"verifier",level:3},{value:"vkRegistry",id:"vkregistry",level:3},{value:"poll",id:"poll",level:3},{value:"mp",id:"mp",level:3},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"genTallyVotesPackedVals",id:"gentallyvotespackedvals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values",level:4},{value:"genTallyVotesPublicInputHash",id:"gentallyvotespublicinputhash",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"updateSbCommitment",id:"updatesbcommitment",level:3},{value:"tallyVotes",id:"tallyvotes",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"verifyTallyProof",id:"verifytallyproof",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"computeMerkleRootFromPath",id:"computemerklerootfrompath",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"verifySpentVoiceCredits",id:"verifyspentvoicecredits",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Return Values",id:"return-values-4",level:4},{value:"verifyPerVOSpentVoiceCredits",id:"verifypervospentvoicecredits",level:3},{value:"Return Values",id:"return-values-5",level:4},{value:"verifyTallyResult",id:"verifytallyresult",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Return Values",id:"return-values-6",level:4}];function a(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"tally",children:"Tally"}),"\n",(0,i.jsx)(t.p,{children:"The Tally contract is used during votes tallying\nand by users to verify the tally results."}),"\n",(0,i.jsx)(t.h3,{id:"processingnotcomplete",children:"ProcessingNotComplete"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"error ProcessingNotComplete()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"invalidtallyvotesproof",children:"InvalidTallyVotesProof"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"error InvalidTallyVotesProof()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"allballotstallied",children:"AllBallotsTallied"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"error AllBallotsTallied()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"numsignupstoolarge",children:"NumSignUpsTooLarge"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"error NumSignUpsTooLarge()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"batchstartindextoolarge",children:"BatchStartIndexTooLarge"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"error BatchStartIndexTooLarge()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"tallybatchsizetoolarge",children:"TallyBatchSizeTooLarge"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"error TallyBatchSizeTooLarge()\n"})}),"\n",(0,i.jsx)(t.h3,{id:"tallycommitment",children:"tallyCommitment"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"uint256 tallyCommitment\n"})}),"\n",(0,i.jsx)(t.p,{children:"The commitment to the tally results. Its initial value is 0, but after\nthe tally of each batch is proven on-chain via a zk-SNARK, it should be\nupdated to:"}),"\n",(0,i.jsx)(t.p,{children:"hash3(\nhashLeftRight(merkle root of current results, salt0)\nhashLeftRight(number of spent voice credits, salt1),\nhashLeftRight(merkle root of the no. of spent voice credits per vote option, salt2)\n)"}),"\n",(0,i.jsx)(t.p,{children:"Where each salt is unique and the merkle roots are of arrays of leaves\nTREE_ARITY ** voteOptionTreeDepth long."}),"\n",(0,i.jsx)(t.h3,{id:"tallybatchnum",children:"tallyBatchNum"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"uint256 tallyBatchNum\n"})}),"\n",(0,i.jsx)(t.h3,{id:"sbcommitment",children:"sbCommitment"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"uint256 sbCommitment\n"})}),"\n",(0,i.jsx)(t.h3,{id:"verifier",children:"verifier"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"contract IVerifier verifier\n"})}),"\n",(0,i.jsx)(t.h3,{id:"vkregistry",children:"vkRegistry"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"contract IVkRegistry vkRegistry\n"})}),"\n",(0,i.jsx)(t.h3,{id:"poll",children:"poll"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"contract IPoll poll\n"})}),"\n",(0,i.jsx)(t.h3,{id:"mp",children:"mp"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"contract IMessageProcessor mp\n"})}),"\n",(0,i.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"constructor(address _verifier, address _vkRegistry, address _poll, address _mp) public payable\n"})}),"\n",(0,i.jsx)(t.p,{children:"Create a new Tally contract"}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_verifier"}),(0,i.jsx)(t.td,{children:"address"}),(0,i.jsx)(t.td,{children:"The Verifier contract"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_vkRegistry"}),(0,i.jsx)(t.td,{children:"address"}),(0,i.jsx)(t.td,{children:"The VkRegistry contract"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_poll"}),(0,i.jsx)(t.td,{children:"address"}),(0,i.jsx)(t.td,{children:"The Poll contract"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_mp"}),(0,i.jsx)(t.td,{children:"address"}),(0,i.jsx)(t.td,{children:"The MessageProcessor contract"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"gentallyvotespackedvals",children:"genTallyVotesPackedVals"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function genTallyVotesPackedVals(uint256 _numSignUps, uint256 _batchStartIndex, uint256 _tallyBatchSize) public pure returns (uint256 result)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Pack the batch start index and number of signups into a 100-bit value."}),"\n",(0,i.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_numSignUps"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_batchStartIndex"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_tallyBatchSize"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"result"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"an uint256 representing the 3 inputs packed together"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"gentallyvotespublicinputhash",children:"genTallyVotesPublicInputHash"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function genTallyVotesPublicInputHash(uint256 _numSignUps, uint256 _batchStartIndex, uint256 _tallyBatchSize, uint256 _newTallyCommitment) public view returns (uint256 inputHash)\n"})}),"\n",(0,i.jsx)(t.p,{children:"generate hash of public inputs for tally circuit"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_numSignUps"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_batchStartIndex"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_tallyBatchSize"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_newTallyCommitment"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inputHash"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"hash of public inputs"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"updatesbcommitment",children:"updateSbCommitment"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function updateSbCommitment() public\n"})}),"\n",(0,i.jsx)(t.p,{children:"Update the state and ballot root commitment"}),"\n",(0,i.jsx)(t.h3,{id:"tallyvotes",children:"tallyVotes"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function tallyVotes(uint256 _newTallyCommitment, uint256[8] _proof) public\n"})}),"\n",(0,i.jsx)(t.p,{children:"Verify the result of a tally batch"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_newTallyCommitment"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the new tally commitment to be verified"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_proof"}),(0,i.jsx)(t.td,{children:"uint256[8]"}),(0,i.jsx)(t.td,{children:"the proof generated after tallying this batch"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"verifytallyproof",children:"verifyTallyProof"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function verifyTallyProof(uint256[8] _proof, uint256 _numSignUps, uint256 _batchStartIndex, uint256 _tallyBatchSize, uint256 _newTallyCommitment) public view returns (bool isValid)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Verify the tally proof using the verifying key"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_proof"}),(0,i.jsx)(t.td,{children:"uint256[8]"}),(0,i.jsx)(t.td,{children:"the proof generated after processing all messages"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_numSignUps"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"number of signups for a given poll"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_batchStartIndex"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the number of batches multiplied by the size of the batch"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_tallyBatchSize"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"batch size for the tally"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_newTallyCommitment"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the tally commitment to be verified at a given batch index"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isValid"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"whether the proof is valid"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"computemerklerootfrompath",children:"computeMerkleRootFromPath"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function computeMerkleRootFromPath(uint8 _depth, uint256 _index, uint256 _leaf, uint256[][] _pathElements) internal pure returns (uint256 current)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Compute the merkle root from the path elements\nand a leaf"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_depth"}),(0,i.jsx)(t.td,{children:"uint8"}),(0,i.jsx)(t.td,{children:"the depth of the merkle tree"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_index"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the index of the leaf"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_leaf"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the leaf"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_pathElements"}),(0,i.jsx)(t.td,{children:"uint256[][]"}),(0,i.jsx)(t.td,{children:"the path elements to reconstruct the merkle root"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"current"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"The merkle root"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"verifyspentvoicecredits",children:"verifySpentVoiceCredits"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function verifySpentVoiceCredits(uint256 _totalSpent, uint256 _totalSpentSalt, uint256 _resultCommitment, uint256 _perVOSpentVoiceCreditsHash) public view returns (bool isValid)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Verify the number of spent voice credits from the tally.json"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_totalSpent"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"spent field retrieved in the totalSpentVoiceCredits object"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_totalSpentSalt"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the corresponding salt in the totalSpentVoiceCredit object"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_resultCommitment"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"hashLeftRight(merkle root of the results.tally, results.salt) in tally.json file"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_perVOSpentVoiceCreditsHash"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"hashLeftRight(merkle root of the no spent voice credits per vote option, salt)"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isValid"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the provided values are valid"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"verifypervospentvoicecredits",children:"verifyPerVOSpentVoiceCredits"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function verifyPerVOSpentVoiceCredits(uint256 _voteOptionIndex, uint256 _spent, uint256[][] _spentProof, uint256 _spentSalt, uint8 _voteOptionTreeDepth, uint256 _spentVoiceCreditsHash, uint256 _resultCommitment) public view returns (bool isValid)\n"})}),"\n",(0,i.jsx)(t.h4,{id:"return-values-5",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isValid"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the provided proof is valid"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"verifytallyresult",children:"verifyTallyResult"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"function verifyTallyResult(uint256 _voteOptionIndex, uint256 _tallyResult, uint256[][] _tallyResultProof, uint256 _tallyResultSalt, uint8 _voteOptionTreeDepth, uint256 _spentVoiceCreditsHash, uint256 _perVOSpentVoiceCreditsHash) public view returns (bool isValid)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Verify the result generated from the tally.json"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_voteOptionIndex"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the index of the vote option to verify the correctness of the tally"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_tallyResult"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"Flattened array of the tally"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_tallyResultProof"}),(0,i.jsx)(t.td,{children:"uint256[][]"}),(0,i.jsx)(t.td,{children:"Corresponding proof of the tally result"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_tallyResultSalt"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"the respective salt in the results object in the tally.json"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_voteOptionTreeDepth"}),(0,i.jsx)(t.td,{children:"uint8"}),(0,i.jsx)(t.td,{children:"depth of the vote option tree"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_spentVoiceCreditsHash"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"hashLeftRight(number of spent voice credits, spent salt)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"_perVOSpentVoiceCreditsHash"}),(0,i.jsx)(t.td,{children:"uint256"}),(0,i.jsx)(t.td,{children:"hashLeftRight(merkle root of the no spent voice credits per vote option, perVOSpentVoiceCredits salt)"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"return-values-6",children:"Return Values"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"isValid"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether the provided proof is valid"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},2459:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>s});var i=l(79);const r={},n=i.createContext(r);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);