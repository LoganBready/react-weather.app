import React, { Component } from "react";
import axios from "axios";
require("dotenv").config();
class ContainerOne extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      something: "",
    };
  }

  render() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude={part}&appid=3856ea6ad51822a0a42025c42da6f529`
          )
          .then((response) => {
            console.log(response.data);
            let currentWeather = response.data.current.temp;
            console.log(currentWeather);
          });
      });
    }
    return (
      <div>
        <div className="containerOne">
          <div className="currentWeather">
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContainerOne;
