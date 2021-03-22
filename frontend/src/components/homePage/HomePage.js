import React, {Component} from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import '../../App.css';
import Cards from '../Cards/Cards';
import HeroSection from "../HeroSection/HeroSection";
// import Footer from '../Footer';

function Home() {
    return (
      <>
      <div>
                <NavigationBar/>
              
                </div>
            
        <HeroSection />
        { <Cards />
        // <Footer />
        }
            
                    <p>
                        Kazun, Charith & Avishka discuss add get final design idea of this page.
                        Complete this task first of all..fdfdf..

                    </p>
              
            </>
        );
    }
    export default Home;
