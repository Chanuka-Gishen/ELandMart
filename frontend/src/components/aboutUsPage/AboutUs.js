import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/aboutUsAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/aboutUsAssets/css/styles.css";
// import "../../assets/aboutUsAssets/fonts/font-awesome.min.css";
import "../../assets/aboutUsAssets/css/Team-Boxed.css";
export default class AboutUs extends Component{
    render() {
        return(
            <div>
                <div>
                    {/*<NavigationBar/>*/}
                    <div>
                        <NavigationBar/>
                        <div className="container">
                            <div className="intro" style={{top:'10'}}>
                                <h2 className="text-center">ABOUT US</h2>
                                <p className="text-center">Bla bla bla</p>
                            </div>
                            <div className="row people">
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        {/*<img className="rounded-circle"*/}
                                        {/*     src="assets/img/1.jpg">*/}
                                        <h3 className="name">
                                            Ben Johnson
                                        </h3>
                                        <p className="title">
                                            Musician
                                        </p>
                                        <p className="description">
                                            Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                                        <div className="social">
                                            <a href="#">
                                                <i className="fa fa-facebook-official"/>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </div>
                                    {/*</img>*/}
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        {/*<img className="rounded-circle"*/}
                                        {/*     src="assets/img/2.jpg">*/}
                                        <h3 className="name">Emily Clark</h3>
                                        <p className="title">Artist</p>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                                        <div className="social">
                                            <a href="#">
                                                <i className="fa fa-facebook-official"/>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </div>
                                    {/*</img>*/}
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        {/*<img className="rounded-circle"*/}
                                        {/*     src="assets/img/3.jpg">*/}
                                        <h3 className="name">
                                            Carl Kent
                                        </h3>
                                        <p className="title">
                                            Stylist
                                        </p>
                                        <p className="description">
                                            Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                                        <div className="social">
                                            <a href="#">
                                                <i className="fa fa-facebook-official"/>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </div>
                                    {/*</img>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
