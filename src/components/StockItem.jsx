import React, { } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate, getTitleFromLinkStock } from "./services/str";
import Icons from './Icons';

const StockItem = ({ stock }) => {

    const navigate = useNavigate()

    const url = `/info/stocks/${getTitleFromLinkStock(stock.link)}`

    return (
        <div onClick={() => navigate(url)} className=' flex-col mt-[20px] w-[400px] cursor-pointer mr-[30px]'>
            <img src={setImagePath(stock.image)} alt='' className=' w-[390px] h-[300px]' />
            
            <span className='flex mt-[5px]'>
                <h3 className='max-w-[390px] text-[20px] font-600 mb-[15px] truncate'>{stock.name}</h3>
                <Icons name={'right'} color={'black'} className={`w-[35px] h-[35px]`} />
            </span>
        </div>
    )

}


export default StockItem;