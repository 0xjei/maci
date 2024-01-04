// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/// @title IMessageProcessorFactory
interface IMessageProcessorFactory {
  function deploy(address _verifier, address _vkRegistry, address _poll, address _owner) external returns (address);
}
