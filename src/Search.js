import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState(null);
  function showWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "eaf040dff7892fc80bc32a2d99e6ebec";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="searchform" onSubmit={handleSubmit} action="">
      <input
        className="enter"
        id="search-city"
        type="search"
        onChange={updateCity}
        placeholder="Type a city..."
        autoComplete="off"
      />
      <input className="enter-button" type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="header">
          <h1>
            <span id="city-name">{weather.city}</span>
          </h1>
          <ul className="head">
            <li id="sky-up">{weather.description}</li>
          </ul>
        </div>
        <div className="row first-row">
          <div className="col-6">
            <div className="main-temperature">
              <img src={weather.icon} alt="" id="icon" />
              <strong id="temperature">
                {Math.round(weather.temperature)}
              </strong>
              <span>°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="humidity-wind">
              <li>
                Humidity:
                <span id="humidity">{Math.round(weather.humidity)}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(weather.wind)}</span> km\h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
