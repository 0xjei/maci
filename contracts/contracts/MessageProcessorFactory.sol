// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { IFactory } from "./interfaces/IFactory.sol";
import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";
import { Poll } from "./Poll.sol";
import { Verifier } from "./crypto/Verifier.sol";
import { VkRegistry } from "./VkRegistry.sol";

struct MPParams {
  Verifier verifier;
  VkRegistry vkRegistry;
  Poll poll;
}

/// @title MessageProcessorFactory
/// @notice A factory contract which deploys MessageProcessor contracts.
contract MessageProcessorFactory is IFactory, Params, DomainObjs {
  /// @notice Deploy a new MessageProcessor contract and return the address.
  /// @param params The params needed for deploying a new MessageProcessor contract
  function deploy(MPParams params) public override returns (MessageProcessor messageProcessor) {
    /// @notice deploy MessageProcessor for this Poll
    MessageProcessor mp = new MessageProcessor(params.verifier, params.vkRegistry, params.poll);

    return mp;
  }
}
