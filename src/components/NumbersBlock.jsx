import React, {  }  from 'react';
import Icons from "./Icons";

const NumbersBlock = (props) => {
    
    const numbers = [1,2,3,4,5,6,7,8,9,0]
      
    return(
        <div className={`${props.className} m-auto grid grid-cols-3 gap-[10px]`}>
            {numbers.map(i => 
                <span key={i} onClick={() => props.set(i) } className={`${i === 0 ? 'col-span-2' : '' } text-[30px] flex items-center justify-center border border-[#e6e6e6] rounded-[5px] h-[69px] cursor-pointer`}>{i}</span>
            )}

            <div onClick={props.clear} className='text-[30px] flex items-center justify-center border border-[#e6e6e6] rounded-[5px] h-[69px] cursor-pointer'>
                <Icons name='clear' className='w-[30px] h-[18px]' />
            </div>
        </div>
    )
}

export default NumbersBlock;