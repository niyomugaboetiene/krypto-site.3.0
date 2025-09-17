import { ethers } from "hardhat";
import { KryptoDAO } from "../typechain-types";

export async function main() {
    const address = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
    const factory = await ethers.getContractFactory("KryptoDAO");
    const kryptodao = factory.attach(address) as KryptoDAO;

    const createProposal = await kryptodao.CreateProposal("Testing proposal", "This proposal contain testing one");
    createProposal.wait();
    console.log("Proposal created");
}

main().catch((error) => {
    console.error("ERROR:", error)
})