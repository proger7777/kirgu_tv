import React, {  }  from 'react';
import IconsSVG from './icons.svg';

function Icons({id, name, color, width, height, className}) {
  return(
    <svg id={id} className={`icon icon-${name} ${className}`} fill={color}>
      <use className={`${className}`} xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

export default Icons;