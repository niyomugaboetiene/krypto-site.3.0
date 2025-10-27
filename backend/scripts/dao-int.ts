import { ethers } from "hardhat";
import { KryptoDAO } from "../typechain-types";

export async function main() {
    const address = "0x8b9A24d230997448A46AD58ab2b3c299E6DC74cb";
    const factory = await ethers.getContractFactory("KryptoDAO");
    const kryptodao = factory.attach(address) as KryptoDAO;

    const createProposal = await kryptodao.CreateProposal("Testing proposal", "This proposal contain testing one");
    createProposal.wait();
    console.log("Proposal created");

    // const [_name, description, voteCount, executed ] = await kryptodao.GetProposal();
    // for (let i = 0; i < _name.length; i ++) {
    //     console.log(_name[i], description[i], voteCount[i], executed[i]);
    // }

    const vote = await kryptodao.VoteProposal(1);
    if (vote) {
        console.log("Voted successfully");
    }

    const execute = await kryptodao.Execute(0);
    await execute.wait();
    console.log("Executed");

    const getExecuted = 
}

main().catch((error) => {
    console.error("ERROR:", error)
})