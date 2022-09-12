import React, { useEffect, useState }  from 'react';
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import Breadcrumbs from "./Breadcrumbs";
import ToolBarNav from "./ToolBarNav";

const ToolBar = ({crumbs, activeMenu}) => {

    const naviage = useNavigate()
    
    const [favorites, setFavorites] = useState(0)

    useEffect(() => {

        Favor()

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('favorites') || event.target.classList.contains('clearFavorites')) {
                Favor()
            }
        })

    }, [])

    function Favor() {

        const raw = localStorage.getItem('favorites') || []
        if (raw.length) {
            setFavorites(JSON.parse(raw).length)
        } else { setFavorites(0) }

    }
    
    return (
        <div className="toolbar">
            <Breadcrumbs crumbs={crumbs} />
               
            <div className='flex items-center justify-between h-[100px]'>
                <ToolBarNav activeMenu={activeMenu} />
        
                <div className='flex w-[180px] justify-between'>

                    <button onClick={() => naviage('/favorites')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='heart' className='w-[28px] h-[28px]  right-[2px]' />
                    </button>
                    
                    <button onClick={() => naviage('/comparison')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='scales' className='w-[33px] h-[33px]' color='#008954'/>
                    </button>
                    
                    
                    <button onClick={() => naviage('/search')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='searchV2' className='w-[30px] h-[30px]' color='none'/>
                    </button>

                    {(favorites > 0) ? (
                        
                        <div className='absolute left-[1669px] bottom-[54px] bg-red-600 rounded-[10px] w-[16px] h-[16px] flex justify-center items-center '>
                            <p className='text-[11px] text-white'>{favorites}</p>
                        </div>
                    
                    ) : (<></>)}
                   
                </div>

            </div>

        </div>
    )

}

export default ToolBar;