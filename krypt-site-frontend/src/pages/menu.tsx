import { Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <div className="fixed right-0 left-0 min-h-screen bg-gradient-to-r from-blue-800 via-purple-500 to-blue-600 p-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-4 md:mb-0">
                    KRYPTO SITE
                </h1>
                <div className="flex text-center justify-center shadow-xl font-bold text-white space-x-4 md:space-x-10 text-lg p-4">
                    <p className="cursor-pointer hover:text-yellow-300 transition">Home</p>
                    <p className="cursor-pointer hover:text-yellow-300 transition">Wallet</p>
                    <p className="cursor-pointer hover:text-yellow-300 transition">About Us</p>
                    <p className="cursor-pointer hover:text-yellow-300 transition">Contact Us</p>
                </div>
            </div>

          <div className="p-6">
              <Outlet />
          </div>
        </div>
    )
}

export default Menu;