import { ethers } from "hardhat";
import { KryptoDAO } from "../typechain-types";

export async function main() {
    const address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const factory = await ethers.getContractFactory("KryptoDAO");
    const kryptodao = factory.attach(address) as KryptoDAO;

    const createProposal = await kryptodao.CreateProposal("Testing proposal", "This proposal contain testing one");
    createProposal.wait();
    console.log("Proposal created");

    const [_name, description, voteCount, executed ] = await kryptodao.GetProposal();
    for (let i = 0; i < _name.length; i ++) {
        console.log(_name[i], description[i], voteCount[i], executed[i]);
    }
}

main().catch((error) => {
    console.error("ERROR:", error)
})