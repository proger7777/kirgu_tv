import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CatContext } from "../context";

const HomeNavbar = () => {

    const {homeCategories} = useContext(CatContext)

    const navs = []

    homeCategories.forEach(i => navs.push([`/category/${i.id}`, i.svg, i.name]))
    navs.push(['/categories', 'cats', 'Все категории'])
    navs.push(['/info', 'info', 'Информация'])

    return(
        <nav className='home_nav w-full flex justify-between mt-[50px]'>
            {navs.map((i, inx) => 
                <Link key={inx} to={i[0]} className='relative bg-[#F5F5F5] w-[324px] h-[210px]'>
                    <img src={require(`../images/${i[1]}.svg`)} alt='' className='w-[254px] h-[110px] m-auto mt-[40px]' />
                    <span className='absolute bottom-[17px] block w-full text-center font-semibold'>{i[2]}</span>
                </Link>
            )}
        </nav>
    )

}

export default HomeNavbar;