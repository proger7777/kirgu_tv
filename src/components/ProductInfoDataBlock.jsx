import { Link } from "react-router-dom";
import Icons from "./Icons";

const ProductInfoDataBlock = ({item}) => {

    return(
        <div className='w-[420px] border border-[#e6e6e6] rounded-[5px] p-[50px] pb-0'>
            <p>
                <span className='text-[28px] mr-[9px]'>{item.name}</span>
                <span className='text-[14px] text-[#8f8f8f]'>#{item.properties.Артикул}</span>
            </p>

            <div className='flex items-center mt-[20px]'>
                <span className='text-[24px] font-semibold mr-[10px]'>{item.price.toLocaleString('ru-RU')} ₽</span>
                {item.old_price > 0 && <span className='text-[14px] text-[#8F8F8F] line-through'>{item.old_price.toLocaleString('ru-RU')} ₽</span>}
            </div>

            {item.bonus > 0 && <p className='text-green text-[12px] font-semibold'>+{item.bonus} бонусов за покупку</p>}

            <div className='mt-[50px] mb-[50px] h-[1px] bg-[#e6e6e6]'></div>

            <div className='flex mb-[15px]'>
                <Icons name='check' className='w-[24px] h-[24px]' />
                <div className='ml-[12px]'>
                    <p className='text-[16px]'>В наличии <span className='font-bold'>{item.product_label.toLowerCase()}</span></p>
                    <Link to='' className='block text-green text-[14px] mt-[0px]'>Посмотреть наличие в магазинах</Link>
                </div>
            </div>

            <div className='flex mb-[15px]'>
                <Icons name='truck' className='w-[24px] h-[24px]' />
                <div className='ml-[12px]'>
                    <p className='text-[16px]'>Доставка курьером</p>
                    <Link to='' className='block text-[#505050] text-[14px] mt-[0px]'>от 150 ₽</Link>
                </div>
            </div>

            {item.product_label === 'На витрине' &&
                <div className='flex mb-[15px]'>
                    <Icons name='airplay' className='w-[24px] h-[24px]' />
                    <div className='ml-[12px]'><p className='text-[16px]'>На витрине</p></div>
                </div>
            }

        </div>
    )
}

export default ProductInfoDataBlock;