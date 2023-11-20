"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5456],{2576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(5893),i=n(1151);const s={},o="The state root transition proof circuit",a={id:"state_root_transition_circuit",title:"The state root transition proof circuit",description:"This circuit proves the correctness of each state root transition.",source:"@site/versioned_docs/version-v0.x/state_root_transition_circuit.md",sourceDirName:".",slug:"/state_root_transition_circuit",permalink:"/docs/v0.x/state_root_transition_circuit",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v0.x/state_root_transition_circuit.md",tags:[],version:"v0.x",frontMatter:{},sidebar:"version-0.x/mySidebar",previous:{title:"The quadratic vote tallying circuit",permalink:"/docs/v0.x/quadratic_vote_tallying_circuit"}},d={},c=[{value:"Public Inputs",id:"public-inputs",level:2},{value:"Private Inputs",id:"private-inputs",level:2},{value:"Check 1: That the message has been encrypted with the correct key",id:"check-1-that-the-message-has-been-encrypted-with-the-correct-key",level:2},{value:"Check 2: that the message is part of the message tree",id:"check-2-that-the-message-is-part-of-the-message-tree",level:2},{value:"Check 3: that the new state root transition is the correct result of executing the given command \u2014 <em>or</em> \u2014 that the command is invalid and the no-op flag is set to true.",id:"check-3-that-the-new-state-root-transition-is-the-correct-result-of-executing-the-given-command--or--that-the-command-is-invalid-and-the-no-op-flag-is-set-to-true",level:2},{value:"Circuit logic",id:"circuit-logic",level:2},{value:"Circuit failure modes",id:"circuit-failure-modes",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"the-state-root-transition-proof-circuit",children:"The state root transition proof circuit"}),"\n",(0,r.jsx)(t.p,{children:"This circuit proves the correctness of each state root transition."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#public-inputs",children:"Public Inputs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#private-inputs",children:"Private Inputs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#check-1-that-the-message-has-been-encrypted-with-the-correct-key",children:"Check 1: That the message has been encrypted with the correct key"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#check-2-that-the-message-is-part-of-the-message-tree",children:"Check 2: that the message is part of the message tree"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.a,{href:"#check-3-that-the-new-state-root-transition-is-the-correct-result-of-executing-the-given-command--or--that-the-command-is-invalid-and-the-no-op-flag-is-set-to-true",children:["Check 3: that the new state root transition is the correct result of executing the given command \u2014 ",(0,r.jsx)(t.em,{children:"or"})," \u2014 that the command is invalid and the no-op flag is set to true."]})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#circuit-logic",children:"Circuit logic"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#circuit-failure-modes",children:"Circuit failure modes"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"public-inputs",children:"Public Inputs"}),"\n",(0,r.jsx)(t.p,{children:"All public inputs are set by the contract."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Pseudocode name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"coordinatorPubKey"})}),(0,r.jsx)(t.td,{children:"The coordinator's public key"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"currentStateRoot"})}),(0,r.jsx)(t.td,{children:"The current state root"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"msgTreeRoot"})}),(0,r.jsx)(t.td,{children:"The Merkle root of the message tree"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"msgTreePathIndex"})}),(0,r.jsx)(t.td,{children:"The Merkle path index of the message in the message tree"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"maxStateLeafIndex"})}),(0,r.jsx)(t.td,{children:"The maximum leaf index of the state tree"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"userCurrentLeafPathIndex"})}),(0,r.jsx)(t.td,{children:"The Merkle path index from the user's latest valid state leaf to the current state root"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"newStateRoot"})}),(0,r.jsx)(t.td,{children:"The new state root"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"private-inputs",children:"Private Inputs"}),"\n",(0,r.jsx)(t.p,{children:"All private inputs are set by the coordinator."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Pseudocode name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"userCurrentLeafPathElements"})}),(0,r.jsx)(t.td,{children:"The Merkle path elements from the user's latest valid state leaf to the current state root"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"currentVoteOptionPathElements[n]"})}),(0,r.jsxs)(t.td,{children:["The Merkle path needed to prove the existence of the current vote option leaf. Size is ",(0,r.jsx)(t.code,{children:"253"})," * ",(0,r.jsx)(t.code,{children:"vote_option_tree_depth"})," bits"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"newVoteOptionPathElements[n]"})}),(0,r.jsxs)(t.td,{children:["The Merkle path needed to update the vote option tree root in the state leaf. Size is ",(0,r.jsx)(t.code,{children:"253"})," * ",(0,r.jsx)(t.code,{children:"vote_option_tree_depth"})," bits"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"currentVoteWeight"})}),(0,r.jsx)(t.td,{children:"In the quadratic voting use case, this is the square root of the number of voice credits a user wishes to spend on this vote. Size is 32 bits."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"message"})}),(0,r.jsx)(t.td,{children:"The message"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"msgTreePathElements"})}),(0,r.jsx)(t.td,{children:"The Merkle path elements to the message tree root from the message leaf"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"randomLeaf"})}),(0,r.jsx)(t.td,{children:"Random data"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"newStateTreePathIndex"})}),(0,r.jsx)(t.td,{children:"The Merkle path index to the new state root from the new state leaf"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"newStateTreePathElements"})}),(0,r.jsx)(t.td,{children:"The Merkle path elements to the new state root from the new state leaf"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"newStateTreePathElementsToZero"})}),(0,r.jsxs)(t.td,{children:["The Merkle path elements to the new state root from leaf 0, ",(0,r.jsx)(t.strong,{children:"after"})," the new state leaf has been updated"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"userCurrentLeaf"})}),(0,r.jsx)(t.td,{children:"The user's latest valid state leaf"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"command"})}),(0,r.jsx)(t.td,{children:"The command to process. Includes all the details in the leaf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"noOp"})}),(0,r.jsx)(t.td,{children:"The no-op flag"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"userPubKey"})}),(0,r.jsx)(t.td,{children:"The public key associated with the private key used to sign the command"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"encPubKey"})}),(0,r.jsx)(t.td,{children:"The ephermeral public key used to generate the ECDH shared key which was used to encrypt the command."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"coordinatorPrivKey"})}),(0,r.jsx)(t.td,{children:"The coordinator's private key."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"For the sake of simplicity, in this specification, we assume that there is no batching of commands and we handle each command one at a time."}),"\n",(0,r.jsx)(t.h2,{id:"check-1-that-the-message-has-been-encrypted-with-the-correct-key",children:"Check 1: That the message has been encrypted with the correct key"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Derive the coordinator's public key from\n// their private key \nvar derivedCoordinatorPubKey = eddsaDerivePubKey(coordinatorPrivKey)\n\n// Ensure via a constraint that it matches the\n// coordinator's public key given as an input\nassert(derivedCoordinatorPubKey == coordinatorPubKey)\n\n// Generate the ECDH key\nvar ecdhSharedKey = genEcdhKey(coordinatorPrivKey, encPubKey)\n\n// Use the ECDH shared key to decrypt the message\nvar decryptedCommand = decrypt(ecdhSharedKey, message)\n\n// Ensure via a constraint that the message has been correctly decrypted\nassert(decryptedCommand == command)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"check-2-that-the-message-is-part-of-the-message-tree",children:"Check 2: that the message is part of the message tree"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var generatedMsgTreeRoot = generateMerkleRoot(\n    msgTreePathElements,\n    msgTreePathIndex,\n    message\n)\n\nassert(generatedMsgTreeRoot, msgTreeRoot)\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"check-3-that-the-new-state-root-transition-is-the-correct-result-of-executing-the-given-command--or--that-the-command-is-invalid-and-the-no-op-flag-is-set-to-true",children:["Check 3: that the new state root transition is the correct result of executing the given command \u2014 ",(0,r.jsx)(t.em,{children:"or"})," \u2014 that the command is invalid and the no-op flag is set to true."]}),"\n",(0,r.jsx)(t.h2,{id:"circuit-logic",children:"Circuit logic"}),"\n",(0,r.jsxs)(t.p,{children:["The message should already have been decrypted to ",(0,r.jsx)(t.code,{children:"decryptedCommand"})," (see above)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"/***********************************\nThis function generates a state leaf\n***********************************/\nfunction generateStateLeaf(\n    command,\n    computedNewVoteOptionRoot,\n    newVoiceCreditBalance\n) => {\n\n    return [\n        command.newPublicKeyX,\n        command.newPublicKeyY,\n        computedNewVoteOptionRoot,\n        newVoiceCreditBalance,\n        command.nonce + 1\n    ]\n}\n\n/*************************\n// The main circuit logic:\n**************************/\n\n// Record in a variable that the new state leaf index is\n// valid (i.e. it is leq to the maximum allowed value)\nvar validStateLeafIndex = newStateTreePathIndex <= maxStateLeafIndex && newStateTreePathIndex > 0\n\n// Record in a variable if the signature is valid\nvar validSignature = verifyEddsa(signature, decryptedCommand, userPubKey)\n\n// Record in a variable if the nonce is correct\nvar correctNonce = decryptedCommand.nonce == userCurrentLeaf.nonce + 1\n\n// Prove that the user's current leaf is part of the\n// Merkle tree. Note that this check is independent of\n// the noOp flag. As such, the coordinator cannot\n// create an invalid proof by tampering with the\n// Merkle proof and setting noOp to true; the Merkle proof\n// *must* be valid.\nvar x = generateMerkleRoot(\n    userCurrentLeafPathElements,\n    userCurrentLeafPathIndex,\n    userCurrentLeaf\n)\n\nassert(x == currentStateRoot)\n\n// Prove that the the current vote option weight (leaf) \n// input is correct by checking that it exists in the\n// tree at the given index\nvar y = generateMerkleRoot(\n    decryptedCommand.currentVoteOptionPathElements,\n    decryptedCommand.voteOptionIndex,\n    decryptedCommand.currentVoteWeight\n)\n\nassert(y == userCurrentLeaf.voteOptionTreeRoot)\n\n// Record in a variable if the user has enough\n// voice credits\n\nvar newVoiceCreditBalance = \n    userCurrentLeaf.voiceCreditBalance + \n    (decryptedCommand.currentVoteWeight ^ 2) -\n    (decryptedCommand.newVoteWeight ^ 2)\n    \nvar enoughVoiceCredits = newVoiceCreditBalance >= 0\n\n// Record in a variable if the new leaf's vote option\n// tree root is the correct result of updating the\n// vote option leaf.\nvar computedNewVoteOptionRoot = \n    updateMerkleTree(\n        command.voteOptionIndex,\n        command.voteOptionPath,\n        command.voteWeight,\n        decryptedCommand.newVoteWeight\n    )\n\nassert(newStateLeaf.voteOptionRoot == computedNewVoteOptionRoot)\n    newStateLeaf.voteOptionRoot == computedNewVoteOptionRoot\n  \n// Record in a variable if the vote option index is\n// within a permissible range (0 to 2 ** vote option tree \n// depth, inclusive) where VOTE_OPTION_TREE_DEPTH is\n// not an input, but rather hardcoded during the trusted \n// setup.\nvar validVoteOptionTreeIndex = command.voteOptionIndex < VOTE_OPTION_TREE_DEPTH\n\nvar newStateLeaf = generateStateLeaf(\n    command,\n    computedNewVoteOptionRoot,\n    newVoiceCreditBalance\n)   \n\nif (enoughVoiceCredits &&\n    correctNonce &&\n    validSignature &&\n    validStateLeafIndex &&\n    validVoteOptionTreeIndex\n):\n    // Use a constraint to ensure that the no-op flag\n    // is set to false\n    assert(noOp == false)\n    \n\n    // Generate the new state root.\n    var s = merkleTreeUpdate(\n        newStateTreePathIndex\n        newStateLeaf,\n        currentStateRoot,\n        newStateTreePathElements\n    )\n\n    // Update the leaf at index `0` to generate a new state \n    // root, and ensure via a constraint that it is equal \n    // to the new state root passed to the snark as an\n    // input.\n\n    var updatedStateRoot = merkleTreeUpdate(\n        0,\n        randomLeaf,\n        s,\n        newStateTreePathElementsToZero\n    )\n\n    assert(updatedStateRoot == newStateRoot)\n\nelse:\n    // Use a constraint to ensure that the no-op flag\n    // is set to true\n    assert(noOp == true)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"circuit-failure-modes",children:"Circuit failure modes"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Condition"}),(0,r.jsx)(t.th,{children:"noOp flag"}),(0,r.jsx)(t.th,{children:"Outcome"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Insufficient voice credits"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"Valid proof, but only leaf 0 is updated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid nonce"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"Valid proof, but only leaf 0 is updated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid signature"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"Valid proof, but only leaf 0 is updated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid new vote option root"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"Valid proof, but only leaf 0 is updated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid state leaf index"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"Valid proof, but only leaf 0 is updated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid vote option tree index"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"Valid proof, but only leaf 0 is updated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid Merkle path to the current state root"}),(0,r.jsx)(t.td,{children:"N/A"}),(0,r.jsx)(t.td,{children:"No such proof can be generated"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Invalid Merkle path to the current vote option root"}),(0,r.jsx)(t.td,{children:"N/A"}),(0,r.jsx)(t.td,{children:"No such proof can be generated"})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);