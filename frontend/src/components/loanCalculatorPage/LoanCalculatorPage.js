import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/loanCalculatorAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/loanCalculatorAssets/bootstrap/js/bootstrap.min.js";
import "../../assets/loanCalculatorAssets/css/styles.css";
import "../../assets/loanCalculatorAssets/fonts/font-awesome.min.css";
import "../../assets/loanCalculatorAssets/js/jquery.min";
export default class LoanCalculatorPage extends Component{

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:8080/api")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div style={{background:'white'}}>
                <NavigationBar/>
                <body>
            '    <form class="bootstrap-form-with-validation">'+
                        <h2 class="text-center">Get Start with the Loan Calculator</h2>
                <div class="form-group"><label for="text-input"><b> Price of the Land</b></label><input class="form-control" type="text" id="text-input" name="text-input"></input></div>
                <div class="form-group"><label for="password-input"><b>Number of Installments</b></label><input class="form-control" type="password" id="password-input" name="password-input"></input></div>
                <div class="form-group"><label for="email-input"><b>Interest Rate (%)</b></label><input class="form-control" type="email" id="email-input" name="email-input"></input></div>
                <div class="form-group"><label for="textarea-input"><b>Property Tax</b></label><textarea class="form-control" id="textarea-input" name="textarea"></textarea></div>

                <div className="form-group"><label>Payment Frequency</label></div>
                                <div className="form-group">
                                    <div className="form-check"><input type="radio" value="Weekly" name="gender" /> Weekly</div>
                                    <div className="form-check"><input type="radio" value="Fortnightly" name="gender" /> Fortnightly</div>
                                    <div className="form-check"><input type="radio" value="Monthly" name="gender" /> Monthly</div>
                                </div>

                <div className="form-group">
                                        <button className="btn btn-primary" type="submit">Calculate</button>
                                    </div>
            </form>
                </body>
            </div>
        );
    }

}