import { ethers } from "ethers";
import KryptoDAO from "../../../backend/artifacts/contracts/dao.sol/KryptoDAO.json";
import { useState } from "react";
const ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
import daoSvg from "../../public/dao.gif";

function Dao () {
    const [account, setAccount] = useState("");
    const [description, setDescription] = useState("");
    const [proposal, setProposal] = useState("");

   async function ConnectToWallet() {
      if (!window.ethereum) {
          alert("Connect to metamask first");
          return;
    }

    try {
         const provider = new ethers.BrowserProvider(window.ethereum);
         const accounts = await provider.send("eth_requestAccounts", []);
         setAccount(accounts[0]);
         alert("Connected successfully");
    } catch (error) {
        console.error("ERROR:", error);
    }
    }
   
async function createProposal() {
    if (!description) return;
   const provider = new ethers.BrowserProvider(window.ethereum);
   const signer = await provider.getSigner();
   const contracts = new ethers.Contract(ADDRESS, KryptoDAO.abi, signer);

   const createProposals = await contracts.CreateProposal(description);
   createProposals.wait();
   setDescription("");

   alert("Proposal Created Successfully");
}

return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
        <aside className="max-w-md">
            <div className="shadow-2xl">
                 <img src={daoSvg} alt="DAO Svg"
                    className="rounded-lg" />
            </div>
           <button onClick={ConnectToWallet}>Connect</button>
        </aside>
        <aside>
            <input type="text"  
            value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={createProposal}>Create</button>
        </aside>
    </div>
)
}

export default Dao;