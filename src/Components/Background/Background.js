import React from 'react';

const Background = (props) => {
   const gradient = props.gradient;
   const classes = ['Background', gradient].join(' ');
   return (
      <div className={classes}></div>
   );
};

export default Background;