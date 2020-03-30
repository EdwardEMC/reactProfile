import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">Edward Coad</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <Link 
                            to="/about" 
                            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link 
                            to="/portfolio" 
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link 
                            to="/Timeline" 
                            className={location.pathname === "/timeline" ? "nav-link active" : "nav-link"}>
                            Timeline
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link 
                            to="/contact" 
                            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavTabs;