import React, {  }  from 'react';
import { useState } from "react";
import EngSearchKeywords from "./EngSearchKeywords";
import Icons from "./Icons";
import RusSearchKeywords from "./RusSearchKeywords";

const SearchKeywordBlock = ({write, clear}) => {

    const [langKeywords, setLangKeywords] = useState('ru')

    return(
        <div className='keyword_block'>
            <div className='keyword_row flex space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                {[1,2,3,4,5,6,7,8,9,0].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}

                <span onClick={ () => clear(' ') } className='flex justify-center items-center cursor-pointer w-[270px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>
                    <Icons name='clear' className='w-[45px] h-[33px]' />
                </span>
            </div>

            {langKeywords === 'ru' && <RusSearchKeywords write={write} changeLang={setLangKeywords} /> }
            {langKeywords === 'en' && <EngSearchKeywords write={write} changeLang={setLangKeywords} /> }
            
            <span onClick={ () => write(' ') } className='flex justify-center items-center cursor-pointer w-[1720px] h-[130px] text-[40px] border border-[#e6e6e6] rounded-[5px]'>Пробел</span>
        </div>
    )
}

export default SearchKeywordBlock;