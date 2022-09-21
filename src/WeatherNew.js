import React from "react";
import "./App.css";

export default function WeatherNew(props) {
  return (
    <div className="WeatherNew">
      <div className="header">
        <h1>
          <span id="city-name">{props.data.city}</span>
        </h1>
        <ul className="head">
          <li id="sky-up">{props.data.description}</li>
        </ul>
      </div>
      <div className="row first-row">
        <div className="col-6">
          <div className="main-temperature">
            <img src={props.data.icon} alt="" id="icon" />
            <strong id="temperature">
              {Math.round(props.data.temperature)}
            </strong>
            <span>°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="humidity-wind">
            <li>
              Humidity:
              <span id="humidity">{Math.round(props.data.humidity)}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> km\h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
