import { Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black via-blue-500 to-gray-500 py-8 mt-10">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold">Buy me coffee with crypto !!!</p>
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
        </footer>
    )
}


export default Footer;