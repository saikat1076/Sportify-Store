import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";


const Layouts = () => {
    return (
        <div className=' bg-gray-300 text-black'>
        <Navber></Navber>
        <div className="min-h-[calc(100vh-550px)]">
        <Outlet></Outlet>
       </div>
        <Footer></Footer>
    </div>

    );
};

export default Layouts;