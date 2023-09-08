import React from "react";
import "./units.css";

export default function Units() {
  return (
    <span className="degrees">
      <span>
        <a href="./" id="degrees-celcius" className="working">
          {" "}
          °C
        </a>{" "}
        |
        <a href="./" id="degrees-fahrenheit">
          °F
        </a>
      </span>
    </span>
  );
}
