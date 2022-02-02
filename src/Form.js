import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form action="submit" id="search-form">
        <div className="row search-menu">
          <div className="col-lg-7">
            <input
              id="search"
              className="search-bar w-100"
              type="search"
              placeholder="Search city"
            />
          </div>
          <div className="col-lg-2 col-sm-3">
            <input
              id="search-button"
              type="submit"
              value="Search"
              className="menu-btn"
            />
          </div>
          <div className="col-lg-1 col-sm-1">
            <button id="current-location-btn" className="menu-btn">
              <span role="img">📍</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
