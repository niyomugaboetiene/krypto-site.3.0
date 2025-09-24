import { ethers } from "hardhat";
import { KryptoDAO } from "../typechain-types";

export async function main() {
    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
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