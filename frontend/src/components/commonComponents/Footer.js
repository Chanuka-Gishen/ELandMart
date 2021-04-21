import React, {Component} from "react";
import '../../assets/footerAssets/bootstrap/css/bootstrap.min.css';
import '../../assets/footerAssets/fonts/font-awesome.min.css';
import '../../assets/footerAssets/css/Bold-BS4-Footer-Big-Logo.css';
import '../../assets/footerAssets/css/styles.css';
export default class Footer extends Component{
    render() {
        return(
            <div>
                <footer id="myFooter">
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-12 col-sm-6 col-md-3">
                                <h1
                                    className="logo"
                                    style={{marginTop:'30px'}}>
                                    <a href="#">LOGO</a>
                                </h1>
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <h5>Get started</h5>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Downloads</a></li>
                                    <br></br>
                                    <li><a href="#">Sign Up</a></li>
                                    <li><a href="#">Other Links</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <h5>
                                    Our Company
                                </h5>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Company Information</a></li>
                                    <br></br>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-2">
                                <h5>Support</h5>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Help Desk</a></li>
                                    <br></br>
                                    <li><a href="#">Forums</a></li>
                                    <li><a href="#">External Links</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 social-networks">
                                <div></div>
                                <a
                                    className="facebook"
                                    href="#">
                                    <i className="fa fa-facebook"/>
                                </a>
                                <a
                                    className="twitter"
                                    href="#">
                                    <i className="fa fa-twitter"/>
                                </a>
                                <a
                                    className="google"
                                    href="#">
                                    <i className="fa fa-google-plus"/>
                                </a>
                                <a
                                    className="linkedin"
                                    href="#">
                                    <i className="fa fa-linkedin"/>
                                </a>
                                <button
                                    className="btn btn-primary"
                                    style={{marginTop:'20px'}}
                                    type="button">
                                        Contact us
                                </button>
                            </div>
                        </div>
                        <div className="row footer-copyright">
                            <div className="col">
                                <p></p>
                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        );
    }
}
