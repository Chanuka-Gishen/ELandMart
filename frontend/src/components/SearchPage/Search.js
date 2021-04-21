import React, { Component, useState, useEffect } from "react";
import NavigationBar from "../commonComponents/NavigationBar";
import axios from "axios";

const FeaturesPage = () =>  {
    const [lankaPropertyUrl, getLankaUrl] = useState([])
    const [ceylonPropertyUrl, getCeylonUrl] = useState([])
    const [ikmanlkUrl, getIkmanlkUrl] = useState([])

    const fetchData = () => {
      const getFisrtUrl = axios.get("http://127.0.0.1:8000/weburl/lankaProperty/")
      const getSecondUrl = axios.get("http://127.0.0.1:8000/weburl/ceylonLanka/")
      const getThirdUrl = axios.get("http://127.0.0.1:8000/weburl/ikmanlk/")
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
        <div>
          <ul class="nav nav-tabs" id="myTab">
            <li class="active">
              <a data-target="#home" data-toggle="tab">
                BBC
              </a>
            </li>
            <li>
              <a data-target="#profile" data-toggle="tab">
                CNN
              </a>
            </li>
            <li>
              <a data-target="#messages" data-toggle="tab">
                Sky news
              </a>
            </li>
          </ul>

          <div class="tab-content" >
            <div class="tab-pane active" id="home">
              <iframe class= "responsive-iframe"
                id="lankaPro"
                src= {getLankaUrl}
                height="500px"
                width="100%"
              ></iframe>
            </div>
            <div class="tab-pane active" id="profile">
              <iframe
                src={getCeylonUrl}
                height="500px"
                width="100%"
              ></iframe>
            </div>
            <div class="tab-pane active" id="messages">
              <iframe
                src={getIkmanlkUrl}
                height="500px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}
export default FeaturesPage;
