import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link 
                to="/" 
                className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <span className="navbar-brand">Edward Coad</span>
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link 
                            to="/about" 
                            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/portfolio" 
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/timeline" 
                            className={location.pathname === "/timeline" ? "nav-link active" : "nav-link"}>
                            Timeline
                        </Link>
                    </li>
                    <li className="nav-item">
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