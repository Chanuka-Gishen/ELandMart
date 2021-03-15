import React,{Component} from "react";
import logo from "../../assets/images/profile.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/styles.css";
import "../../assets/css/vertical-navbar-with-menu-and-social-menu.css";
import "../animations/AlertAnimation";
import AlertAnimation from "../animations/AlertAnimation";
export default class NavigationBar extends Component{

    render() {
        return (
            <div>
                <div className="col-lg-3 d-flex flex-column justify-content-between px-0"
                     id="header">
                    <nav className="navbar navbar-expand-lg navbar-light d-flex flex-column px-0">
                        <div id="m-navbar-brand"
                             className="text-center">
                            <a className="navbar-brand m-0 p-2"
                               href="assets/img/profile.jpg"
                               data-toggle="lightbox">
                                <div style={{height:'500%',width:'50%',marginLeft:'auto',marginRight:'auto'}}>
                                <AlertAnimation/>
                                </div>
                                    <h2 className="h5">
                                        -E-Land-Mart-
                                    </h2>
                                    <h1 className="h6">
                                        Team Algo Messiahs
                                    </h1>
                            </a>
                            <button className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div id="m-navbar-menu"
                             className="w-100">
                            <div className="collapse navbar-collapse"
                                 id="navbarSupportedContent">
                                <ul className="navbar-nav d-flex flex-column w-100">
                                    <li className="nav-item active">
                                        <a className="nav-link font-weight-bold"
                                           href="#">
                                            Home
                                        </a>
                                    </li>
                                    {/*<li className="nav-item active">*/}
                                    {/*    <a className="nav-link font-weight-bold"*/}
                                    {/*       href="#">*/}
                                    {/*        Facilities*/}

                                    {/*    <li className="nav-item">*/}
                                    {/*        <a className="nav-link font-weight-bold"*/}
                                    {/*           href="#">*/}
                                    {/*            Land Value Prediction*/}
                                    {/*        </a>*/}
                                    {/*    </li>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li class="dropdown show">
                                        <button  className="nav-item active"
                                                data-toggle="dropdown" type="button">

                                            <a className="nav-link font-weight-bold"
                                               href="#">
                                                Dropdown
                                            </a>
                                            <a className="dropdown-item" href="#">First Item</a><a
                                            className="dropdown-item" href="#">Second Item</a><a
                                            className="dropdown-item" href="#">Third Item</a>
                                        </button>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link font-weight-bold"
                                           href="#">
                                            User Profile
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link font-weight-bold"
                                           href="#">
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link font-weight-bold"
                                           href="#">
                                            Guide
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div>
            </div>
        );
    }
}
