import React from "react";
import "./App.css";

import Form from "./Form";
import Overview from "./Overview";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <Form />
          <Overview />
          <div class="row">
            <Temperature />
            <Weather />
          </div>
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
