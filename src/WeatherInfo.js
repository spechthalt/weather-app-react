import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="row WeatherInfo">
      <div className="col-lg-7 col-sm-12 weather-info">
        <img src="" alt="" id="icon" />

        <span id="current-display-temp" className="current-temp">
          52
        </span>
        <span className="temp-symbol">°F</span>
      </div>
      <div className="col-5 mt-2 weather-info">
        <span>
          <span id="description"></span> <br />
          Humidity: <span id="humidity">30%</span> <br />
          Wind speed: <span id="wind-speed">2 mph</span>
          <br />
        </span>
      </div>
    </div>
  );
}
