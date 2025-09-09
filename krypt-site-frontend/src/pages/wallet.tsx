import wallet from "../../public/wallet.gif";
import { FaWallet } from "react-icons/fa";

const Wallet = () => {

    return (
          <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto">
                {/* Left side - Wallet GIF and Connect Button */}
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
                
                <aside className="w-full lg:w-full ">
                    <div className="max-w-md">
                        <label htmlFor="">Receiver Address</label>
                    </div>
                </aside>
            </div>
      
        </div>
    )
}

export default Wallet;