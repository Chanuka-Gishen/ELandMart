import React, { Component , useEffect, useState} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import logo from "../../assets/loginPageAssets/img/logo.png";
import "../../assets/loginPageAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form-1.css";
import "../../assets/loginPageAssets/css/styles.css";
import "react-phone-number-input/style.css";


import "react-datepicker/dist/react-datepicker.css";
export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    save: "",
    phoneNumber:"",
    startDate:"",
    age:"",
    email:"",
    password:"",
    name:props.name,
};

}



  render() {
    return (
      <div>
       <div
          style={{
            marginTop: "8.9%",
            marginRight: "-12%",
            marginLeft: "-12%",
            backgroundColor: "white",
          }}
        >

<h1>Size of the land: {this.props.size} perches</h1>
<h1>Land type: {this.props.type} </h1>
<h1>Distance to Main Road: {this.props.distance} metres </h1>
<h1>Location: {this.props.location} </h1>
<h1>Predicted Value:  {this.props.predicteds} </h1>
        </div>
      
      </div>
    );
  }
}
