import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/aboutUsAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/aboutUsAssets/css/styles.css";
// import "../../assets/aboutUsAssets/fonts/font-awesome.min.css";
import "../../assets/aboutUsAssets/css/Team-Boxed.css";
import player from "../../assets/aboutUsAssets/img/player.jpg";
import player2 from "../../assets/aboutUsAssets/img/player2.png";
import player3 from "../../assets/aboutUsAssets/img/player3.jpg";
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

                                        <img className="rounded-circle"
                                             id="image"
                                             src={player} alt={""}/>

                                        <h3 className="name">
                                            Chanuka Mendis
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
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                             src={player2} alt={""}/>
                                        <h3 className="name">Charith Wellala</h3>
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
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                        src={player3} alt={""}/>
                                        <h3 className="name">
                                            Avishka
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
