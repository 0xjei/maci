// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";
import { Poll } from "./Poll.sol";
import { Verifier } from "./crypto/Verifier.sol";
import { VkRegistry } from "./VkRegistry.sol";

/// @title MessageProcessorFactory
/// @notice A factory contract which deploys MessageProcessor contracts.
contract MessageProcessorFactory is Params, DomainObjs {
  /// @notice Deploy a new MessageProcessor contract and return the address.
  function deploy(
    Verifier _verifier,
    VkRegistry _vkRegistry,
    Poll _poll
  ) public returns (MessageProcessor messageProcessor) {
    /// @notice deploy MessageProcessor for this Poll
    messageProcessor = new MessageProcessor(_verifier, _vkRegistry, _poll);

    return messageProcessor;
  }
}
