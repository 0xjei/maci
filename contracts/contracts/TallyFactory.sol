// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Params } from "./utilities/Params.sol";
import { DomainObjs } from "./utilities/DomainObjs.sol";
import { MessageProcessor } from "./MessageProcessor.sol";
import { Tally } from "./Tally.sol";
import { Poll } from "./Poll.sol";
import { Verifier } from "./crypto/Verifier.sol";
import { VkRegistry } from "./VkRegistry.sol";

/// @title TallyFactory
/// @notice A factory contract which deploys Tally contracts.
contract TallyFactory is Params, DomainObjs {
  /// @notice Deploy a new Tally contract and return the address.
  /// @param _verifier Verifier contract
  /// @param _vkRegistry VkRegistry contract
  /// @param _poll Poll contract
  /// @param _messageProcessor MessageProcessor contract
  /// @return tally The deployed Tally contract
  function deploy(
    Verifier _verifier,
    VkRegistry _vkRegistry,
    Poll _poll,
    MessageProcessor _messageProcessor
  ) public returns (Tally tally) {
    /// @notice deploy Tally for this Poll
    tally = new Tally(_verifier, _vkRegistry, _poll, _messageProcessor);

    return tally;
  }
}
