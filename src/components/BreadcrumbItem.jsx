import React from "react";
import Icons from "./Icons";

const BreadcrumbItem = ({ name, isLast }) => {

  const lastColor = isLast ? 'text-[#3f3f3f]' : ''

  return (
    <>
      <Icons name='right_p' className='w-[6px] h-[9px]' />
      <span className={`text-[14px] ${lastColor}`}>{name}</span>
    </>
  );
};

export default BreadcrumbItem;

