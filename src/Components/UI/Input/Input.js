import React from 'react';

const Input = (props) => {
   return (
      <input type={props.inpType} placeholder={props.inpPlaceholder} value={props.inpValue} onChange={props.changed} />
   );
};

export default Input;