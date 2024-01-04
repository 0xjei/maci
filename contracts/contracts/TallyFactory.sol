// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Tally } from "./Tally.sol";

/// @title TallyFactory
/// @notice A factory contract which deploys Tally contracts.
contract TallyFactory {
  /// @notice Deploy a new Tally contract and return the address.
  /// @param _verifier Verifier contract
  /// @param _vkRegistry VkRegistry contract
  /// @param _poll Poll contract
  /// @param _messageProcessor MessageProcessor contract
  /// @param _owner Owner of the Tally contract
  /// @return tallyAddr The deployed Tally contract
  function deploy(
    address _verifier,
    address _vkRegistry,
    address _poll,
    address _messageProcessor,
    address _owner
  ) public returns (address tallyAddr) {
    /// @notice deploy Tally for this Poll
    Tally tally = new Tally(_verifier, _vkRegistry, _poll, _messageProcessor);
    tally.transferOwnership(_owner);
    tallyAddr = address(tally);
  }
}
