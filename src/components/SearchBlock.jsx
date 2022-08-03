import Icons from "./Icons";

const SearchBlock = ({children, value, searchInpRef, clearRef, onSubmitSearch, onClearSearchVal, onKeyupSearchInp, onClickSearchInp}) => {
    
    return (
        <div className='flex flex-col'>
            <div className='flex h-[80px] text-[22px] mb-[20px]'>
                <div className='relative'>
                    <input ref={searchInpRef} defaultValue={value} onClick={onClickSearchInp} onKeyUp={onKeyupSearchInp} type='text' readOnly autoFocus className='focus:border-green focus:outline-none w-[1421px] h-full  pl-[30px] pr-[70px] border border-[#e6e6e6] rounded-tl-[5px] rounded-bl-[5px]' placeholder='Поиск' />
                    
                    <span ref={clearRef} onClick={onClearSearchVal} className={`${!value && 'hidden'} absolute top-[27px] right-[30px] cursor-pointer`}>
                        <Icons name='close' className='w-[24px] h-[24px]' />
                    </span>
                </div>
                <button type='button' onClick={onSubmitSearch} className='w-[300px] bg-[#008954] flex justify-center items-center text-white rounded-tr-[5px] rounded-br-[5px]'>Поиск</button>
            </div>

            {children}
        </div>
    )

}

export default SearchBlock;