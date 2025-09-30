// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract KryptoDAO {
    struct Proposal {
        string name;
        string description;
        uint256 voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping (uint256 => mapping(address => bool)) public hasVoted;

    function CreateProposal(string memory _name, string memory _description) public {
        proposals.push(Proposal({
            name: _name,
            description: _description,
            voteCount: 0,
            executed: false
        }));
    }

    function GetProposal() public view returns(
        string[] memory names,
        string[] memory descriptions,
        uint256[] memory voteCounts,
        bool[] memory executedFlags
    ) {
        uint256 len = proposals.length;

        names = new string[](len);
        descriptions = new string[](len);
        voteCounts = new uint256[](len);
        executedFlags = new bool[](len);

        for (uint256 i = 0; i < len; i++) {
            Proposal storage p = proposals[i];
            names[i] = p.name;
            descriptions[i] = p.description;
            voteCounts[i] = p.voteCount;
            executedFlags[i] = p.executed;
        }

        return (names, descriptions, voteCounts, executedFlags);
    }

    function VoteProposal(uint256 proposalId) public {
        require(!hasVoted[proposalId][msg.sender], "You've already voted");
        require(!proposals[proposalId].executed, "Already executed");
        require(proposalId < proposals.length, "Invalid proposal");

        proposals[proposalId].voteCount += 1;
        hasVoted[proposalId][msg.sender] = true;
    }

    function  Execute(uint256 proposalId) public {
        require(proposalId < proposals.length, "Invalid proposal");
        require(!proposals[proposalId].executed, "Already executed");

        if (proposals[proposalId].voteCount > 1) {
             proposals[proposalId].executed = true;
        }
    }
}
