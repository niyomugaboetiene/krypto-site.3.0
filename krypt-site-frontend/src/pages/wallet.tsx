import { useEffect, useState } from "react";
import wallet from "../../public/wallet.gif";
import { FaWallet } from "react-icons/fa";
import { ethers } from "ethers";

const Wallet = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string>("0")
    const [network, setNetwork] = useState<string>("Not Connected");
    const [recipient, setRecipient] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [transactions, setTransactions] = useState({});


    const ConnectToWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                // allow ethereum to ask user for persmission to expose their wallet
                await provider.send("eth_requestAccounts", []);
                const signer = await provider.getSigner();
                const userAddress = await signer.getAddress();
                const balance = await provider.getBalance(userAddress);
                const netWork = await provider.getNetwork();

                setAccount(userAddress);
                // format balacne into WEI
                setBalance(ethers.formatUnits(balance));
                // get network user is connected to like sepolia, plygon, mainnet 
                setNetwork(netWork.name);
                
            } catch (error) {
                console.log("Connection error:", error);
            }
        } else {
            alert ("Metamask not detected !");
        }
    }


    const sendETH = async () => {
        if (!recipient || !amount) {
            alert("Enter address and amount");
            return;
        }

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            
            const tx = await signer.sendTransaction({
                to: recipient,
                value: ethers.parseEther(amount)
            });
            await tx.wait();
            alert (`Sent ${amount} ETH to ${recipient}`);
        } catch (error) {
            console.error("Transaction failed", error);
            alert ("Transaction failed");
        }
    }

    async function TrackAllTransaction() {
      const provider =  new ethers.BrowserProvider(window.ethereum);

      // Get latest block number
      const latestBlock = await provider.getBlockNumber();
      const txList = [];

      for (let i = latestBlock; i >= latestBlock - 10; i --) {
         const block = await provider.getBlock(i, true);
         if (block && block.transactions.length > 0) {
          for (const tx of block.transactions) {
            txList.push({
              from: tx.from,
              to: tx.to,
              value: ethers.formatEther(tx.value),
              hash: tx.hash,
            });
          }
         } 
      }
      setTransactions(txList);
    }

    useEffect(() => {
      TrackAllTransaction();
    })

    return (
          <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto">
                <aside className="w-full lg:w-2/5 flex flex-col items-center">
                    <img 
                        src={wallet} 
                        alt="Wallet illustration" 
                        className="rounded-lg shadow-xl w-full mb-6" 
                    />
                    {!account ? (
                      <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group"
                          onClick={ConnectToWallet}>
                          <FaWallet className="text-xl group-hover:animate-pulse" />
                          <span>Connect to MetaMask</span>
                      </button>
                    ) : (
                        <p className="text-green-300 font-bold"> Connected </p>
                    )}
                 
                    
                    <div className="w-full mt-6 bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                        <h3 className="text-white font-semibold mb-2">Wallet Status</h3>
                        <div className="text-gray-300 text-sm">
                            <p>• Account: {account || "Not Connected"}</p>
                            <p>• Balance: {balance}</p>
                            <p>• Network: {network}</p>
                        </div>
                    </div>
                </aside>
                
        <aside className="w-full lg:w-3/5 bg-gray-900 bg-opacity-50 p-8 rounded-xl shadow-2xl border border-purple-400 border-opacity-50">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send ETH
          </h2>

          {!account ? (
            <p className="text-gray-400 text-center">⚠️ Connect wallet first</p>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Recipient Address
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="0x...."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Amount (ETH)
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                />
              </div>

              <button
                onClick={sendETH}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send ETH
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Wallet;
