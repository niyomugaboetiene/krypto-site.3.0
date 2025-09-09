import { Outlet } from "react-router-dom";
import { FaFacebook, FaTwitter, FaEnvelope, FaCoffee } from "react-icons/fa";
import { SiBitcoin, SiEthereum } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-blue-500 to-gray-500 py-10 mt-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-3">
                <FaCoffee className="text-amber-50 text-2xl mr-2" />
                <p className="text-xl font-bold">Buy me coffee with crypto !!!</p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 max-w-xl"></div>
            </div>
            <p className="mt-sm mt-2">
              Wallet Address: <span className="font-mono">0x72acEE3554A7456d47714E588C327ed86D445685</span>
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="mt-2">Connect with me</p>
            <div className="flex justify-center spacex-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href="mailto:niyomugaboetiene53@gmail.com" className="hover:underline">Gmail</a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
             © {new Date().getFullYear()} Krypto Site. All right reserved
          </div>

          <Outlet/>
        </footer>
    )
}


export default Footer;