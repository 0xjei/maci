// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Params } from "../utilities/Params.sol";
import { DomainObjs } from "../utilities/DomainObjs.sol";
import { IMACI } from "./IMACI.sol";
import { AccQueue } from "../trees/AccQueue.sol";
import { TopupCredit } from "../TopupCredit.sol";

/// @title IPoll
interface IPoll {
  function numSignUpsAndMessages() external view returns (uint256 numSignups, uint256 numMsgs);
  function topup(uint256 stateIndex, uint256 amount) external;
  function publishMessage(DomainObjs.Message memory _message, DomainObjs.PubKey memory _encPubKey) external;
  function mergeMaciStateAqSubRoots(uint256 _numSrQueueOps, uint256 _pollId) external;
  function mergeMaciStateAq(uint256 _pollId) external;
  function mergeMessageAqSubRoots(uint256 _numSrQueueOps) external;
  function mergeMessageAq() external;
  function getDeployTimeAndDuration() external view returns (uint256 _deployTime, uint256 _duration);
  function stateAqMerged() external view returns (bool);
  function treeDepths()
    external
    view
    returns (uint8 intStateTreeDepth, uint8 messageTreeSubDepth, uint8 messageTreeDepth, uint8 voteOptionTreeDepth);
  function batchSizes() external view returns (uint24 messageBatchSize, uint24 tallyBatchSize, uint24 subsidyBatchSize);
  function maxValues() external view returns (uint256 maxMessages, uint256 maxVoteOptions);
  function extContracts() external view returns (IMACI maci, AccQueue messageAq, TopupCredit topupCredit);
  function coordinatorPubKeyHash() external view returns (uint256 _coordinatorPubKeyHash);
  function currentSbCommitment() external view returns (uint256);
}
