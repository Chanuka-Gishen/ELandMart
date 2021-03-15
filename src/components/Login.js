import React, {Component} from "react";
import logo from "../assets/images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/animate.min.css";
import "../assets/css/OcOrato---Login-form.css";
import "../assets/css/OcOrato---Login-form-1.css";
import AlertAnimation from "./animations/AlertAnimation";

export default class Login extends Component {
    render() {
        return (
            <div>
                <form id="form"
                      style={{
                          fontFamily: 'Quicksand, sans-serif',
                          backgroundColor: 'rgba(44,40,52,0.73)',
                          width: '320px',
                          padding: '40px'
                      }}>
                    <h1 id="head" style={{color: 'rgb(193,166,83)'}}>Login to </h1>
                    <h3 id="head" style={{color: 'rgb(193,166,83)'}}>-E-Land-Mart- </h3>
                    <div>
                        <img className="rounded img-fluid pulse animated"
                             id="image"
                             style={{width: 'auto', height: 'auto'}}
                             src={logo} alt="Logo"/>
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
                            type="button">Button
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
        );
    }
}
