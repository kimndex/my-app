import React from "react";
import Units from "./Units";
import "./current.css";

export default function Current(props) {
  return (
    <div className="row">
      <div className="col-6">
        {" "}
        <div className="current currentTemp">
          <img src={props.icon} alt="weather icon" className="weather-icon" />

          <span className="current-temp">
            <strong>{Math.round(props.temp)}</strong>
          </span>
          <Units temp={props.temp} />
        </div>
      </div>
      <div className="col-6">
        <div className="current">
          Humidity: <span className="humidity">{props.humidity}</span>% <br />
          Wind Speed:{" "}
          <span className="wind-speed">{Math.round(props.wind)}</span>
          km/hr
        </div>
      </div>
    </div>
  );
}
