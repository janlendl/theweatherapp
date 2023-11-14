import React, { useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import "./App.scss";

export default function App() {
  const [searchCity, setSearchCity] = useState('');
  const [passCity, setPassCity] = useState('');

  const handleChange = (e) => {
    //e.preventDefault();
    setSearchCity(e.target.value);
  };

  const grabCity = () => {
    setPassCity(searchCity);
  }
  
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
        <button type="submit" onClick={grabCity}>Search</button>

      </div>
      {
        passCity && <WeatherInfo city={passCity}/>
      }
      

    </>
  );
}
