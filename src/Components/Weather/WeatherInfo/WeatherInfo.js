import React from 'react';

const WeatherInfo = (props) => {
   return (
      <div>
         <img src={props.icon} alt={props.alt} />
      </div>
   );
};

export default WeatherInfo;