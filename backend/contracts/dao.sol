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
        string[] memory name,
        string[] memory description,
        uint256[] memory voteCount,
        bool[]  executed
    ) {
         uint256 len = proposals.length;

         name = new string[](len);
         description = new string[](len);
         voteCount = new uint256[](len);
         executed = new bool[](len);


         for (uint256 i; i <= len; i ++) {
            name[i] = proposals[i];
            description[i] = proposals[i];
            voteCount[i] = proposals[i];
            executed[i] = proposals[i];
          };
     }
}