import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {convertToCelcius} from '../helpers/converter';
import './WeatherInfo.scss';

export default function WeatherInfo(props) {

  const [weatherData, setWeatherData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=743366476b7670d23d2788f10c157d96`;
  
  // connect to weather API
  useEffect(() => {
    if (props.city) {
      axios.get(url)
      .then((res) => {
        JSON.stringify(setWeatherData({name: res.data.name, weather: res.data.weather[0], main: res.data.main}));
        console.log('Weather API call:: ', res.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    }
  },[props.city, url]);

  console.log(':::HOOK::: ', weatherData); 
  return (
    <>
      <div className='resultsCard'>
        <div className='topCard'>
          <h2>{weatherData.name}</h2>
          <div className='weatherDescription'>
            <span>{weatherData.weather?.description}</span>
          </div>
        </div> 
        
        <div className='tempDetails'>
          <div className='currentTemp'>
            <ul>
              <li>Temp: {convertToCelcius(weatherData.main?.temp)}°C</li>
              <li>Feels Like: {convertToCelcius(weatherData.main?.feels_like)}°C</li>
           </ul>
          </div>
          <div className='minmaxWeather'>
            <ul>
              <li>Low: {convertToCelcius(weatherData.main?.temp_min)}°C</li>
              <li>High: {convertToCelcius(weatherData.main?.temp_max)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
    
}
