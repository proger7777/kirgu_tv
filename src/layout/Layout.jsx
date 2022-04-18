import ToolBar from "../components/ToolBar";

const Layout =({children, crumbs}) =>{
    return(
        <div className='wrapp w-[1720px] m-auto h-full flex justify-between flex-col pt-[50px]'>
            <div className='flex justify-between overflow-y-auto items-start'>{children}</div>
            <ToolBar crumbs={crumbs} />
        </div>
    )
}

export default Layout;