import ToolBar from "../components/ToolBar";

const Layout =({children, crumbs, activeMenu}) =>{
    return(
        <div className='unselectable w-[1720px] m-auto h-full flex justify-between flex-col pt-[50px]'>
            <div className='flex justify-between overflow-y-auto items-start'>{children}</div>
            <ToolBar crumbs={crumbs} activeMenu={activeMenu} />
        </div>
    )
}

export default Layout;