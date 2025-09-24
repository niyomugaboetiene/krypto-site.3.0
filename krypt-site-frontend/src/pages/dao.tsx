import { ethers } from "ethers";
import KryptoDAO from "../../../backend/artifacts/contracts/dao.sol/KryptoDAO.json";
import { useState } from "react";
const ADDRESS = "0xC3cE6b8FF58976CCb0D81a3C6E7DF00deC4010D3";
import daoSvg from "../../public/dao.gif";

function Dao () {
    const [account, setAccount] = useState("");
    const [name, setProposalName] = useState("");
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

   const createProposals = await contracts.CreateProposal(name, description);
   createProposals.wait();
   setDescription("");
   setProposalName("");

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
        <aside className="w-full lg:w-3/5 p-8">
        <div className=" bg-gray-900 bg-opacity-50 p-8 border border-purple-300 rounded-xl shadow-2xl mb-6">
            <h2 className="font-medium text-2xl text-center text-white mb-6">Create Proposal</h2>
            <input type="text"  
                value={description}
                className="w-full p-3 bg-gray-800 outline-purple-800 text-white mb-6"
                placeholder="Add Proposal Name"
                 onChange={(e) => setDescription(e.target.value)}
            />
            <input type="text"  
                value={name}
                className="w-full p-3 bg-gray-800 outline-purple-800 text-white mb-6"
                placeholder="Add Description.."
                 onChange={(e) => setProposalName(e.target.value)}
            />
            <button onClick={createProposal}
               className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Create
            </button>
        </div>

         <div>
            <p className="text-md">You can create Proposal.By submitting a proposal, you give the community a chance to discuss, vote, and decide together on actions that shape the future of the project.
             <div className="mb-2"></div>
            <span className="">✨ Anyone with access can create a proposal.</span><br />

            <span>📝 Add a clear description of your idea or request. </span><br />

            <span>✅ Once submitted, the proposal will be visible to all members for voting.</span> <br />

             <span>🔒 Every proposal is stored on the blockchain, ensuring transparency and immutability.</span> 
             </p>
          </div>
        </aside>
        
    </div>

    <div>
        <h2>Created Proposal Section</h2>
    </div>
    </div>
)
}

export default Dao;