import { Link } from "react-router-dom";
import Icons from "./Icons";

const RusSearchKeywords = ({write, changeLang}) => {

    return(
        <>
            <div className='flex justify-center space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                {['Й','У','К','Е', 'Н', 'Г','Ш','Щ','З', 'Х', 'Ъ'].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}
            </div>
            
            <div className='flex justify-center space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                {['Ф','Ы','В','А', 'П', 'Р','О','Л','Д', 'Ж', 'Э'].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}
            </div>
            
            <div className='flex justify-center space-x-[20px] h-[130px] text-[40px] mb-[20px]'>
                <Link to='' className='caps flex justify-center items-center w-[197px] border border-[#e6e6e6] rounded-[5px]'>
                    <Icons name='caps' className='w-[40px] h-[47px]' />
                </Link>

                {['Я','Ч','С','М', 'И', 'Т','Ь','Б','Ю'].map(i =>
                    <span key={i} onClick={ () => write(i) } className='flex justify-center items-center w-[125px] border border-[#e6e6e6] rounded-[5px] cursor-pointer'>{i}</span>
                )}

                <Link to='' onClick={() => changeLang('en') } className='flex justify-center items-center w-[197px] border border-[#e6e6e6] rounded-[5px]'>
                    <Icons name='union' className='w-[50px] h-[50px]' />
                </Link>
            </div>
        </>
    )
}

export default RusSearchKeywords;