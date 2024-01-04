// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title ITallySubsidyFactory
interface ITallySubsidyFactory {
  function deploy(
    address _verifier,
    address _vkRegistry,
    address _poll,
    address _messageProcessor,
    address _owner
  ) external returns (address);
}
