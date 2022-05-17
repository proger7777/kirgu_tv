import React, {  }  from 'react';
import { Link, useNavigate } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate, getTitleFromLinkStock } from "./services/str";

const StockItem = ({stock}) => {

    const navigate = useNavigate()

    const url = `/info/stocks/${getTitleFromLinkStock(stock.link)}`

    return(
        <div onClick={() => navigate(url) } className='flex mt-[50px] w-[70%] cursor-pointer'>
            <img src={setImagePath(stock.image)} alt='' className='object-contain min-w-[333px] h-[250px]' />
            <span className='ml-[50px]'>
                <h3 className='text-[28px] font-600 mb-[15px]'>{stock.name}</h3>
                <span className='block text-[#505050] mb-[20px]'>{truncate(stock.description, 370)}</span>
                <Link to={url} className='text-[#11A9FF] text-[24px] underline underline-offset-2'>Подробнее...</Link>
            </span>
        </div>
    )

}


export default StockItem;