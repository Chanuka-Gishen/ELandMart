import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import "../../assets/contactUs/bootstrap/css/bootstrap.min.css";
import "../../assets/contactUs/css/styles.css";
import "../../assets/contactUs/css/Contact-Form-Clean.css";
import Footer from "../commonComponents/Footer";

export default class AboutUs extends Component{
    render() {
        return(
            <div>
                        <NavigationBar/>
                        <head>
                            <title>Calculator</title>
                            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
                            <link rel="stylesheet" href="assets/css/Contact-Form-Clean.css"></link>
                            <link rel="stylesheet" href="assets/css/styles.css"></link>
                        </head>


                        <body>
                        <section class="contact-clean">
                            <form data-bss-recipient="f22cc37b1d646f7ea26f3e2de5ed9637">
                                <h2 class="text-center">Contact us</h2>
                                <div class="form-group"><input class="form-control" type="text" name="name" placeholder="Name" required=""></input></div>
                                    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" required=""></input></div>
                                <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="14" required=""></textarea></div>
                                <div class="form-group"><button class="btn btn-primary" type="submit">send </button></div>
                            </form>
                        </section>
                        <script src="assets/js/jquery.min.js"></script>
                        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
                        <script src="assets/js/smart-forms.min.js"></script>
                        </body>
                <div style={{marginRight:'-12%',marginLeft:'-12%',marginBottom:'-15%'}}>
                    <Footer/>
                </div>

                    </div>

        );
    }
}
