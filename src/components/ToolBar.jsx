import React, { useEffect, useState }  from 'react';
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import Breadcrumbs from "./Breadcrumbs";
import ToolBarNav from "./ToolBarNav";

const ToolBar = ({crumbs, activeMenu}) => {

    const navigate = useNavigate()
    
    const [favorites, setFavorites] = useState(0)

    const [cart, setCart] = useState(0)

    useEffect(() => {

        Favor()
        Cart()

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('favorites') || event.target.classList.contains('clearFavorites')) {
                Favor()
            }

            if (event.target.classList.contains('cart') || event.target.classList.contains('clearCart')) {
                Cart()
            }
        })

    }, [])

    function Favor() {

        const raw = localStorage.getItem('favorites') || []
        if (raw.length) {
            setFavorites(JSON.parse(raw).length)
        } else { setFavorites(0) }

    }

    function Cart() {

        const raw = localStorage.getItem('cart') || []
        if (raw.length) {
            setCart(JSON.parse(raw).length)
        } else { setCart(0) }

    }
    
    return (
        <div className="toolbar">
            <Breadcrumbs crumbs={crumbs} />
               
            <div className='flex items-center justify-between h-[100px]'>
                <ToolBarNav activeMenu={activeMenu} />
        
                <div className='flex w-[230px] justify-between'>

                    <button onClick={() => navigate('/cart')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='shopCart' className='w-[28px] h-[28px]  right-[2px]' />
                    </button>

                    <button onClick={() => navigate('/favorites')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='heart' className='w-[28px] h-[28px] right-[2px]' color={'#008954'} />
                    </button>
                    
                    <button onClick={() => navigate('/comparison')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='scales' className='w-[33px] h-[33px]' color='#008954'/>
                    </button>
                    
                    
                    <button onClick={() => navigate('/search')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='searchV2' className='w-[30px] h-[30px]' color='none'/>
                    </button>

                    {(favorites > 0) ? (
                        
                        <div className='absolute left-[1676px] bottom-[52px] bg-red-600 rounded-[10px] w-[18px] h-[18px] flex justify-center items-center '>
                            <p className='text-[12px] text-white'>{favorites}</p>
                        </div>
                    
                    ) : (<></>)}
                    
                    {(cart > 0) ? (
                        
                        <div className='absolute left-[1618px] bottom-[52px] bg-red-600 rounded-[10px] w-[18px] h-[18px] flex justify-center items-center '>
                            <p className='text-[12px] text-white'>{cart}</p>
                        </div>
                    
                    ) : (<></>)}
                   
                </div>

            </div>

        </div>
    )

}

export default ToolBar;