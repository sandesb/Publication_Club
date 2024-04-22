import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "../Main";
import Header1 from "./Header1";



const Layout = () => {
    return (
        <div>
        <Header1/>

        <div class="body1">
        <Outlet />

        </div>

        <Footer/> 
        </div>

    );
};

export default Layout;