import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  <div className="App">
    <div className="container">
      <div className="wrapper">
        <div className="form" id="all-frame">
          <Search />

          <div className="card weatherDisplay">
            <div className="card-body forecast-card">
              <div className="forecast-display" id="forecast-display"></div>
            </div>
          </div>
        </div>
        <small>
          <a
            id="source-code"
            href="https://github.com/BilousovaOlena/oh-my-weather"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourse code
          </a>
          by Olena Bilousova
        </small>
      </div>
    </div>
    <script src="src/app.js"></script>
  </div>;
}

export default App;
