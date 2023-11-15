import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function WeatherInfo(props) {
  //const {city} = props;
  console.log('::CITY:: ', props.city);

  const [weatherData, setWeatherData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=743366476b7670d23d2788f10c157d96&units=metric`;
  
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
    
  return (
    <div>
      <h2>City selected: {props.city}</h2>
      <h3>Weather Today is</h3>
      {weatherData.name}
    </div>
  )
}
