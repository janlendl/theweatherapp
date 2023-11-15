import React, {useEffect, useState} from 'react'
import axios from 'axios';
import WeatherCard from './WeatherCard';

export default function WeatherInfo(props) {

  const [weatherData, setWeatherData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=743366476b7670d23d2788f10c157d96`;
  
  useEffect(() => {
    if (props.city) {
      axios.get(url)
      .then((res) => {
        JSON.stringify(setWeatherData(res.data));
        console.log('Weather API call:: ', res.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    }
  },[props.city, url]);

  const weatherDetails = weatherData.map((weather) => {
    return (
      <WeatherCard>
        key={weather.id}
        description={weather.description}
        feelsLike={weather.main.feels_like}
        temp={weather.main.temp}
        min={weather.main.temp_min}
        max={weather.main.temp_max}

      </WeatherCard>
    )
  }) 
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <h3>Weather Today</h3>
      <span>
        <ul>{weatherData?.weather[0].description}
        <li>{weatherData.main?.temp}</li>
        <li>{weatherData.main?.temp_min}</li>
        <li>{weatherData.main?.temp_max}</li>
        </ul>
      </span>
      
    </div>
  )
}
