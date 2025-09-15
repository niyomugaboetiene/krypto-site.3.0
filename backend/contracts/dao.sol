pragma solidity ^0.8.28;

contract DAO {

    struct Proposal{
        string description,
        uint256 voteCount,
        bool hasVoted 
    }

    Proposal[] public proposals;
    mapping(address => bool) public HasVoted;

    function CreateProposal(string memory _description) {
        
    }
}