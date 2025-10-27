import { ethers } from "ethers";
import KryptoDAO from "../../../backend/artifacts/contracts/dao.sol/KryptoDAO.json";
import { useEffect, useState } from "react";
const ADDRESS = "0x1dAb667f1b255f2298B99545F9Ba2aAF6CcA8db5";
import daoSvg from "../../public/dao.gif";

function Dao() {
    const [account, setAccount] = useState("");
    const [name, setProposalName] = useState("");
    const [description, setDescription] = useState("");
    const [proposals, setProposals] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [executed, setExecuted] = useState(false);

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
            
            // Load proposals after connecting
            await fetchProposals();
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
                alert("Please switch to Sepolia network first!");
                return;
            }

            setLoading(true);
            const createProposals = await contract.CreateProposal(name, description);
            await createProposals.wait();
            
            setDescription("");
            setProposalName("");
            alert("Proposal Created Successfully on Sepolia!");
            console.log("Proposals:", proposals);
            
            // Refresh proposals after creating new one
            await fetchProposals();
        } catch (error) {
            console.error("ERROR: ", error);
            
            if (error.message && error.message.includes("user rejected transaction")) {
                alert("Transaction was rejected by user");
            } else if (error.message && error.message.includes("insufficient funds")) {
                alert("You don't have enough Sepolia ETH for gas fees");
            } else {
                alert("Transaction failed. Check console for details.");
            }
        } finally {
            setLoading(false);
        }
    }

    async function fetchProposals() {
        try {
            if (!window.ethereum) return;
            
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract(ADDRESS, KryptoDAO.abi, provider);

            const proposalData = await contract.GetProposal();
            
            const formattedProposals = proposalData[0].map((name, index) => ({
                id: index,
                name: name,
                description: proposalData[1][index],
                voteCount: proposalData[2][index].toString(),
                executed: proposalData[3][index]
            }));
            
            setProposals(formattedProposals);
        } catch (error) {
            console.error("Error fetching proposals:", error);
        }
    }

    useEffect(() => {
        if (account) {
            fetchProposals();
        }
    }, [account]);


    async function Vote(proposalId) {
        try {
            if (!window.ethereum) return;
        
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(ADDRESS, KryptoDAO.abi, signer);

            const vote = await contract.VoteProposal(proposalId);
            await vote.wait();
               
            alert("you voted successfully"); 
            await fetchProposals(); // ? refresh after voting
        } catch (error) {
            console.log("ERROR:", error);
            alert("Error during vote");
        }
  

    }

    async function Execute(proposalId) {

      try {
         if (!window.ethereum) return;
        
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(ADDRESS, KryptoDAO.abi, signer);

            const execute = await contract.Execute(proposalId);
            await execute.wait();

            alert("Proposal executed successfully");
            await fetchProposals();
        } catch (error) {
            console.error("ERROR:", error);
            alert("Error during execution");
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
                            disabled={loading}
                            className={`w-full font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                                loading 
                                    ? 'bg-gray-500 cursor-not-allowed' 
                                    : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600'
                            } text-white`}
                        >
                            {loading ? 'Creating...' : 'Create Proposal'}
                        </button>
                    </div>
                </aside>
            </div>
            
            <div className="max-w-6xl mx-auto mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Created Proposals</h2>
                
                {proposals.length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {proposals.map((proposal) => (
                            <div key={proposal.id} className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-purple-300">
                                <h3 className="text-xl font-bold text-white mb-2">{proposal.name}</h3>
                                <p className="text-gray-300 mb-4">{proposal.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-400 font-bold">Votes: {proposal.voteCount}</span>
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                        proposal.executed ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}>
                                        {proposal.executed ? 'Executed' : 'Pending'}
                                    </span>
                                </div>
                                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded hover:from-blue-600 hover:to-purple-600 transition"
                                  onClick={() => Vote(proposal.id)}>
                                    Vote on Proposal
                                </button>
                                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded hover:from-blue-600 hover:to-purple-600 transition"
                                  onClick={() => Execute(proposal.id)}>
                                    Execute
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-white bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-purple-300">
                        <p className="text-xl">No proposals created yet</p>
                        <p className="text-gray-300 mt-2">Be the first to create a proposal!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dao;