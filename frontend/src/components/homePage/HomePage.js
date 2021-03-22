import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from "../HeroSection/HeroSection";


function Home() {
    return (
      <>
      <div>
                <NavigationBar/>
              
                </div>
            <div>
        <HeroSection />
        </div>
        { <Cards />
        
        }
            
                    <p>
                        Kazun, Charith & Avishka discuss add get final design idea of this page.
                        Complete this task first of all..fdfdf..

                    </p>
              
            </>
        );
    }
    export default Home;
