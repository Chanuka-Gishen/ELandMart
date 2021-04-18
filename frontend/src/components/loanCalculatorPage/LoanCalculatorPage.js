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
            <div class =" background" >
                <NavigationBar/>
                <body>
            '    <form class="bootstrap-form-with-validation">
                        <h2 class="text-center">Get Start with the Loan Calculator</h2>
                <div class="form-group"><label for="number"><b> Price of the Land</b></label><input class="form-control" type="number"  price="text-Input"></input></div>
                <div class="form-group"><label for="number"><b>Number of Installments</b></label><input class="form-control" type="number" installments="text-Input"></input></div>
                <div class="form-group"><label for="number"><b>Interest Rate (%)</b></label><input class="form-control" type="number"  rate="text-Input"></input></div>
                <div class="form-group"><label for="number"><b>Property Tax</b></label><input class="form-control" type="number"  tax="text-Input"></input></div>

                <div className="form-group"><label>Payment Frequency</label></div>
                                <div className="form-group">
                                    <div className="form-check"><input type="radio" value="Weekly" name="gender" /> Weekly</div>
                                    <div className="form-check"><input type="radio" value="Fortnightly" name="gender" /> Fortnightly</div>
                                    <div className="form-check"><input type="radio" value="Monthly" name="gender" /> Monthly</div>
                                </div>

                <div className="form-group">
                                        <button className="btn btn-primary" type="submit">Calculate</button>
                                    </div>

                <div class="form-group"><label for="number"><b>Loan Amount</b></label><input class="form-control" type="number"  value="text-Input"></input></div>
=======
                <div class="form-group"><label for="number"><b>Loan amount</b></label><input class="form-control" type="number"  value="text-Input"></input></div>


            </form>
                </body>
            </div>
        );
    }

}