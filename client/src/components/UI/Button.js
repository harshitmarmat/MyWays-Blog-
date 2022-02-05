import React from 'react';

import './Button.css';

const Button = props => {
  const btnClass = 'button ' + props.className;
  return (
    <button type={props.type} className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;