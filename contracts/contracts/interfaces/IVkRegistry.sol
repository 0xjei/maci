// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { SnarkCommon } from "../crypto/SnarkCommon.sol";

/// @title IVkRegistry
interface IVkRegistry {
  function getTallyVk(
    uint256 _stateTreeDepth,
    uint256 _intStateTreeDepth,
    uint256 _voteOptionTreeDepth
  ) external view returns (SnarkCommon.VerifyingKey memory vk);
  function getProcessVk(
    uint256 _stateTreeDepth,
    uint256 _messageTreeDepth,
    uint256 _voteOptionTreeDepth,
    uint256 _messageBatchSize
  ) external view returns (SnarkCommon.VerifyingKey memory vk);
  function getSubsidyVk(
    uint256 _stateTreeDepth,
    uint256 _intStateTreeDepth,
    uint256 _voteOptionTreeDepth
  ) external view returns (SnarkCommon.VerifyingKey memory vk);
}
