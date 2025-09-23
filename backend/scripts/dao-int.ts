import { ethers } from "hardhat";
import { KryptoDAO } from "../typechain-types";

export async function main() {
    const address = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const factory = await ethers.getContractFactory("KryptoDAO");
    const kryptodao = factory.attach(address) as KryptoDAO;

    // const createProposal = await kryptodao.CreateProposal("Testing proposal", "This proposal contain testing one");
    // createProposal.wait();
    // console.log("Proposal created");

    const getProposal = await kryptodao.GetProposal();
    console.log("Proposals:", getProposal);
}

main().catch((error) => {
    console.error("ERROR:", error)
})