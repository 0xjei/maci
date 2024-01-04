// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { IFactory } from "./interfaces/IFactory.sol";
import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";
import { Tally } from "./Tally.sol";
import { Poll } from "./Poll.sol";
import { Verifier } from "./crypto/Verifier.sol";
import { VkRegistry } from "./VkRegistry.sol";

struct TallyParams {
  Verifier verifier;
  VkRegistry vkRegistry;
  Poll poll;
  MessageProcessor messageProcessor;
}

/// @title TallyFactory
/// @notice A factory contract which deploys Tally contracts.
contract TallyFactory is IFactory, Params, DomainObjs {
  /// @notice Deploy a new Tally contract and return the address.
  /// @param params The params needed for deploying a new Tally contract
  function deploy(TallyParams params) public override returns (Tally tally) {
    /// @notice deploy Tally for this Poll
    Tally tally = new Tally(params.verifier, params.vkRegistry, params.poll, params.messageProcessor);

    return tally;
  }
}
