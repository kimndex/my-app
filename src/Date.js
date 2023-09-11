import React from "react";
import "./date.css";

export default function currentDate(props) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div className="col-6 mb-5">
      <h1 className=" country mt-2">{props.city}</h1>
      <h3 className="date mb-3">
        {day} , {hours}:{minutes}
      </h3>

      <h3 className="description">{props.desc}</h3>
    </div>
  );
}
