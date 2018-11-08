import React from 'react';

import './Input.css';

const Input = (props) => {
   return (
      <input className="Input" type={props.inpType} placeholder={props.inpPlaceholder} value={props.inpValue} onChange={props.changed} />
   );
};

export default Input;