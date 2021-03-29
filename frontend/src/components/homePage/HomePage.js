import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import '../../App.css';
import Cards from './Cards/Cards';
import HeroSection from "./HeroSection/HeroSection";

export default class HomePage extends Component{
    render() {
        return(
            <div style={{zIndex:'initial'}}>
                <NavigationBar/>
                <div style={{marginRight:'-12%',marginLeft:'-12%'}}>
                    <HeroSection/>
                        <Cards/>
                </div>
            </div>
        )
    }
}

