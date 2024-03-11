"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5123],{9808:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=r(5250),t=r(720);const i={},d="MessageProcessor",l={id:"solidity-docs/MessageProcessor",title:"MessageProcessor",description:"_MessageProcessor is used to process messages published by signup users.",source:"@site/versioned_docs/version-v1.x/solidity-docs/MessageProcessor.md",sourceDirName:"solidity-docs",slug:"/solidity-docs/MessageProcessor",permalink:"/docs/solidity-docs/MessageProcessor",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/MessageProcessor.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"MACI",permalink:"/docs/solidity-docs/MACI"},next:{title:"MessageProcessorFactory",permalink:"/docs/solidity-docs/MessageProcessorFactory"}},c={},a=[{value:"NoMoreMessages",id:"nomoremessages",level:3},{value:"StateAqNotMerged",id:"stateaqnotmerged",level:3},{value:"MessageAqNotMerged",id:"messageaqnotmerged",level:3},{value:"InvalidProcessMessageProof",id:"invalidprocessmessageproof",level:3},{value:"VkNotSet",id:"vknotset",level:3},{value:"MaxVoteOptionsTooLarge",id:"maxvoteoptionstoolarge",level:3},{value:"NumSignUpsTooLarge",id:"numsignupstoolarge",level:3},{value:"CurrentMessageBatchIndexTooLarge",id:"currentmessagebatchindextoolarge",level:3},{value:"BatchEndIndexTooLarge",id:"batchendindextoolarge",level:3},{value:"TREE_ARITY",id:"tree_arity",level:3},{value:"processingComplete",id:"processingcomplete",level:3},{value:"Return Values",id:"return-values",level:4},{value:"numBatchesProcessed",id:"numbatchesprocessed",level:3},{value:"currentMessageBatchIndex",id:"currentmessagebatchindex",level:3},{value:"sbCommitment",id:"sbcommitment",level:3},{value:"Return Values",id:"return-values-1",level:4},{value:"poll",id:"poll",level:3},{value:"verifier",id:"verifier",level:3},{value:"vkRegistry",id:"vkregistry",level:3},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"processMessages",id:"processmessages",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"verifyProcessProof",id:"verifyprocessproof",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"genProcessMessagesPublicInputHash",id:"genprocessmessagespublicinputhash",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"genProcessMessagesPackedVals",id:"genprocessmessagespackedvals",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-4",level:4},{value:"updateMessageProcessingData",id:"updatemessageprocessingdata",level:3},{value:"Parameters",id:"parameters-5",level:4}];function h(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"messageprocessor",children:"MessageProcessor"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"MessageProcessor is used to process messages published by signup users.\nIt will process message by batch due to large size of messages.\nAfter it finishes processing, the sbCommitment will be used for Tally and Subsidy contracts."})}),"\n",(0,n.jsx)(s.h3,{id:"nomoremessages",children:"NoMoreMessages"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error NoMoreMessages()\n"})}),"\n",(0,n.jsx)(s.p,{children:"custom errors"}),"\n",(0,n.jsx)(s.h3,{id:"stateaqnotmerged",children:"StateAqNotMerged"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error StateAqNotMerged()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"messageaqnotmerged",children:"MessageAqNotMerged"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error MessageAqNotMerged()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"invalidprocessmessageproof",children:"InvalidProcessMessageProof"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error InvalidProcessMessageProof()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"vknotset",children:"VkNotSet"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error VkNotSet()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"maxvoteoptionstoolarge",children:"MaxVoteOptionsTooLarge"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error MaxVoteOptionsTooLarge()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"numsignupstoolarge",children:"NumSignUpsTooLarge"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error NumSignUpsTooLarge()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"currentmessagebatchindextoolarge",children:"CurrentMessageBatchIndexTooLarge"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error CurrentMessageBatchIndexTooLarge()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"batchendindextoolarge",children:"BatchEndIndexTooLarge"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"error BatchEndIndexTooLarge()\n"})}),"\n",(0,n.jsx)(s.h3,{id:"tree_arity",children:"TREE_ARITY"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"uint256 TREE_ARITY\n"})}),"\n",(0,n.jsx)(s.h3,{id:"processingcomplete",children:"processingComplete"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"bool processingComplete\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the result of whether there are unprocessed messages left"}),"\n",(0,n.jsx)(s.h4,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsx)(s.table,{children:(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})})}),"\n",(0,n.jsx)(s.h3,{id:"numbatchesprocessed",children:"numBatchesProcessed"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"uint256 numBatchesProcessed\n"})}),"\n",(0,n.jsx)(s.p,{children:"The number of batches processed"}),"\n",(0,n.jsx)(s.h3,{id:"currentmessagebatchindex",children:"currentMessageBatchIndex"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"uint256 currentMessageBatchIndex\n"})}),"\n",(0,n.jsx)(s.p,{children:"The current message batch index. When the coordinator runs\nprocessMessages(), this action relates to messages\ncurrentMessageBatchIndex to currentMessageBatchIndex + messageBatchSize."}),"\n",(0,n.jsx)(s.h3,{id:"sbcommitment",children:"sbCommitment"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"uint256 sbCommitment\n"})}),"\n",(0,n.jsx)(s.p,{children:"Get the commitment to the state and ballot roots"}),"\n",(0,n.jsx)(s.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,n.jsx)(s.table,{children:(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})})}),"\n",(0,n.jsx)(s.h3,{id:"poll",children:"poll"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"contract IPoll poll\n"})}),"\n",(0,n.jsx)(s.h3,{id:"verifier",children:"verifier"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"contract IVerifier verifier\n"})}),"\n",(0,n.jsx)(s.h3,{id:"vkregistry",children:"vkRegistry"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"contract IVkRegistry vkRegistry\n"})}),"\n",(0,n.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"constructor(address _verifier, address _vkRegistry, address _poll) public payable\n"})}),"\n",(0,n.jsx)(s.p,{children:"Create a new instance"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_verifier"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The Verifier contract address"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_vkRegistry"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The VkRegistry contract address"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_poll"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The Poll contract address"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"processmessages",children:"processMessages"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function processMessages(uint256 _newSbCommitment, uint256[8] _proof) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"Update the Poll's currentSbCommitment if the proof is valid."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_newSbCommitment"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The new state root and ballot root commitment                         after all messages are processed"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_proof"}),(0,n.jsx)(s.td,{children:"uint256[8]"}),(0,n.jsx)(s.td,{children:"The zk-SNARK proof"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"verifyprocessproof",children:"verifyProcessProof"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function verifyProcessProof(uint256 _currentMessageBatchIndex, uint256 _messageRoot, uint256 _currentSbCommitment, uint256 _newSbCommitment, uint8 _messageTreeSubDepth, uint8 _messageTreeDepth, uint8 _voteOptionTreeDepth, uint256[8] _proof) internal view returns (bool isValid)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Verify the proof for processMessage"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"used to update the sbCommitment"})}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_currentMessageBatchIndex"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The batch index of current message batch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageRoot"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The message tree root"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_currentSbCommitment"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The current sbCommitment (state and ballot)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_newSbCommitment"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The new sbCommitment after we update this message batch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageTreeSubDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The message tree subdepth"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The message tree depth"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The vote option tree depth"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_proof"}),(0,n.jsx)(s.td,{children:"uint256[8]"}),(0,n.jsx)(s.td,{children:"The zk-SNARK proof"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"isValid"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Whether the proof is valid"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"genprocessmessagespublicinputhash",children:"genProcessMessagesPublicInputHash"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function genProcessMessagesPublicInputHash(uint256 _currentMessageBatchIndex, uint256 _messageRoot, uint256 _numSignUps, uint256 _numMessages, uint256 _currentSbCommitment, uint256 _newSbCommitment, uint8 _messageTreeSubDepth, uint8 _voteOptionTreeDepth) public view returns (uint256 inputHash)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Returns the SHA256 hash of the packed values (see\ngenProcessMessagesPackedVals), the hash of the coordinator's public key,\nthe message root, and the commitment to the current state root and\nballot root. By passing the SHA256 hash of these values to the circuit\nas a single public input and the preimage as private inputs, we reduce\nits verification gas cost though the number of constraints will be\nhigher and proving time will be longer."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_currentMessageBatchIndex"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The batch index of current message batch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageRoot"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_numSignUps"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The number of users that signup"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_numMessages"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The number of messages"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_currentSbCommitment"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The current sbCommitment (state and ballot root)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_newSbCommitment"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The new sbCommitment after we update this message batch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageTreeSubDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"The message tree subdepth"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"inputHash"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"Returns the SHA256 hash of the packed values"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"genprocessmessagespackedvals",children:"genProcessMessagesPackedVals"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function genProcessMessagesPackedVals(uint256 _currentMessageBatchIndex, uint256 _numSignUps, uint256 _numMessages, uint8 _messageTreeSubDepth, uint8 _voteOptionTreeDepth) public pure returns (uint256 result)\n"})}),"\n",(0,n.jsx)(s.p,{children:"One of the inputs to the ProcessMessages circuit is a 250-bit\nrepresentation of four 50-bit values. This function generates this\n250-bit value, which consists of the maximum number of vote options, the\nnumber of signups, the current message batch index, and the end index of\nthe current batch."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_currentMessageBatchIndex"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"batch index of current message batch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_numSignUps"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"number of users that signup"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_numMessages"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"number of messages"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageTreeSubDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"message tree subdepth"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_voteOptionTreeDepth"}),(0,n.jsx)(s.td,{children:"uint8"}),(0,n.jsx)(s.td,{children:"vote option tree depth"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"result"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The packed value"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"updatemessageprocessingdata",children:"updateMessageProcessingData"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function updateMessageProcessingData(uint256 _newSbCommitment, uint256 _currentMessageBatchIndex, bool _processingComplete) internal\n"})}),"\n",(0,n.jsx)(s.p,{children:"update message processing state variables"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_newSbCommitment"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"sbCommitment to be updated"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_currentMessageBatchIndex"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"currentMessageBatchIndex to be updated"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_processingComplete"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"update flag that indicate processing is finished or not"})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},720:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>d});var n=r(79);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);