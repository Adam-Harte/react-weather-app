import React from 'react';

const WeatherIcon = (props) => {
   return (
      <div>
         <h1>{props.description}</h1>
         <p>{props.temp}</p>
         <p>{props.wind}</p>
      </div>
   );
};

export default WeatherIcon;