import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {convertToCelcius} from '../helpers/converter';
import './WeatherInfo.scss';

export const icons = {
  "01d": "public/icons/clear.svg",
  "01n": "../../public/icons/clear_night.svg",
  "02d": "public/icons/few_clouds.svg",
  "02n": "public/icons/few_clouds_night.svg",
  "03d": "public/icons/scattered_clouds.svg",
  "03n": "public/icons/scattered_clouds_night.svg",
  "04d": "public/icons/broken_clouds.svg",
  "04n": "public/icons/broken_clouds_night.svg",
  "09d": "public/icons/shower_rain.svg",
  "09n": "public/icons/shower_rain_night.svg",
  "10d": "public/icons/rain.svg",
  "10n": "public/icons/rain_night.svg",
  "11d": "public/icons/thunderstorm.svg",
  "11n": "public/icons/thunderstorn_night.svg",
  "13d": "public/icons/snow.svg",
  "13n": "public/icons/snow_night.svg",
  "50d": "public/icons/mist.svg",
  "50n": "public/icons/mist_night.svg"
}

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
          <div className='weatherIcon'>
            {/* <img src={`https://openweathermap.org/img/wn/${weatherData.weather?.icon}.png`} alt='icon' /> */}
            <img src={icons[weatherData.weather?.icon]} alt='icon' />
          </div>
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
