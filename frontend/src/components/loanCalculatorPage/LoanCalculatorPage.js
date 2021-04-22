
import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/loanCalculatorAssets/bootstrap/css/bootstrap.min.css";
import "../../assets/loanCalculatorAssets/bootstrap/js/bootstrap.min.js";
import "../../assets/loanCalculatorAssets/css/styles.css";
import "../../assets/loanCalculatorAssets/fonts/font-awesome.min.css";
import "../../assets/loanCalculatorAssets/js/jquery.min";
import Footer from "../commonComponents/Footer";
export default class LoanCalculatorPage extends Component{
    
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("https://e-landmart-api.herokuapp.com/user/loancal/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }
    

    render() {
       
        function  computeLoan(e) 
        {
            e.preventDefault();
            var price = document.getElementById('price').value;
            var rate =document.getElementById('rate').value; 
            var installments=document.getElementById('installments').value;
            var interest =(price*(rate*0.1))/installments;
            var loanAmount=((price/installments)+interest).toFixed(2);
            loanAmount = loanAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('payment').innerHTML = "Monthly Payment = Rs. "+loanAmount;
           
        }     
        return (

            <div class =" background" >
                <NavigationBar/>
                <div>
                <body>
                <form class="bootstrap-form-with-validation">
                        <h2 class="text-center">Get Start with the Loan Calculator</h2>
                <div class="form-group"><label for="number"><b> Price of the Land</b></label>
                <input id="price" class="form-control" type="number"  price="text-Input"></input></div>

                <div class="form-group"><label for="number"><b>Number of Installments</b></label>
                <input id="installments" class="form-control" type="number" installments="text-Input"></input></div>

                <div class="form-group"><label for="number"><b>Interest Rate (%)</b></label>
                <input id="rate" class="form-control" type="number" min="0" max="100"    rate="text-Input"></input></div>
            
                <div class="form-group"><button class="btn btn-primary" onClick={computeLoan}>Calculate</button></div>
                <div class="form-group2"><h2 id="payment"></h2></div>

           
                

            
                <div style={{marginRight:'-12%',marginLeft:'-12%',marginBottom:'-15%'}}>
                    <Footer/>
                </div>
                </form>
          </body>
          </div>
          </div>


        );
    }

}
