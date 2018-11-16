import React from 'react';

import './WeatherDisplay.css';

import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherDisplay = (props) => {
   let temp = props.data.main.temp;

   if (props.metric === 'celsius') {
      temp = (props.data.main.temp - 273.15).toFixed(1)
   } else {
      temp = ((props.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
   }
      return (
         <div className="WeatherDisplay">
            <div className="info-container">
               <WeatherInfo
                  description={props.data.weather[0].description}
                  temp={temp}
                  wind={props.data.wind.speed}
                  humidity={props.data.main.humidity} />
            </div>
            <div className="icon-container">
               <WeatherIcon
                  icon={props.data.weather[0].icon}
                  alt={props.data.weather[0].main} />
            </div>
         </div>
      );
}

export default WeatherDisplay;