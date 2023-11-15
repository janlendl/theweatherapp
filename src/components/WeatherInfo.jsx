import React, {useEffect, useState} from 'react'
import axios from 'axios';
import WeatherCard from './WeatherCard';

export default function WeatherInfo(props) {

  const [weatherData, setWeatherData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=743366476b7670d23d2788f10c157d96`;
  
  // connect to weather API
  useEffect(() => {
    if (props.city) {
      axios.get(url)
      .then((res) => {
        setWeatherData(res.data);
        console.log('Weather API call:: ', res.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    }
  },[props.city, url]);

  // pass weather details to Weather Card component
  const weatherDetails = Object.keys(weatherData).map((data) => {
    console.log('::::WEATHER:::: ', data.weather[0].description);
    
    return (
      <WeatherCard
        // key={weather.id}
        // description={weather[0].description}
        // feelsLike={weather.main.feels_like}
        // temp={weather.main.temp}
        // min={weather.main.temp_min}
        // max={weather.main.temp_max}
      />
    );
  });

  return (
    <>
      <div>
        <h2>{weatherData.name}</h2>
        <h3>Weather Today</h3>
        <span>
          <ul>
            { weatherDetails }
          </ul>
        </span>
        
      </div>
    </>
  )
    
}
