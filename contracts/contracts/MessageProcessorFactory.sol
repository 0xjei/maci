// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";

/// @title MessageProcessorFactory
/// @notice A factory contract which deploys MessageProcessor contracts.
contract MessageProcessorFactory is Params, DomainObjs {
  /// @notice Deploy a new MessageProcessor contract and return the address.
  /// @param _verifier Verifier contract
  /// @param _vkRegistry VkRegistry contract
  /// @param _poll Poll contract
  /// @param _owner Owner of the MessageProcessor contract
  /// @return messageProcessorAddr The deployed MessageProcessor contract
  function deploy(
    address _verifier,
    address _vkRegistry,
    address _poll,
    address _owner
  ) public returns (address messageProcessorAddr) {
    /// @notice deploy MessageProcessor for this Poll
    MessageProcessor messageProcessor = new MessageProcessor(_verifier, _vkRegistry, _poll);
    messageProcessor.transferOwnership(_owner);
    messageProcessorAddr = address(messageProcessor);
  }
}
