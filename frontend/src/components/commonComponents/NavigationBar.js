import React, { Component } from 'react';
import "./../../assets/navigationBarAssets/bootstrap/css/bootstrap.min.css";
import "./../../assets/navigationBarAssets/fonts/simple-line-icons.min.css";
import "./../../assets/navigationBarAssets/css/Advanced-NavBar---Multi-dropdown.css";
import "./../../assets/navigationBarAssets/css/styles.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/loginPageAssets/img/logo.png";
import HomePage from "../homePage/HomePage";

export default class NavigationBar extends Component {
    index;
    render() {
        return(
            <div className="header2 bg-success-gradiant" style={{marginRight:'0%',marginLeft:'0%'}}>
                <div className="">
                    <nav className="navbar navbar-expand-lg h2-nav">
                        <div
                            style={{width:'15%',
                                height:'auto',
                                marginRight:'-7%',
                                marginLeft:'-2%',
                                padding:'0',
                                position:'relative'}}>
                        <a className="navbar-brand" href="#">
                            <img className="rounded img-fluid pulse animated"
                                 id="image"
                                 src={logo} alt="Logo"/>
                        </a>
                        </div>
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
                                <li className="nav-item active" style={{zIndex:'3'}} >
                                    <a
                                        className="nav-link"
                                        href={'/'}>
                                        Home
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
                                                href={'/validate'}>
                                                    Predict Land Value
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href={'/LoanCalculatorPage'}>
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
                                        href={'/aboutUs'}>
                                            About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href={'#'}>
                                            Technologies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href={'/siteMap'}>
                                            Site Map
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        href={'/contactUs'}>
                                        <i className="icon-bubble"/>
                                            Contact Us
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        href={'/login'}>
                                            Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="btn rounded-pill btn-dark py-2 px-4"
                                        href={'/sign'}>
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
