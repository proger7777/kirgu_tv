import React, {  }  from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import { CatContext } from "../context";

const HomeNavbar = () => {

    const {homeCategories} = useContext(CatContext)

    return(
        <nav className='home_nav w-full flex justify-between mt-[50px]'>

            {homeCategories && homeCategories.map(i => 
                <Link key={i.id} to={`/category/${i.id}`} className='relative bg-[#F5F5F5] w-[324px] h-[210px]'>
                    <Icons name={i.svg} className='w-[157px] h-[112px] m-auto mt-[26px]' />
                    <span className='text-green absolute bottom-[17px] block w-full text-center font-bold'>{i.name}</span>
                </Link>
            )}

            <Link to='/categories' className='page_link relative bg-[#F5F5F5] w-[324px] h-[210px]'>
                <Icons name='cats' className='w-[112px] h-[112px]  m-auto mt-[26px]'/>
                <span className='text-green absolute bottom-[17px] block w-full text-center font-bold'>Все категории</span>
            </Link>

            <Link to='/info' className='relative bg-[#F5F5F5] w-[324px] h-[210px]'>
                <Icons name='info' className='w-[112px] h-[112px] m-auto mt-[26px]'/>
                <span className='text-green absolute bottom-[17px] block w-full text-center font-bold'>Информация</span>
            </Link>

    </nav>
    )

}

export default HomeNavbar;