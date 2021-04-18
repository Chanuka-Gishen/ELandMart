import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/aboutUsAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/aboutUsAssets/css/styles.css";
// import "../../assets/aboutUsAssets/fonts/font-awesome.min.css";
import "../../assets/aboutUsAssets/css/Team-Boxed.css";
import Avishka from "../../assets/aboutUsAssets/img/Avishka.jpeg";
import Damith from "../../assets/aboutUsAssets/img/Damith.jpeg";
import Hansaka from "../../assets/aboutUsAssets/img/Hansaka.jpeg";
import Chanuka from "../../assets/aboutUsAssets/img/Chanuka.jpeg";
import Charith from "../../assets/aboutUsAssets/img/Charith.jpeg";
import Kasun from "../../assets/aboutUsAssets/img/Kasun.jpeg";
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
                                             src={Chanuka} alt={""}/>

                                        <h3 className="name"style={{color:'white'}}>
                                            <b>Chanuka Mendis</b>
                                        </h3>
                                        <p className="title"style={{color:"#c7cdd6"}}>
                                            <i>Backend Developer</i>
                                        </p>
                                        <p className="description"style={{color:"#c7cdd6"}}>
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
                                             src={Charith} alt={""}/>
                                        <h3 className="name"><b>Charith Wellala</b></h3>
                                        <p className="title">Frontend Developer</p>
                                        <p className="description" style={{color:"#c7cdd6"}}>Aenean tortor est, vulputate quis leo in, vehicula
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
                                        src={Avishka} alt={""}/>
                                        <h3 className="name">
                                            <b>Avishka Lakshan</b>
                                        </h3>
                                        <p className="title">
                                            Frontend Developer
                                        </p>
                                        <p className="description"style={{color:"#c7cdd6"}}>
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
                                             src={Damith} alt={""}/>

                                        <h3 className="name">
                                            <b>Tharindu Damith</b>
                                        </h3>
                                        <p className="title">
                                            Backend Developer
                                        </p>
                                        <p className="description">
                                            Aenean tortor est, vulputate quis leo in, vehicula
                                            rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                                            est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper
                                            massa.
                                        </p>
                            
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                             src={Hansaka} alt={""}/>
                                        <h3 className="name"><b>Hansaka Konara</b></h3>
                                        <p className="title">Frontend Developer</p>
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
                                             src={Kasun} alt={""}/>
                                        <h3 className="name">
                                            <b>Kasun</b>
                                        </h3>
                                        <p className="title">
                                            Backend Developer
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
