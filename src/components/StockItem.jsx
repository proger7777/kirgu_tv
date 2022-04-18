import { Link } from "react-router-dom";
import { setImagePath } from "../utils/images";
import { truncate, getTitleFromLinkStock } from "../utils/str";

const StockItem = ({stock}) => {

    return(
        <Link to={'/info/stocks/' + getTitleFromLinkStock(stock.link)} className='flex mt-[50px] w-[70%]'>
            <img src={setImagePath(stock.image)} alt='' className='object-contain min-w-[333px] h-[250px]' />
            <span className='ml-[50px]'>
                <h3 className='text-[28px] font-600 mb-[15px]'>{stock.name}</h3>
                <span className='block text-[#505050] mb-[20px]'>{truncate(stock.description, 370)}</span>
                <Link to='' className='text-[#11A9FF] text-[24px] underline underline-offset-2'>Подробнее...</Link>
            </span>
        </Link>
    )

}


export default StockItem;