// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";
import { Subsidy } from "./Subsidy.sol";
import { Poll } from "./Poll.sol";
import { Verifier } from "./crypto/Verifier.sol";
import { VkRegistry } from "./VkRegistry.sol";

/// @title SubsidyFactory
/// @notice A factory contract which deploys Subsidy contracts.
contract SubsidyFactory is Params, DomainObjs {
  /// @notice Deploy a new Subsidy contract and return the address.
  function deploy(
    Verifier _verifier,
    VkRegistry _vkRegistry,
    Poll _poll,
    MessageProcessor _messageProcessor
  ) public returns (Subsidy subsidy) {
    /// @notice deploy Tally for this Poll
    subsidy = new Subsidy(_verifier, _vkRegistry, _poll, _messageProcessor);

    return subsidy;
  }
}
