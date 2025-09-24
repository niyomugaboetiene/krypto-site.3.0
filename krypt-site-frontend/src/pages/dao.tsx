import { ethers } from "ethers";
import KryptoDAO from "../../../backend/artifacts/contracts/dao.sol/KryptoDAO.json";
import { useState } from "react";
const ADDRESS = "0xA064200c61c9853Dcc7c002E6482120A43adB1A6";
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
        const network = await provider.getNetwork();
        
        console.log("Network", network, network.chainId);

        if (network.chainId !== 11155111n) { 
            alert("Please switch to Sepolia network in MetaMask");
            
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xaa36a7' }], 
                });
                
                const newProvider = new ethers.BrowserProvider(window.ethereum);
                const newNetwork = await newProvider.getNetwork();
                console.log("Switched to network:", newNetwork);
                
            } catch (switchError) {
                console.error("Failed to switch network:", switchError);
                alert("Please manually switch to Sepolia network in your MetaMask");
            }
        }

        setAccount(accounts[0]);
        alert("Connected successfully");
    } catch (error) {
        console.error("ERROR:", error);
    }
}
   async function createProposal() {
    if (!description || !name) {
        alert("Please fill in both name and description");
        return;
    }
    
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(ADDRESS, KryptoDAO.abi, signer);

    try {
        const network = await provider.getNetwork();
        if (network.chainId !== 11155111n) {
            alert(" Please switch to Sepolia network first!");
            return;
        }

        const createProposals = await contract.CreateProposal(name, description);
        await createProposals.wait();
        setDescription("");
        setProposalName("");
        alert("Proposal Created Successfully on Sepolia!");   
    } catch (error) {
        console.error("ERROR: ", error);
        
        if (error.message && error.message.includes("user rejected transaction")) {
            alert("Transaction was rejected by user");
        } else if (error.message && error.message.includes("insufficient funds")) {
            alert("You don't have enough Sepolia ETH for gas fees");
        } else {
            alert("Transaction failed. Check console for details.");
        }
    }
}
return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto">
            <aside className="max-w-md">
                <div className="shadow-2xl">
                    <img src={daoSvg} alt="DAO Svg" className="rounded-lg mb-6" />
                </div>
                {!account ? (
                    <button 
                        onClick={ConnectToWallet}
                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Connect to MetaMask
                    </button>
                ) : (
                    <div>
                        <p className="bg-green-200 text-black rounded p-2 font-bold mb-2">
                             Connected: {account.substring(0, 6)}...{account.substring(38)}
                        </p>
                        <p className="bg-blue-200 text-black rounded p-2 font-bold">
                            🌐 Sepolia Testnet
                        </p>
                    </div>
                )}
            </aside>
            
            <aside className="w-full lg:w-3/5 p-8">
                <div className="bg-gray-900 bg-opacity-50 p-8 border border-purple-300 rounded-xl shadow-2xl mb-6">
                    <h2 className="font-medium text-2xl text-center text-white mb-6">Create Proposal</h2>
                    
                    <input 
                        type="text"  
                        value={name}
                        className="w-full p-3 bg-gray-800 outline-purple-800 text-white mb-4 rounded"
                        placeholder="Proposal Name"
                        onChange={(e) => setProposalName(e.target.value)}
                    />
                    
                    <input 
                        type="text"  
                        value={description}
                        className="w-full p-3 bg-gray-800 outline-purple-800 text-white mb-4 rounded"
                        placeholder="Proposal Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    
                    <button 
                        onClick={createProposal}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Create Proposal
                    </button>
                </div>
            </aside>
        </div>
    </div>

)
}

export default Dao;