import React from 'react';

import './WeatherDisplay.css';

import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WeatherDisplay = (props) => {
      return (
         <div className="WeatherDisplay">
            <div className="info-container">
               <WeatherInfo
                  description={props.data.weather.description}
                  temp={props.data.main.temp}
                  wind={props.data.wind.speed}
                  humidity={props.data.main.humidity} />
            </div>
            <div className="icon-container">
               <WeatherIcon
                  icon={props.data.weather.icon}
                  alt={props.data.weather.main} />
            </div>
         </div>
      );
}

export default WeatherDisplay;