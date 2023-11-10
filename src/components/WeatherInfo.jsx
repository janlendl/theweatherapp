import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function WeatherInfo(props) {
  const {city} = props;
  console.log('::CITY:: ', city);

  const [weatherResult, setweatherResult] = useState([]);

  let weatherData = {
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743366476b7670d23d2788f10c157d96`,
  }

  useEffect(() => {
    axios.request(weatherData)
      .then((res) => {
        console.log('Weather API call:: ',res.data);
        setweatherResult(res.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }, [weatherResult]);
    

  return (
    <div>
      <h2>City selected: {props.city}</h2>
    </div>
  )
}
