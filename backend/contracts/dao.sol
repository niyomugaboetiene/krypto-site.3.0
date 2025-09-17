// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract KryptoDAO {
    struct Proposal {
        string description;
        string name;
        uint256 voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping (address => bool) hasVoted;

    function CreateProposal (string memory _name, string memory _description) public {
        proposals.push(Proposal({
            name: _name,
            description: _description,
            voteCount: 0,
            executed: false
        }));
    }

    function GetProposal() public view returns(
        string[] name,
        string[] description,
        uint256[] voteCount,
        bool[] executed
    ) {

    }
}