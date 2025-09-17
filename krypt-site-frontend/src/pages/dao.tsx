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
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto">
        <aside className="max-w-md">
            <div className="shadow-2xl">
                 <img src={daoSvg} alt="DAO Svg"
                    className="rounded-lg mb-6" />
            </div>
            {!account ? (
                <div className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group">
                    <button onClick={ConnectToWallet}>Connect to MetaMask</button>
                </div>
            ) : (
                <p className="bg-green-200 text-black rounded p-0 ps-4 font-bold">Connected to MetaMask</p>
            )}
        </aside>
        <aside className="w-full lg:w-3/5 bg-gray-900 bg-opacity-50 p-8 rounded-xl shadow-2xl border border-purple-400 border-opacity-50">
            <input type="text"  
            value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={createProposal}>Create</button>
        </aside>
    </div>
    </div>
)
}

export default Dao;