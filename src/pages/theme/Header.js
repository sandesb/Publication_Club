import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import {toast } from 'react-toastify';
import Darkmode from 'darkmode-js';

// import styles from '/templatemo-topic-listing.css';

const Header = () => {
    const navigate = useNavigate();
    

    const logout = () => {

        alert("Do you really wanna Log Out?");
        toast.error('🐱‍👤 Successfully Logged Out!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        localStorage.removeItem('isLogin');
        navigate("/")

    }




    return (
        
        <div className="header1">
        <nav className="navbar sticky navbar-expand-lg">
            <div className="container">
                <img className="navbar-brand logo" src="/images.png" alt="Logo" />
    
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-5 me-lg-auto">
                        <li className="nav-item">
                            <Link to="/pages/Main" className="nav-link click-scroll">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/pages/UserManagement" className="nav-link dropdown-toggle">Speakers</Link>
                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDropdown">
                                <li><Link to="/pages/UserManagement" className="dropdown-item">1st Sem</Link></li>
                                <li><Link to="/pages/UserManagement" className="dropdown-item">3rd Sem</Link></li>
                                <li><Link to="/pages/UserManagement" className="dropdown-item">5th Sem</Link></li>
                                <li><Link to="/pages/Counter" className="dropdown-item">6th Sem</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/Counter1" className="nav-link click-scroll">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/Faq" className="nav-link click-scroll">Timer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/Randomizer" className="nav-link click-scroll">Randomizer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/AboutUs" className="nav-link click-scroll">About Us</Link>
                        </li>
                    </ul>
                    <div className="d-none d-lg-block">
                        <button className="logButton" onClick={logout}>LogOut</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    



    );
};

export default Header;