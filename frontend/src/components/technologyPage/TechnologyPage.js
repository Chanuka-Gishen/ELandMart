import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import Footer from "../commonComponents/Footer";
import "../../assets/aboutUsAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/aboutUsAssets/css/styles.css";
import "../../assets/aboutUsAssets/css/Team-Boxed.css";
import reactLogo from '../../assets/technologyPageAssets/img/react.png';
import djangoLogo from '../../assets/technologyPageAssets/img/django.png';
import pythonLogo from '../../assets/technologyPageAssets/img/pythonlogo.png';
import sqlLogo from '../../assets/technologyPageAssets/img/sqlLight.jpg';
import cssLogo from '../../assets/technologyPageAssets/img/CSS.png';
import jsLogo from '../../assets/technologyPageAssets/img/javaScript.png';

export default class TechnologyPage extends Component{
    render() {
        return(
            <div>
                <div>
                    <div>
                        <NavigationBar/>
                        <div className="container" style={{marginTop: '8%',marginBottom:'8%'}}>
                            <div className="intro" >
                                <br/>

                            </div>
                            <div className="row people" style={{marginTop: '8%'}}>
                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">

                                        <img className="rounded-circle"
                                             id="image"
                                             src={reactLogo} alt={""}/>
                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                             src={djangoLogo} alt={""}/>
                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-4 item">
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                             src={pythonLogo} alt={""}/>

                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-4 item" style={{marginTop: '8%'}}>
                                    <div className="box">

                                        <img className="rounded-circle"
                                             id="image"
                                             src={sqlLogo} alt={""}/>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 item" style={{marginTop: '8%'}}>
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                             src={cssLogo} alt={""}/>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4 item" style={{marginTop: '8%'}}>
                                    <div className="box">
                                        <img className="rounded-circle"
                                             id="image"
                                             src={jsLogo} alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginRight:'-12%',marginLeft:'-12%',marginBottom:'-15%'}}>
                    <Footer/>
                </div>
            </div>

        );
    }
}
