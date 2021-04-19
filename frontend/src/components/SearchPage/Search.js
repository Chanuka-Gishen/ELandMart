import React, { Component } from "react";
import NavigationBar from "../commonComponents/NavigationBar";
export default class FeaturesPage extends Component {
  render() {
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

          <div class="tab-content">
            <div class="tab-pane active" id="home">
              <iframe
                src="http://www.ikman.lk/"
                height="500px"
                width="100%"
              ></iframe>
            </div>
            <div class="tab-pane active" id="profile">
              <iframe
                src="http://www.google.lk/"
                height="500px"
                width="100%"
              ></iframe>
            </div>
            <div class="tab-pane" id="messages">
              <iframe
                src="http://news.sky.com/"
                height="500px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
