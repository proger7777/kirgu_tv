import { useContext } from "react";
import { CatContext } from "../context";
import { Link } from "react-router-dom";

const ToolBarNav = ({activeMenu, crumbs}) => {
    
    const {homeCategories} = useContext(CatContext)

    const navList = []
    navList.push(['/', 'Главная', 'main'])
    homeCategories.forEach(i => navList.push([`/category/${i.id}`, i.name, i.id]))
    navList.push(['/categories', 'Все категории', 'allcats'])
    navList.push(['/info', 'Информация', 'info'])

    const activeCl = 'border-b border-[#008954] font-semibold'

    return (
        <nav className='space-x-[70px]'>
            {navList.map(i => 
                <Link key={i.id} to={i[0]} className={`${activeMenu === 'main' ? activeCl : '' } text-green text-[22px]`}>{i[1]}</Link>
            )}
        </nav>
    )

}

export default ToolBarNav;