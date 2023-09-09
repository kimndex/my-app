import React from "react";
import "./units.css";

export default function Units(props) {
  return (
    <span className="degrees">
      <span>
        <a href="./" className="degrees-celcius working">
          {" "}
          °C
        </a>{" "}
      </span>
    </span>
  );
}
