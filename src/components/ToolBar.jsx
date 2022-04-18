import { Link } from "react-router-dom";
import Icons from "./Icons";
import Breadcrumbs from "./Breadcrumbs";
import ToolBarNav from "./ToolBarNav";

const ToolBar = ({activeMenu, crumbs}) => {
    
    return (
        <div>
            <Breadcrumbs crumbs={crumbs} />
               
            <div className='flex items-center justify-between h-[100px]'>
                <ToolBarNav />
        
                <div className='flex justify-between'>
                    <div className='relative mr-[20px]'>
                        <input type='text' placeholder='Что Вы хотите найти?' className='main_search w-[466px] h-[50px] pl-[20px] pr-[40px] border-[1px] border-[#BEBEBE] rounded-[4px]' />
                        <Icons name='search' className='absolute w-[18px] h-[18px] right-[16px] top-[16px]'/>
                    </div>
                    <Link to='' className='flex justify-center items-center w-[50px] h-[50px] bg-[#e5f3ee] rounded-[4px]'>
                        <Icons name='voice' className='w-[30px] h-[30px]'/>
                    </Link>
                </div>
            </div>

        </div>
    )

}

export default ToolBar;