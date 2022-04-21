import Icons from "./Icons";

const PhoneNumberBlock = ({setNumber, clearNum}) => {
    
    const numbers = [1,2,3,4,5,6,7,8,9,0]
      
    return(
        <>
            {numbers.map(i => 
                <span key={i} onClick={() => setNumber(i) } className={`${i === 0 ? 'col-span-2' : '' } text-[30px] flex items-center justify-center border border-[#e6e6e6] rounded-[5px] h-[69px] cursor-pointer`}>{i}</span>
            )}

            <div onClick={() => clearNum() } className='text-[30px] flex items-center justify-center border border-[#e6e6e6] rounded-[5px] h-[69px] cursor-pointer'>
                <Icons name='clear' className='w-[30px] h-[18px]' />
            </div>
        </>
    )
}

export default PhoneNumberBlock;