import wallet from "../../public/wallet.gif";
import { FaWallet } from "react-icons/fa";

const Wallet = () => {

    return (
          <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto">
                <aside className="w-full lg:w-2/5 flex flex-col items-center">
                    <img 
                        src={wallet} 
                        alt="Wallet illustration" 
                        className="rounded-lg shadow-xl w-full mb-6" 
                    />
                    <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group">
                        <FaWallet className="text-xl group-hover:animate-pulse" />
                        <span>Connect to MetaMask</span>
                    </button>
                    
                    <div className="w-full mt-6 bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                        <h3 className="text-white font-semibold mb-2">Wallet Status</h3>
                        <div className="text-gray-300 text-sm">
                            <p>• Not connected</p>
                            <p>• Balance: 0 ETH</p>
                            <p>• Network: Not available</p>
                        </div>
                    </div>
                </aside>
                
                <aside className="w-full lg:w-3/5 bg-gray-900 bg-opacity-50 p-8 rounded-xl shadow-2xl border border-purple-400 border-opacity-50">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Send Tokens</h2>
                  <p className="text-gray-300 text-center mb-8">
                    Connect Your wallet to enable transfer
                  </p>

                  <div className="space-y-6 opacity-50">
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">
                            Recipient Address
                        </label>
                        <input type="text"
                          placeholder="0x...."
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          disabled
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">
                                Amount
                            </label>

                            <input type="text" 
                               placeholder="0.0"
                               className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">
                                Token
                            </label>
                            <select 
                             className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2
                              focus:ring-purple-500">
                                <option>ETH</option>
                                <option>USDT</option>
                                <option>DAI</option>
                              </select>
                        </div>
                    </div>

                    <button 
                      className="w-full bg-gray-700 text-gray-500 font-bold py-3 px-6 rounded-lg cursor-not-allowed" disabled>
                        Connect Wallet to Send
                      </button>
                  </div>
                </aside>
            </div>
      
        </div>
    )
}

export default Wallet;