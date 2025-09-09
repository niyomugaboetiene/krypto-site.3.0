import wallet from "../../public/wallet.gif";
import { FaWallet } from "react-icons/fa";

const Wallet = () => {

    return (
        <div className="min-h-screen py-8 px-4 bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto">
                 <aside className="w-full lg:w-2/5 flex flex-col items-center">
                      <img src={wallet} className="rounded-lg shadow-xl w-full mb-6" />
                      <button className="w-full bg-gradient-to-t from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg
                                shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                        Connect to MetaMask
                        <FaWallet className="text-red"/>
                    </button>
                 </aside>
            </div>
      
        </div>
    )
}

export default Wallet;