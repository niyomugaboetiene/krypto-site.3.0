import { ethers } from "hardhat";
import { KryptoDAO } from "../typechain-types";
import { any } from "hardhat/internal/core/params/argumentTypes";

export async function main() {
    const address = "0x112eBA9763B61d800A59bF5e1F1236F0989F823E";
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

    const allProposal = await kryptodao.Executed();
    interface Proposal {
        name: string,
        decription: string,
        voteCount: bigint,
        executed: boolean
    }
    const executed = (allProposal as Proposal[]).filter(
        (p: Proposal) => p.executed
    );
    console.log(executed);

}

main().catch((error) => {
    console.error("ERROR:", error)
    process.exit(1);
})