import React, {  }  from 'react';
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import Breadcrumbs from "./Breadcrumbs";
import ToolBarNav from "./ToolBarNav";

const ToolBar = ({crumbs, activeMenu}) => {

    const naviage = useNavigate()
    
    return (
        <div className="toolbar">
            <Breadcrumbs crumbs={crumbs} />
               
            <div className='flex items-center justify-between h-[100px]'>
                <ToolBarNav activeMenu={activeMenu} />
        
                <div className='flex justify-between'>
                    <div className='relative mr-[20px]'>
                        <input type='text' onClick={ () => naviage('/search') } placeholder='Что Вы хотите найти?' className='search_inp focus:border-green focus:outline-none w-[350px] h-[50px] pl-[20px] pr-[40px] border-[1px] border-[#BEBEBE] rounded-[4px]' />
                        <Icons name='search' className='absolute w-[18px] h-[18px] right-[16px] top-[16px]'/>
                    </div>
                    <button onClick={ () => naviage('/search?voice=true') } className='flex justify-center items-center w-[50px] h-[50px] bg-[#e5f3ee] rounded-[4px]'>
                        <Icons name='voice' id='voice_search' className='voice_search w-[30px] h-[30px]'/>
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ToolBar;