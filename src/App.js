import React, { useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import "./App.scss";

export default function App() {
  const [searchCity, setSearchCity] = useState("");

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="App-header">
        <input
          className="searchBar"
          type="text"
          placeholder="Enter City"
          onChange={handleChange}
          value={searchCity}
        />

      </div>

      <WeatherInfo city={searchCity}/>
    </>
  );
}
