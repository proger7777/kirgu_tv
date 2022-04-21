import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadcrumbItem from "./BreadcrumbItem";
import Icons from "./Icons";

const Breadcrumbs = ({ crumbs }) => {

  const navigate = useNavigate();

  return (
    <div className='flex items-center h-[50px]'>
        <button className='flex items-center justify-center w-[25px] h-[25px] bg-[#e5f3ee] mr-[25px]' onClick={() => navigate(-1)}>
            <Icons name='back' className='w-[4px] h-[9px]' />
        </button>

        <div className='breadcrumbs_block flex items-center space-x-[14px] text-[#c4c4c4]'>
            <Link to='/' className='text-[14px]'>Главная</Link>
            {crumbs && crumbs.map(i =>
                <BreadcrumbItem key={i[1]} item={i} isLast={crumbs.slice(-1)[0][0] === i[0]}  />
            )}
        </div>
    </div>
  );
};

export default Breadcrumbs;

