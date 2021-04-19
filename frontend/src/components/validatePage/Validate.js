import React, { Component } from "react";
import "../../assets/validatePageAssets/Validate.css";
import NavigationBar from "../commonComponents/NavigationBar";
import ResultPage from "../results/ResultPage";
import HeroSection from "../homePage/HeroSection/HeroSection";
import Cards from "../homePage/Cards/Cards";
import { Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      size: "",
      type: "",
      distanceToRoad: "",
      location: "",
      status: true,
    };
    this.setSizeOfLand = this.setSizeOfLand.bind(this);
    this.setLandType = this.setLandType.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.setLocation = this.setLocation.bind(this);
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
  setLocation(event) {
    this.setState({ location: event.target.value });
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

  Loader(event) {
    if (
      this.state.size === "" ||
      this.state.type === "" ||
      this.state.distanceToRoad === "" ||
      this.state.location === ""
    ) {
      alert("Fill all fields!");
    } else {
      render(
        <ResultPage
          size={this.state.size}
          type={this.state.type}
          distance={this.state.distanceToRoad}
          location={this.state.location}
        />
      );
      this.setState({ status: false });
    }
  }

  dataEnter(event) {}

  callAPI() {
    fetch("/api")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const isTrue = this.state.status;
    let renderer;
    if (isTrue) {
      renderer = (
        <div
          style={{
            marginTop: "8.9%",
            marginRight: "-12%",
            marginLeft: "-12%",
            backgroundColor: "white",
          }}
        >
          <form>
            <div class="container">
              <h1>Land Value Calculation</h1>
              <p>Please enter your Land details to validate</p>
              <hr />
              <label for="landSize">
                {" "}
                <b>Size Of the Land</b>
              </label>
              <input
                type="int"
                placeholder="Enter the size in Perches"
                name="size"
                id="size"
                value={this.state.size}
                required
                onChange={this.setSizeOfLand}
              />

              <label for="landType">
                {" "}
                <b>Land Type</b>
              </label>
              <input
                type="text"
                name="type"
                id="landType"
                required
                onChange={this.setLandType}
              />
              <label for="distanceToRoad">
                {" "}
                <b>Distance To The Main Road</b>
              </label>
              <input
                type="text"
                placeholder="Enter the distence in meters"
                name="DistanceToRoad"
                id="distance"
                value={this.state.distanceToRoad}
                required
                onChange={this.setDistance}
              />
              <label for="landLocation">
                {" "}
                <b>Location</b>
              </label>
              <input
                type="text"
                name="Location"
                id="location"
                required
                onChange={this.setLocation}
              />

              <button type="submit" class="validatebtn" onClick={this.Loader}>
                Validate
              </button>

              <p className="App-intro">{this.state.location}</p>
            </div>
          </form>
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
