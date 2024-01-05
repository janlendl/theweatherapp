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
    setSearchCity('');
  }
  
  return (
    <>
      <Header />
      <div className="App-header">
        <form onSubmit={grabCity}>
          {/* <input
            className="searchBar"
            type="text"
            placeholder="Enter City"
            onChange={handleChange}
            value={searchCity}
          /> */}
          <input
            className="searchBar"
            type="text"
            placeholder="Enter City"
            onChange={handleChange}
            value={searchCity}
          />
          <div className="symbol">
            <svg className="cloud">
              <use href="#cloud" />
            </svg>
            <svg className="lens">
              <use href="#lens" />
            </svg>
          </div>
        {/* <button type="submit">Search</button> */}
        </form>

      </div>
      {
        passCity && <WeatherInfo city={passCity}/>
      }
      

    </>
  );
}
