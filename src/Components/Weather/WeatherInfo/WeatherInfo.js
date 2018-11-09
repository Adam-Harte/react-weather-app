import React from 'react';

import './WeatherInfo.css';

const WeatherInfo = (props) => {
   return (
      <div className="WeatherInfo">
         <h1 className="description">{props.description}</h1>
         <p className="temp">{props.temp}</p>
         <p className="wind">{props.wind}</p>
         <p className="humidity">{props.humidity}</p>
      </div>
   );
};

export default WeatherInfo;