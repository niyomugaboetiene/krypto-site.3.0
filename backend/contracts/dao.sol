// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract KryptoDAO {
    struct Proposal {
        string description;
        uint256 voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping (address => bool) hasVoted;

    function CreateProposal (string memory _description) public {
        proposals.push(Proposal({
            description: _description,
            voteCount: 0,
            executed: false
        }));
    }
}