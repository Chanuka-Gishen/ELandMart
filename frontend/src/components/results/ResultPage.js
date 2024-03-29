import React, { Component, useEffect, useState } from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import logo from "../../assets/loginPageAssets/img/logo.png";
import "../../assets/loginPageAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form.css";
import "../../assets/loginPageAssets/css/OcOrato---Login-form-1.css";
import "../../assets/loginPageAssets/css/styles.css";
import "../../assets/resultsAssets/css/style.css";
import "react-phone-number-input/style.css";

import "react-datepicker/dist/react-datepicker.css";
export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      usage:"",
    };
  }

  callAPI() {
    fetch("https://e-landmart-api.herokuapp.com/valuate/give_predictions/")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
    fetch("https://e-landmart-api.herokuapp.com/valuate/generated_result/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          this.props.type,
          this.props.distance
        ]),
      }
    ).then((res) => res.text())
    .then((res) => this.setState({ usage: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <div
          style={{
            position: "relative",
            left: "28%",
            marginTop: "8.9%",
            marginRight: "-12%",
            marginLeft: "-12%",
            backgroundColor: "white",
            width: "70%",
            height: "70%",
          }}
        >
          <h1 class="text">Size of the land: {this.props.size} perches</h1>
          <h1 class="text">Land type: {this.props.type} </h1>
          <h1 class="text">Distance to Main Road: {this.props.distance} Kilometers{" "}</h1>
          <h1 class="text">Lane: {this.props.lane} </h1>
          <h1 class="text">Predict Year : {this.props.year}</h1>
          <h1 class="text">Predicted Value:  Rs.{this.state.apiResponse*this.props.size} </h1>
          <p>{this.state.usage}</p>
        </div>
      </div>
    );
  }
}