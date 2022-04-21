import { useContext } from "react";
import { CatContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ToolBarNav = () => {

    const {homeCategories} = useContext(CatContext)

    const navigate = useNavigate()

    const navList = []
    navList.push(['/', 'Главная', 'main'])
    homeCategories.forEach(i => navList.push([`/category/${i.id}`, i.name, i.id]))
    navList.push(['/categories', 'Все категории', 'allcats'])
    navList.push(['/info', 'Информация', 'info'])

    const activeCl = 'border-b border-[#008954] font-semibold'

    function setActiveMenu(e, href, menuItem) {
        e.preventDefault()
        localStorage.setItem('activeMenu', menuItem)
        navigate(href)
    }

    useEffect(() => {
        
    }, [])

    const activeMenu = 'main'

    return (
        <nav className='space-x-[70px]'>
            {navList.map(i => 
                <Link key={i[2]} to='' onClick={(e) => setActiveMenu(e, i[0], i[2]) } className={`${activeMenu === i[2] ? activeCl : '' } text-green text-[22px]`}>{i[1]}</Link>
            )}
        </nav>
    )

}

export default ToolBarNav;