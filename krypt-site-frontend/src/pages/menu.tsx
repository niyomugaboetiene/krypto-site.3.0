import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-800 via-purple-500 p-14 to-blue-600 shadow-lg rounded">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <button className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-2 md:mb-0 hover:scale-105 duration-100"
                    onClick={() => {
                        navigate('/')
                    }}
                    >
                        KRYPTO SITE
                    </button>
                    <div className="flex text-center justify-center font-bold text-white space-x-4 md:space-x-8 text-md md:text-lg">
                        <p className="cursor-pointer hover:text-yellow-300 transition" onClick={() => {
                            navigate('/')
                        }}>
                            Home
                        </p>
                        <p className="cursor-pointer hover:text-yellow-300 transition" onClick={() => {
                            navigate('/wallet')
                        }}>
                            Wallet
                        </p>
                        <p className="cursor-pointer hover:text-yellow-300 transition" onClick={() => {
                            navigate('/dao')
                        }}>
                            DAO
                        </p>
                        <p className="cursor-pointer hover:text-yellow-300 transition" onClick={() => {
                            navigate('/about');
                        }}>
                            About Us
                        </p>
                        <a href="https://niyomugaboetiene.onrender.com/contact" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-yellow-300 transition">
                            Contact Us
                        </a>
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