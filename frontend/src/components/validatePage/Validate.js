import React, { Component } from "react";
import lanes from "../../assets/jsonFiles/lanes.json";
import "../../assets/validatePageAssets/Validate.css";
import NavigationBar from "../commonComponents/NavigationBar";
import ResultPage from "../results/ResultPage";
import HeroSection from "../homePage/HeroSection/HeroSection";
import Cards from "../homePage/Cards/Cards";
import { Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import axios from "axios";
import Footer from "../commonComponents/Footer";

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      size: "",
      type: "",
      distanceToRoad: "",
      lane: "",
      year: "",
      status: true,
      data: [],
    };
    this.setSizeOfLand = this.setSizeOfLand.bind(this);
    this.setLandType = this.setLandType.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.setLane = this.setLane.bind(this);
    this.setYear = this.setYear.bind(this);
    this.Loader = this.Loader.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  setSizeOfLand(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ size: event.target.value });
    }
  }
  setLandType(event) {
    this.setState({ type: event.target.value });
  }
  setYear(event) {
    this.setYear({ year: event.target.value });
  }
  setStatus() {
    this.setState({ status: true });
  }
  setDistance(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      this.setState({ distanceToRoad: event.target.value });
    }
  }
  setLane(event) {
    this.setState({ lane: event.target.value });
  }

  Loader(event) {
    if (
      this.state.size === "" ||
      this.state.type === "" ||
      this.state.distanceToRoad === ""
    ) {
      alert("Fill all fields!");
    } else {
      fetch("https://e-landmart-api.herokuapp.com/valuate/export_csv/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          this.state.distanceToRoad,
          this.state.size,
          "2020",
        ]),
      });
      fetch("https://e-landmart-api.herokuapp.com/valuate/get_valuate_inputs/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([this.state.distanceToRoad, this.size, "2020"]),
      });
      const predicted_value = axios.get("https://e-landmart-api.herokuapp.com/valuate/give_predictions/");
      fetch("https://e-landmart-api.herokuapp.com/valuate/get_valuate_inputs/", {
        method:"POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'size': this.state.size,
            'land_type': this.state.type,
            'distance_to_town': this.state.distanceToRoad,
            'calculate_year': this.state.year,
            'lane' : this.state.lane,
            'predicted_value' : this.predicted_value
        }),
      });

      render(
        <ResultPage
          size={this.state.size}
          type={this.state.type}
          distance={this.state.distanceToRoad}
          lane={this.state.Lanesnames}
        />
      );
      this.setState({ status: false });
    }
  }

  dataEnter(event) {}

  render() {
    const isTrue = this.state.status;
    let renderer;
    if (isTrue) {
      renderer = (
        <div
          style={{
            marginTop: "13%",
            marginRight: "-12%",
            marginLeft: "-12%",
            backgroundColor: "white",
          }}
        >
          <h1>Land Value Calculation</h1><br></br>
          <p style={{marginRight: "-12%",
            marginLeft: "12%",}}>Please enter your Land details to validate</p>
          <hr />
          <table style={{ width: "80%",marginRight: "-12%",
            marginLeft: "12%", }}>
            <tr>
              <td>
                <label for="landSize">
                  {" "}
                  <b>Size Of the Land</b>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter the size in Perches"
                  name="size"
                  id="size"
                  value={this.state.size}
                  required
                  onChange={this.setSizeOfLand}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="landType">
                  {" "}
                  <b>Land Type</b>
                </label>
              </td>
              <td>
              <select>
                  <option selected disabled="true">
                    ---Select Land Type---
                  </option>
                 <option>Bare Land</option>
                 <option>Urban/Built-up Land</option>
                 <option>Wetland</option>
                 <option>Agricultural Land</option>
                  onChange={this.setLane}
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label for="distanceToRoad">
                  {" "}
                  <b>Distance To The Main Road</b>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter the distence in meters"
                  name="DistanceToRoad"
                  id="distance"
                  value={this.state.distanceToRoad}
                  required
                  onChange={this.setDistance}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="year">
                  {" "}
                  <b>Year</b>
                </label>
              </td>
              <td>
                {" "}
                <input
                  type="int"
                  placeholder="Enter The Predict Year"
                  name="year"
                  id="year"
                  required
                  value={this.state.year}
                  onChange={this.setYear}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="lane">
                  {" "}
                  <b>Lane</b>
                </label>
              </td>
              <td>
                <select>
                  <option selected disabled="true">
                    ---Select Lane---
                  </option>
                  {lanes.Lanesnames.map((result) => (
                    <option>{result.lane}</option>
                  ))}
                  onChange={this.setLane}
                </select>
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <button type="submit" class="validatebtn" onClick={this.Loader}>
                  Validate
                </button>
              </td>
            </tr>
          </table>
          <p>Price predicting limited Galle Area.........</p>
        </div>
      );
    }

    return (
      <div style={{ background: "white" }}>
        <NavigationBar />
        {renderer}

      </div>
    );
  }
}
