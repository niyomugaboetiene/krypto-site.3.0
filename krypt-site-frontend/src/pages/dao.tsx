import { ethers } from "ethers";
import KryptoDAO from "../../../backend/artifacts/contracts/dao.sol/KryptoDAO.json";
import { useState } from "react";
const ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function Dao () {
    const [account, setAccount] = useState("");
    const [description, setDescription] = useState("");
    const [proposal, setProposal] = useState("");

   async function ConnectToWallet() {
      if (window.ethereum) {
          alert("Connect to metamask firts");
          return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);

    
    }
   
async function createProposal() {
    if (!description) return;
   const provider = new ethers.BrowserProvider(window.ethereum);
   const signer = await provider.getSigner();
   const contracts = new ethers.Contract(ADDRESS, KryptoDAO.abi, signer);

   const createProposals = await contracts.createProposal(description);
   createProposals.wait();
   setDescription("");

   alert("Proposal Created Successfully");
}

return (
    <div>
        <button onClick={ConnectToWallet}>Connect</button>

        <div>
            <input type="text"  
            value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={createProposal}>Create</button>
        </div>
    </div>
)
}

export default Dao;