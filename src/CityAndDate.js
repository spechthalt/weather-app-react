import React from "react";
import "./CityAndDate.css";

export default function CityAndDate() {
  return (
    <div className="row CityAndDate">
      <div className="col-lg-7 col-sm-12">
        <h2 id="searched-city" className="current-city">
          San Diego
        </h2>
        <h3 className="date-time">
          <span id="current-date">January 5, 2022</span> <br />
          <span id="current-time">Last updated: 22:07</span>
        </h3>
      </div>
      <div className="col-lg-5 col-sm-12">
        <span className="high-low">
          H: <span id="temp-high">66</span>° L:
          <span id="temp-low">43</span>°
        </span>
      </div>
    </div>
  );
}
