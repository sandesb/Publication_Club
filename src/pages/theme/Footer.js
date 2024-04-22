import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Footer = () => {
    const nep = () =>{
        Swal.fire({
            position: "top-center",
            icon: "info",
            title: "Welcome to प्रकाशन क्लब!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const de = () =>{
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Welcome to Veröffentlichungsclub!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const gen = () =>{
        Swal.fire({
            position: "top-center",
            icon: "warning",
            title: "Welcome to YAP Club!",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (

<footer class="site-footer section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-12 mb-4 pb-2">
                        <Link to="/pages/Main"><a class="navbar-brand mb-2">
                            <img class="logo2" src="/v.png"></img>
                        </a> </Link>
                    </div>

                    <div class="col-lg-3 col-md-4 col-6">
                        <h6 class="site-footer-title mb-3">Resources</h6>

                        <ul class="site-footer-links">
                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">Home</a>
                            </li>

                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">How it works</a>
                            </li>

                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">FAQs</a>
                            </li>

                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 class="site-footer-title mb-3">Information</h6>

                        <p class="text-white d-flex mb-1">
                            <a href="tel: 305-240-9671" class="site-footer-link">
                                9880088279
                            </a>
                        </p>

                        <p class="text-white d-flex">
                            <a href="virinchicollege.edu.np" class="site-footer-link">
                                virinchicollege.edu.np
                            </a>
                        </p>
                    </div>

                    <div class="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language</button>

                            <ul class="dropdown-menu">
                                <Link to="/pages/MainN"><li><button onClick={nep} class="dropdown-item" type="button">Nepali</button></li>
                                </Link>

                                <Link to="/pages/MainD"><li><button  onClick={de}class="dropdown-item" type="button">German</button>
                                </li></Link>
                                

                                <Link to="/pages/MainZ"><li><button  onClick={gen}class="dropdown-item" type="button">GenZ</button></li>
                                </Link>

                            </ul>
                        </div>

                        <p class="copyright-text mt-lg-5 mt-4">Copyright © 2024.</p>
                        
                    </div>

                </div>
            </div>
    
    </footer>

    );
};

export default Footer;