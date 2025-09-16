import { ethers } from "hardhat";
export async function main() {
    const factory = await ethers.getContractFactory("KryptoDAO");
    const kryptodao = await factory.deploy();

    await kryptodao.waitForDeployment();
    const address = await kryptodao.getAddress();
    console.log("Address:", address);
}

main().catch((error) => {
    console.error("ERROR:", error);
});