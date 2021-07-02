import React, {Component} from "react";
import logo1 from '../../assets/footerAssets/images/logo1.png';
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
                            <img className="rounded img-fluid pulse animated"
                                 id="image"
                                 style={{width: 'auto', height: 'auto'}}
                                 src={logo1} alt="Logo"/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <h5>Get started</h5>
                                <ul>
                                    <li><a href="homePage">Home</a></li>
                                    <li><a href="validate">Price Prediction</a></li>
                                    <br></br>
                                    <li><a href="signInPage">Sign Up</a></li>
                                    <li><a href="loanCalculatorPage">Loan Calculator</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <h5>
                                    Our Company
                                </h5>
                                <ul>
                                    <li><a href="aboutUs">About Us</a></li>
                                   
                                    <br></br>
                                    <li><a href="contactUs">Contacts</a></li>
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
                                
                            </div>
                        </div>
                        
                    </div>

                </footer>

            </div>
        );
    }
}
