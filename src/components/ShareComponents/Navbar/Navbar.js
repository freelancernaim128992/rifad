import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-style">
            <div className="container">
                <a className="navbar-brand logo-style" href="/">Car House</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item pe-5">
                    <a className="nav-link menu-style" href="/home">Home</a>
                    </li>
                    <li className="nav-item pe-5">
                    <a className="nav-link menu-style" href="/">Products</a>
                    </li>
                    <li className="nav-item pe-5">
                    <a className="nav-link menu-style" href="/">Reviews</a>
                    </li>
                    <li className="nav-item pe-5">
                    <a className="nav-link menu-style" href="/">Contact Us</a>
                    </li>
                    <li className="nav-item pe-5">
                    <a className="nav-link menu-style" href="/login">Log In</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;