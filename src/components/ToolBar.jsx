import React from 'react';
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import Breadcrumbs from "./Breadcrumbs";
import ToolBarNav from "./ToolBarNav";
import { useSelector } from 'react-redux';

const ToolBar = ({ crumbs, activeMenu }) => {

    const navigate = useNavigate()

    const cart = useSelector(state => state.cart.cart)
    const favorites = useSelector(state => state.favorites.favorites)
    const comparison = useSelector(state => state.comparison.comparison)


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
                        <Icons name='scales' className='w-[33px] h-[33px]' color='#008954' />
                    </button>


                    <button onClick={() => navigate('/search')} className='focus:outline-none w-[50px] h-[50px] flex justify-center items-center rounded-[4px] bg-[#00895420]'>
                        <Icons name='searchV2' className='w-[30px] h-[30px]' color='none' />
                    </button>

                    {(favorites.length > 0) ? (

                        <div className='absolute left-[1676px] bottom-[52px] bg-red-600 rounded-[10px] w-[18px] h-[18px] flex justify-center items-center '>
                            <p className='text-[12px] text-white'>{favorites.length}</p>
                        </div>

                    ) : (<></>)}

                    {(cart.length > 0) ? (

                        <div className='absolute left-[1618px] bottom-[52px] bg-red-600 rounded-[10px] w-[18px] h-[18px] flex justify-center items-center '>
                            <p className='text-[12px] text-white'>{cart.length}</p>
                        </div>

                    ) : (<></>)}

                    {(comparison.length > 0) ? (

                        <div className='absolute left-[1738px] bottom-[52px] bg-red-600 rounded-[10px] w-[18px] h-[18px] flex justify-center items-center '>
                            <p className='text-[12px] text-white'>{comparison.length}</p>
                        </div>

                    ) : (<></>)}

                </div>

            </div>

        </div>
    )

}

export default ToolBar;