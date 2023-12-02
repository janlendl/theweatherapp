import React from 'react'

import BrokenCloudsN from 'public/icons/broken_clouds_night.svg';
import BrokenClouds from 'public/icons/broken_clouds.svg';
import ClearN from 'public/icons/clear_night.svg';
import Clear from 'public/icons/clear.svg';
import FewCloudsN from 'public/icons/few_clouds_night.svg';
import FewClouds from 'public/icons/few_clouds.svg';
import MistN from 'public/icons/mist_night.svg';
import Mist from 'public/icons/mist.svg';
import RainN from 'public/icons/rain_night.svg';
import Rain from 'public/icons/rain.svg';
import ScatteredCloudsN from 'public/icons/scattered_clouds_night.svg';
import ScatteredClouds from 'public/icons/scattered_clouds.svg';
import ShowerRainN from 'public/icons/shower_rain_night.svg';
import ShowerRain from 'public/icons/shower_rain.svg';
import SnowN from 'public/icons/snow_night.svg';
import Snow from 'public/icons/snow.svg';
import ThunderstormN from 'public/icons/thunderstorn_night.svg';
import Thunderstorm from 'public/icons/thunderstorn_night.svg';

const icons = {
  "04n": BrokenCloudsN,
  "04d": BrokenClouds,
  "01n": ClearN,
  "01d": Clear,
  FewCloudsN: FewCloudsN,
  FewClouds: FewClouds,
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
}

export default function WeatherIcons(props) {
  const WeatherIcon = icons[props.icon];
  return (
    <WeatherIcon width={30} height={30} />
  )
}
