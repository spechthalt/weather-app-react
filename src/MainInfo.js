import React from "react";
import CityAndDate from "./CityAndDate";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./styles.css";

export default function MainInfo() {
  return (
    <div className="row main-info">
      <CityAndDate />

      <WeatherInfo />

      <Forecast />
    </div>
  );
}
