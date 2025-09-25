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
    }`

    function GetProposal() public view returns(
        string[] memory name,
        string[] memory description,
        uint256[] memory voteCount,
        bool[]  memory executed
    ) {
         uint256 len = proposals.length;

         name = new string[](len);
         description = new string[](len);
         voteCount = new uint256[](len);
         executed = new bool[](len);


         for (uint256 i = 0; i < len; i ++) {
            Proposal storage p = proposals[i];
            name[i] = p.name;
            description[i] = p.description;
            voteCount[i] = p.voteCount;
            executed[i] = p.executed;
          }

          return (name, description, voteCount, executed);
          }


          function VoteProposal (uint256 proposalId, address voter) public {
                 require((!hasVoted[msg.sender]), "You're already voted");
                 require(());
          }
     }