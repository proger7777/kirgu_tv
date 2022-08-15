import React, {  }  from 'react';
import IconsSVG from './icons.svg';

function Icons({name, color, width, height, className}) {
  return(
    <svg className={`icon icon-${name} ${className}`} fill={color}>
      <use className='favorites' xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

export default Icons;