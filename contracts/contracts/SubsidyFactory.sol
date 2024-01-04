// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Subsidy } from "./Subsidy.sol";

/// @title SubsidyFactory
/// @notice A factory contract which deploys Subsidy contracts.
contract SubsidyFactory {
  /// @notice Deploy a new Subsidy contract and return the address.
  /// @param _verifier Verifier contract
  /// @param _vkRegistry VkRegistry contract
  /// @param _poll Poll contract
  /// @param _messageProcessor MessageProcessor contract
  /// @return subsidyAddr The deployed Subsidy contract
  function deploy(
    address _verifier,
    address _vkRegistry,
    address _poll,
    address _messageProcessor,
    address _owner
  ) public returns (address subsidyAddr) {
    /// @notice deploy Tally for this Poll
    Subsidy subsidy = new Subsidy(_verifier, _vkRegistry, _poll, _messageProcessor);
    subsidy.transferOwnership(_owner);
    subsidyAddr = address(subsidy);
  }
}
