import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";

import { ThreeDots } from "react-loader-spinner";

import Date from "./Date";
import "./current.css";
import "./search.css";

export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ searched: false });

  function showTemp(response) {
    setWeather({
      searched: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      desc: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function search() {
    let apikey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weather.searched) {
    return (
      <div>
        <form className="mt-5 mb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter your City here"
                onChange={updateCity}
              />{" "}
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="Submit"
                value="Search "
              />
            </div>
          </div>
        </form>
        <Date city={weather.city} desc={weather.desc} />
        <Current
          temp={Math.round(weather.temperature)}
          wind={Math.round(weather.wind)}
          humidity={weather.humidity}
          icon={weather.icon}
        />
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0B5ED7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
