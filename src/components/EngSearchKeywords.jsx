import { Link } from "react-router-dom";
import Icons from "./Icons";

const EngSearchKeywords = ({write, changeLang}) => {

    return(
        <>
            <div className='flex justify-center space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                {['Q','W','E','R', 'T', 'Y','U','I','O', 'P'].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}
            </div>
            
            <div className='flex justify-center space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                {['A','S','D','F', 'G', 'H','J','K','L'].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}
            </div>
            
            <div className='flex justify-center space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                <Link to='' className='caps flex justify-center items-center w-[197px] border border-[#e6e6e6] rounded-[5px]'>
                    <Icons name='caps' className='w-[40px] h-[47px]' />
                </Link>

                {['Z','X','C','V', 'B', 'N','M'].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}

                <Link to='' onClick={() => changeLang('ru') } className='flex justify-center items-center w-[342px] border border-[#e6e6e6] rounded-[5px]'>
                    <Icons name='union' className='w-[50px] h-[50px]' />
                </Link>
            </div>
        </>
    )
}

export default EngSearchKeywords;