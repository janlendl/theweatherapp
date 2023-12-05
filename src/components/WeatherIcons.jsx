import React from 'react'

import BrokenCloudsN from '../assets/broken_clouds_night.svg';
import BrokenClouds from '../assets/broken_clouds.svg';
import ClearN from '../assets/clear_night.svg';
import Clear from '../assets/clear.svg';
import FewCloudsN from '../assets/few_clouds_night.svg';
import FewClouds from '../assets/few_clouds.svg';
import MistN from '../assets/mist_night.svg';
import Mist from '../assets/mist.svg';
import RainN from '../assets/rain_night.svg';
import Rain from '../assets/rain.svg';
import ScatteredCloudsN from '../assets/scattered_clouds_night.svg';
import ScatteredClouds from '../assets/scattered_clouds.svg';
import ShowerRainN from '../assets/shower_rain_night.svg';
import ShowerRain from '../assets/shower_rain.svg';
import SnowN from '../assets/snow_night.svg';
import Snow from '../assets/snow.svg';
import ThunderstormN from '../assets/thunderstorn_night.svg';
import Thunderstorm from '../assets/thunderstorn_night.svg';

const icons = [{
  "04n": BrokenCloudsN,
  "04d": BrokenClouds,
  "01n": ClearN,
  "01d": Clear,
  "02n": FewCloudsN,
  "02d": FewClouds,
  MistN: MistN,
  Mist: Mist,
  RainN: RainN,
  Rain: Rain,
  ScatteredCloudsN: ScatteredCloudsN,
  ScatteredClouds: ScatteredClouds,
  ShowerRainN: ShowerRainN,
  ShowerRain: ShowerRain,
  SnowN: SnowN,
  Snow: Snow,
  ThunderstormN: ThunderstormN,
  Thunderstorm: Thunderstorm
}];

export default function WeatherIcons(props) {
  
  let weatherIcon = "";
  
  icons.forEach(item => {
    weatherIcon = item[props.children]
  });
  //const WeatherIcon = icons[props.icon];
  return (
    <>
    <img src={weatherIcon} alt='icon' />
    </>
    //<WeatherIcon width={30} height={30} />
  )
}
