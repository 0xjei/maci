// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import { IMACI } from "./IMACI.sol";
import { AccQueue, AccQueueQuinaryMaci } from "../trees/AccQueue.sol";
import { TopupCredit } from "../TopupCredit.sol";
import { Params } from "../utilities/Params.sol";
import { DomainObjs } from "../utilities/DomainObjs.sol";
import { VkRegistry } from "../VkRegistry.sol";
import { Verifier } from "../crypto/Verifier.sol";

/// @title IPollFactory
interface IPollFactory {
  function deploy(
    uint256 _duration,
    Params.MaxValues memory _maxValues,
    Params.TreeDepths memory _treeDepths,
    Params.BatchSizes memory _batchSizes,
    DomainObjs.PubKey memory _coordinatorPubKey,
    IMACI _maci,
    TopupCredit _topupCredit,
    address _pollOwner
  ) external returns (address poll);
}
