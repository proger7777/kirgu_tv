import IconsSVG from './icons.svg';

function Icons({name, color, width, height, className}) {
  return(
    <svg className={`icon icon-${name} ${className}`}>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

export default Icons;