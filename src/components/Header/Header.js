import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> <a href="tel:+91 9988776655">+91 9988776655</a>
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="https://twitter.com/" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="https://www.facebook.com/" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="https://www.linkedin.com/" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <NavLink exact to={"/"}>
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </NavLink>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <NavLink className="nav-link scrollto" exact to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" exact to={"/departments"}>Departments</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" exact to={"/doctors"}>Doctor</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" exact to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" exact to={"/contact"}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" exact to={"/counter"}>Counter</NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink to={"/bookappointment"} className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Make Appointment</span>
                    </NavLink>
                    <NavLink to={"/login"} className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                    </NavLink>
                </div>
            </header>
        </div>
    );
}

export default Header;