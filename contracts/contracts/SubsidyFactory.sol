// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { IFactory } from "./interfaces/IFactory.sol";
import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";
import { Subsidy } from "./Subsidy.sol";
import { Poll } from "./Poll.sol";
import { Verifier } from "./crypto/Verifier.sol";
import { VkRegistry } from "./VkRegistry.sol";

struct SubsidyParams {
  Poll poll;
  Verifier verifier;
  VkRegistry vkRegistry;
  MessageProcessor mp;
}

/// @title SubsidyFactory
/// @notice A factory contract which deploys Subsidy contracts.
contract SubsidyFactory is IFactory, Params, DomainObjs {
  /// @notice Deploy a new Subsidy contract and return the address.
  /// @param params The params needed for deploying a new Subsidy contract
  function deploy(SubsidyParams params) public override returns (Subsidy subsidy) {
    /// @notice deploy Tally for this Poll
    Subsidy subsidy = new Subsidy(params.verifier, params.vkRegistry, params.poll, params.mp);

    return subsidy;
  }
}
