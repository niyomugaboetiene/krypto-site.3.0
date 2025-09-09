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
        </footer>
    )
}


export default Footer;