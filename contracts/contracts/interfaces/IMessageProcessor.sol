// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IMessageProcessor {
  function processingComplete() external view returns (bool);
  function sbCommitment() external view returns (uint256);
}
