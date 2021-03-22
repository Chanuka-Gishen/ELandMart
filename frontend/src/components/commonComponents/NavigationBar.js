import React, { Component } from 'react';

import "./../../assets/navigationBarAssets/bootstrap/css/bootstrap.min.css";
import "./../../assets/navigationBarAssets/fonts/simple-line-icons.min.css";
import "./../../assets/navigationBarAssets/css/Advanced-NavBar---Multi-dropdown.css";
import "./../../assets/navigationBarAssets/css/styles.css";
import AlertAnimation from "./animations/AlertAnimation";
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    index;
    render() {
        return(
            <div className="header2 bg-success-gradiant" style={{marginRight:'0%',marginLeft:'0%'}}>
                <div className="">
                    <nav className="navbar navbar-expand-lg h2-nav">
                        <a className="navbar-brand" href="#">
                            <img
                            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/logos/white-logo.png"
                            alt="wrapkit"/>
                               {/* <AlertAnimation/>*/}
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#header2"
                            aria-controls="header2"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="icon-menu">
                            </span>
                        </button>
                        <div
                            className="collapse navbar-collapse hover-dropdown"
                            id="header2">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        href="#">
                                        <Link to="/homePage">
                                            Home
                                        </Link>

                                    </a>
                                </li>
                                <li className="nav-item dropdown position-relative">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        id="h2-dropdown"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">

                                            Features

                                        <i className="icon-arrow-down ml-1 font-12"/>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                    Discover Land
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                    Predict Land Value
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                    Loan Calculator
                                            </a>
                                        </li>
                                        <li className="divider" role="separator">
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#">
                                                    Value Added Services
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#">
                                        <Link to="/aboutUs">
                                            About Us
                                        </Link>

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#">
                                            Technologies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#">
                                            Site Map
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        href="#">
                                        <i className="icon-bubble"/>
                                            Need help?
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        href="#">
                                            Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="btn rounded-pill btn-dark py-2 px-4"
                                        href="#">
                                        Sign up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        );
    }
}
