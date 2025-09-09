import { Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-purple-500 p-14 to-blue-600 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-2 md:mb-0">
                        KRYPTO SITE
                    </h1>
                    <div className="flex text-center justify-center font-bold text-white space-x-4 md:space-x-8 text-md md:text-lg">
                        <p className="cursor-pointer hover:text-yellow-300 transition">Home</p>
                        <p className="cursor-pointer hover:text-yellow-300 transition">Wallet</p>
                        <p className="cursor-pointer hover:text-yellow-300 transition">About Us</p>
                        <p className="cursor-pointer hover:text-yellow-300 transition">Contact Us</p>
                    </div>
                </div>
            </div>
            
            <div className="pt-20"> 
                <Outlet />
            </div>
        </>
    )
}

export default Menu;