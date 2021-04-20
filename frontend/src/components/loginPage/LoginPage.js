import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import logo1 from "../../assets/loginPageAssets/img/logo1.png";
import "../../assets/loginPageAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form-1.css";
import "../../assets/loginPageAssets/css/styles.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
// import "https://fonts.googleapis.com/css?family=Quicksand";
export default class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = { save: "" };

    }
    callApi(){
        const log = fetch("/save").then(res => res.text())
        .then(res => this.setState({ save: res }));
    }
    render() {
        return(
            <div id="LoginDiv" >
                <NavigationBar/>
                <div>
                    <form id="form"
                          style={{
                              fontFamily: 'Quicksand, sans-serif',
                              backgroundColor: 'rgba(44,40,52,0.73)',
                              width: '320px',
                              padding: '40px',

                          }}>
                        <h1 id="head" style={{color: 'rgb(193,166,83)'}}>Login to </h1>
                        <h3 id="head" style={{color: 'rgb(193,166,83)'}}>-E-Land-Mart- </h3>
                        <div>
                            <img className="rounded img-fluid pulse animated"
                                 id="image"
                                 style={{width: 'auto', height: 'auto'}}
                                 src={logo1} alt="Logo"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" id="formum"
                                   placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" id="formum2"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group"/>
                        <button className="btn btn-light" id="butonas"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    marginBottom: '10px',
                                    backgroundColor: 'rgb(106,176,209)'
                                }}
                                type="button">LogIn
                        </button>
                        <a id="linkas"
                           style={{
                               fontSize: '12px',
                               margin: 'auto',
                               paddingLeft: 0,
                               paddingRight: 0,
                               color: 'rgb(177,151,70)'
                           }}
                           href="#">Forgot your e mail or password?</a>
                    </form>
                </div>
            </div>

        );
    }
}
