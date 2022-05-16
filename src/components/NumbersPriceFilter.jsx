import React, {  }  from 'react';
import { useState } from "react";
import BgBlock from "./BgBlock";
import Icons from "./Icons";
import NumbersBlock from "./NumbersBlock";

const NumbersPriceFilter = ({set, clear, close, onSetup}) => {

    const [price, setPrice] = useState(0)

    function clearPrice() {
        var newVal = price.substring(0, price.length - 1)
        setPrice(newVal)
    }

    return(
        <>
            <BgBlock color='none' clickCallback={close} />
            <div className='absolute shadow-lg p-[50px] top-[90px] left-0 w-[400px] bg-white border border-[#e6e6e6] z-50'>
                <span onClick={close} className='absolute top-[20px] right-[20px] w-[24px] h-[24px] cursor-pointer'>
                    <Icons name='close'  className='w-[24px] h-[24px]' />
                </span>
                <NumbersBlock set={set} clear={clear} />
                <button onClick={onSetup} className='w-full bg-[#008954] mt-[10px] text-[16px] text-[#fff] flex items-center justify-center rounded-[4px] h-[48px] cursor-pointer'>Готово</button>    
            </div>
        </>
    )
}

export default NumbersPriceFilter;