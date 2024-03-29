import React, { Component, useState, useEffect } from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import axios from "axios";
import Footer from "../commonComponents/Footer";

const FeaturesPage = () =>  {
    const [lankaPropertyUrl, getLankaUrl] = useState([])
    const [ceylonPropertyUrl, getCeylonUrl] = useState([])
    const [ikmanlkUrl, getIkmanlkUrl] = useState([])

    const fetchData = () => {
      const getFisrtUrl = axios.get("https://e-landmart-api.herokuapp.com/weburl/lankaProperty/")
      const getSecondUrl = axios.get("https://e-landmart-api.herokuapp.com/weburl/ceylonLanka/")
      const getThirdUrl = axios.get("https://e-landmart-api.herokuapp.com/weburl/ikmanlk/")
      axios.all([getFisrtUrl, getSecondUrl, getThirdUrl]).then(
        axios.spread((...allData) => {
          const stringLankaPropertyUrl = allData[0].config.urls
          const stringCeylonPropertyUrl = allData[1].config.urls
          const stringIkmanaLkUrl = allData[2].config.urls

          getLankaUrl(stringLankaPropertyUrl)
          getCeylonUrl(stringCeylonPropertyUrl)
          getIkmanlkUrl(stringIkmanaLkUrl)
          
        }) 
      )
    }

    useEffect(() => {
      fetchData()
    }, [])

    return (
      <div>
        <NavigationBar />
        <div style={{marginTop:"15%"}}>

          <div class="tab-content" >
            <div class="tab-pane active" id="home">
              <iframe class= "responsive-iframe"
                id="lankaPro"
                src= "https://www.lankapropertyweb.com/"
                height="500px"
                width="100%"
              ></iframe>
            </div>
            <div class="tab-pane active" id="profile">
              <iframe
                src="https://ceylonproperty.lk/"
                height="500px"
                width="100%"
              ></iframe>
            </div>
            <div class="tab-pane active" id="messages">
              <iframe
                src="https://ikman.lk/"
                height="500px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
          <div style={{marginRight:'-12%',marginLeft:'-12%',marginBottom:'-15%'}}>
              <Footer/>
          </div>
      </div>
    );
}
export default FeaturesPage;
