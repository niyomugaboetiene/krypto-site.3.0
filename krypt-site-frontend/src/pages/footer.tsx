import { Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-blue-500 to-gray-500">

           <div className="pt-5">
             <Outlet />
           </div>
        </div>
    )
}


export default Footer;