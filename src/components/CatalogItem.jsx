import { Link } from "react-router-dom";
import { setImagePath } from "../utils/images";
import { truncate } from "../utils/str";

const CatalogItem = ({cat, catalogId}) => {

    return (
        <Link to={`/catalog/${catalogId}/product/${cat.id}`} className='product_item flex flex-col items-center w-[322px] h-[350px] border border-[#e6e6e6] pl-[20px] pr-[20px]'>
            <img src={setImagePath(cat.image)} alt='' className='object-contain h-[162px] mt-[20px] mb-[12px]' />
            
            <span className='flex mb-[10px]'>
                {/* {[1,2,3,4,5].each(i => {
                    { color_cl = @ratings.present? && @ratings[inx]['TotalScore'].round >= i ? 'fill-[#f0a83c]' : 'fill-[#e6e6e6]' }
                    <Icons name='star' className='w-[16px] h-[16px] color_cl' />
                })} */}
            </span>

            <p className='text-[22px] text-center mb-[5px]'>{truncate(cat.name, 30)}</p>
            <p className='text-green text-[28px]'>{cat.price.toLocaleString('ru-RU')} ₽</p>
        </Link>
    )

}

export default CatalogItem;