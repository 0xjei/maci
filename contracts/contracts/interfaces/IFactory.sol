// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { Verifier } from "../crypto/Verifier.sol";
import { VkRegistry } from "../VkRegistry.sol";

/// @title IFactory interface
interface IFactory {
  /// @notice Merge the state accumulator queue
  /// @return The new root of the state accumulator queue after merging
  function deploy(T params) external returns (address);
}
