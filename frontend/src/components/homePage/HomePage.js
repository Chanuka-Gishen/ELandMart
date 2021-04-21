import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import '../../App.css';
import Cards from './Cards/Cards';
import HeroSection from "./HeroSection/HeroSection";
import Footer from "../commonComponents/Footer";

export default class HomePage extends Component{
    render() {
        return(
            <div style={{zIndex:'initial'}}>
                <NavigationBar/>
                <div style={{marginRight:'-12%',marginLeft:'-12%'}}>
                    <HeroSection/>
                        <Cards/>
                </div>
                <div style={{marginRight:'-12%',marginLeft:'-12%',marginBottom:'-15%'}}>
                    <Footer/>
                </div>
            </div>
        )
    }
}

