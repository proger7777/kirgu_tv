import React, {  }  from 'react';
import { useContext } from "react";
import { CatContext } from "../context";
import { Link } from "react-router-dom";

const ToolBarNav = ({activeMenu}) => {

    const {homeCategories} = useContext(CatContext)

    const navList = []
    navList.push(['/main', 'Главная', 'main'])
    homeCategories.forEach(i => navList.push([`/category/${i.id}`, i.name, i.id]))
    navList.push(['/categories', 'Все категории', 'allcats'])
    navList.push(['/', 'Навигация', 'navigation'])
    navList.push(['/info', 'Информация', 'info'])

    const activeCl = 'border-b border-[#008954] font-semibold'

    return (
        <nav className='space-x-[90px]'>
            {navList.map(i => 
                <Link key={i[2]} to={i[0]} className={`${activeMenu === i[2] ? activeCl : '' } text-green text-[24px]`}>{i[1]}</Link>
            )}
        </nav>
    )

}

export default ToolBarNav;