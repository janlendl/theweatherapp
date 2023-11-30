import React, { useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import "./App.scss";

export default function App() {
  const [searchCity, setSearchCity] = useState('');
  const [passCity, setPassCity] = useState('');

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  const grabCity = (e) => {
    e.preventDefault();
    setPassCity(searchCity);
  }
  
  return (
    <>
      <Header />
      <div className="App-header">
        <form onSubmit={grabCity}>
          <input
            className="searchBar"
            type="text"
            placeholder="Enter City"
            onChange={handleChange}
            value={searchCity}
          />
        <button type="submit">Search</button>
        </form>

      </div>
      {
        passCity && <WeatherInfo city={passCity}/>
      }
      

    </>
  );
}
