import React, { useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import "./App.css";

export default function App() {
  const [searchCity, setSearchCity] = useState("");

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <>
      <Header />
      <div>
        <input
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
