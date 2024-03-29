import React, { Component , useEffect, useState} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import logo1 from "../../assets/loginPageAssets/img/logo1.png";
import "../../assets/loginPageAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form-1.css";
import "../../assets/loginPageAssets/css/styles.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import YearPicker from "react-year-picker";

import "react-datepicker/dist/react-datepicker.css";
import Footer from "../commonComponents/Footer";
export default class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      save: "",
      phoneNumber:"",
      startDate:"",
      age:"",
      email:"",
      password:"",
      name:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.setage=this.setage.bind(this);
    this.setName=this.setName.bind(this);
    this.setPassword=this.setPassword.bind(this);
    this.setEmail=this.setEmail.bind(this);
  }
  handleChange(event) {   
      this.setState({phoneNumber: event}); 
  };
  setStartDate(event) {   
      this.setState({startDate: event}); 
  };
  setName(event) {
      this.setState({name: event.target.value}); 
  }
  setPassword(event) {
      this.setState({password: event.target.value}); 
  }
  setEmail(event) {
    this.setState({email: event.target.value}); 
  }

  //use set age method to caculate age
  setage() {
  
    if(this.state.phoneNumber==="" || this.state.startDate==="" || this.state.email==="" || this.state.password==="" || this.state.name==="" ){
      alert("Please fill all the fields")
    }else{
      let thisYear = parseInt(new Date().getFullYear());
      let ageInt=parseInt(this.state.startDate);
      let ageCal=thisYear-ageInt;
      this.setState({age:ageCal})
      console.log(ageCal);

      console.log(this.state.name, this.state.email, this.state.password, this.state.phoneNumber)

      //api call hear after validating all the data
      fetch("https://e-landmart-api.herokuapp.com/user/addnewuser/",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            user_name:this.state.name,
            user_email:this.state.email,
            user_password:this.state.password,
            user_mobileNo:this.state.phoneNumber

        })
      })
      .then(res=>res.json())
      .then((result)=>{
          alert(result);
      },
      (error)=>{
          alert("failed");
      });
    }
  };




  render() {
    return (
      <div  id="LoginDiv">
        <NavigationBar />
        <div>
          <form
            id="form"
            style={{
              fontFamily: "Quicksand, sans-serif",
              backgroundColor: "rgba(44,40,52,0.73)",
              width: "320px",
              padding: "40px",
            }}
          >
            <h1 id="head" style={{ color: "rgb(193,166,83)" }}>
              Login to{" "}
            </h1>
            <h3 id="head" style={{ color: "rgb(193,166,83)" }}>
              -E-Land-Mart-{" "}
            </h3>
            <div>
              <img
                className="rounded img-fluid pulse animated"
                id="image"
                style={{ width: "auto", height: "auto" }}
                src={logo1}
                alt="Logo"
              />
              
            </div>
            <div className="form-group">
              <input
                className="form-control"
                id="formum"
                placeholder="Name"
                // value={this.state.name}
                onChange={this.setName} 
              />
              </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                id="formum"
                placeholder="Email"
                // value={this.state.email}
                onChange={this.setEmail} 
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                id="formum2"
                placeholder="Password" 
                // value={this.state.password}
                onChange={this.setPassword} 
                
              />
            </div>
            <div className="form-group">
              <PhoneInput
              country="US"
                className="form-control"
                placeholder="Enter phone number"
                // value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>

            <div>
            <YearPicker  
            selected={this.state.startDate} 
            onChange={date => this.setStartDate(date)} 
            />
            </div>
            
            <div className="form-group" />
            <button
              className="btn btn-light"
              id="butonas"
              style={{
                width: "100%",
                height: "100%",
                marginBottom: "10px",
                backgroundColor: "rgb(106,176,209)",
              }}
              type="button"
              onClick={this.setage}
            >
              Sign Up
            </button>
            < a href="Login">Already have a Account?</a>
          </form>
        </div>

      </div>
    );
  }
}
