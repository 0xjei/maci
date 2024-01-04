// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { SnarkCommon } from "../crypto/SnarkCommon.sol";

/// @title IVerifier
interface IVerifier {
  function verify(
    uint256[8] memory _proof,
    SnarkCommon.VerifyingKey memory vk,
    uint256 input
  ) external view returns (bool isValid);
}
