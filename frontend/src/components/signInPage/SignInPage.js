import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/signInAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/signInAssets/css/styles.css";
import "../../assets/signInAssets/css/Pretty-Registration-Form.css";

export default class SignInPage extends Component{
    render() {
        return(
            <div>
                <NavigationBar/>
                <div>

                    <body>
                    <div className="row register-form">
                        <div className="col-md-8 offset-md-2">
                            <form className="custom-form">
                                <h1>Register Form</h1>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                                  htmlFor="name-input-field">Name </label>
                                    </div>
                                    <div className="col-sm-6 input-column"><input className="form-control"
                                                                                  type="text"></input></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                                  htmlFor="email-input-field">Email </label>
                                    </div>
                                    <div className="col-sm-6 input-column"><input className="form-control"
                                                                                  type="email"></input></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                                  htmlFor="pawssword-input-field">Password </label>
                                    </div>
                                    <div className="col-sm-6 input-column"><input className="form-control"
                                                                                  type="password"></input></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                                  htmlFor="repeat-pawssword-input-field">Repeat
                                        Password </label></div>
                                    <div className="col-sm-6 input-column"><input className="form-control"
                                                                                  type="password"></input></div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                                  htmlFor="dropdown-input-field">Dropdown </label>
                                    </div>
                                    <div className="col-sm-4 input-column">
                                        <div className="dropdown">
                                            <button className="btn btn-light dropdown-toggle" aria-expanded="false"
                                                    data-toggle="dropdown" type="button">Dropdown
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">First Item</a>
                                                <a className="dropdown-item" href="#">Second Item</a>
                                                <a className="dropdown-item" href="#">Third Item</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" >

                                </input><label
                                    className="form-check-label" htmlFor="formCheck-1">I\'ve read and accept the terms
                                    and conditions</label></div>




                                <button className="btn btn-light submit-button" type="button">Register</button>
                            </form>
                        </div>
                    </div>
                    </body>


                </div>
            </div>

        );
    }
}
