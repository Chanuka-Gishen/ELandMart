import React, {Component} from "react";
import "./Validate.css";
export default class Validate extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <form >
                    <div class="container">
                       <h1>Land Value Calculation</h1> 
                       <p>Please enter your Land details to validate</p>
                      <hr/>
                      <label for ="landSize"> <b>Size Of the Land</b></label>
                      <input type="int" placeholder="Enter the size in Perches" name="size" id="size" required/>

                      <label for ="landType"> <b>Land Type</b></label>
                      <input type="text"  name="type" id="landType" required/>

                      <label for ="distanceToRoad"> <b>Distance To The Main Road</b></label>
                      <input type="int" placeholder="Enter the distence in meters" name="DistanceToRoad" id="distance" required/>

                      <label for ="landLocation"> <b>Location</b></label>
                      <input type="text"  name="Location" id="location" required/>

                      <button type="submit" class="validatebtn">Validate</button>

                      <p className="App-intro">;{this.state.apiResponse}</p>


                    </div>

                </form>
            </div>
        );
    }
}
