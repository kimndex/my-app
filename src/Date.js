import React from "react";
import "./date.css";

export default function Date() {
  return (
    <div className="col-6">
      <h1>Weather</h1>
      <h2 id="country">Harare</h2>
      <h3>
        <span id="date">Tuesday, 11:00</span>
        <br />
        <span id="description">Clear Sky</span>
      </h3>
    </div>
  );
}
