import React from "react";
import Units from "./Units";
import "./current.css";

export default function Current() {
  return (
    <div className="col-6">
      <div className="current">
        <div className="currentTemp">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weather icon"
            id="weather-icon"
          />

          <span id="current-temp">
            <strong>12</strong>
          </span>
          <Units />
        </div>
        Humidity: <span id="humidity">79</span>% <br />
        Wind Speed: <span id="wind-speed">7</span>km/hr
      </div>
    </div>
  );
}
