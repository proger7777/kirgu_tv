import React from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";

const BreadcrumbItem = ({ item, isLast }) => {

  return (
    <>
      <Icons name='right_p' className='mt-[3px] w-[6px] h-[9px]' />
      {isLast
        ? <span className='text-[14px] text-[#3f3f3f]'>{item[0]}</span>
        : <Link to={`/${item[1]}`}>{item[0]}</Link>
      }
    </>
  );
};

export default BreadcrumbItem;

