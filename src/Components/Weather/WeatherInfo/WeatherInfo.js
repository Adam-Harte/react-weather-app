import React from 'react';

const WeatherInfo = (props) => {
   return (
      <div>
         <h1>{props.description}</h1>
         <p>{props.temp}</p>
         <p>{props.wind}</p>
         <p>{props.humidity}</p>
      </div>
   );
};

export default WeatherInfo;