import React from 'react';

const WeatherIcon = (props) => {
   return (
      <div>
         <img src={'http://openweathermap.org/img/w/' + props.icon + '.png'} alt={props.alt} />
      </div>
   );
};

export default WeatherIcon;