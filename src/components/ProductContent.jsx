import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icons from "./Icons";
import ProductDescBlock from "./ProductDescBlock";
import ProductInfoBlock from "./ProductInfoBlock";
import ProductMenuList from "./ProductMenuList";
import ProductPropsBlock from "./ProductPropsBlock";
import ProductReviewsBlock from "./ProductReviewsBlock";

const ProductContent = ({item}) => {

    const navigate = useNavigate()

    const [activePart, setActivePart] = useState('info')

    const prMenuList = [
        ['info', 'Информация о товаре'], 
        ['desc', 'Описание'], 
        ['props', 'Характеристики'],
        ['reviews', `Отзывы (${item.reviewsData.reviewsCount})`]
    ]

    // Если описание пустое (не берем в расчет, что описание содержит наименование продукта), то удаляет пункт
    if(item.description === item.name) prMenuList.splice(1,1)
    
    function openPartFnc(currEl, part) {
        setActivePart(part)
    }

    return (
        <div className='flex flex-col overflow-y-auto w-full'>
            <nav className='fixed flex bg-white w-[1720px] border-b border-[#e6e6e6] text-[24px] text-[#505050]'>
                <ProductMenuList prMenuList={prMenuList} activePart={activePart} openPartFnc={openPartFnc} />
              
                <Link to='' onClick={() => navigate(-1)} className='absolute right-0 w-[24px] h-[24px] mt-[7px]'>
                    <Icons name='close' className='w-[24px] h-[24px]' />
                </Link>
            </nav>

            <div className='mt-[100px]'>
                <ProductInfoBlock item={item} open={activePart === 'info'} />
                {item.description !== item.name && <ProductDescBlock item={item} open={activePart === 'desc'} />}
                <ProductPropsBlock item={item} open={activePart === 'props'} />
                <ProductReviewsBlock item={item} open={activePart === 'reviews'} />
                
                {/*  <div data-page_type='props' class='hidden pb-[30px]'><%= render 'product_props' %></div>
                <div data-page_type='reviews' class='hidden'><%= render 'product_reviews' %></div> */}
            </div>
        </div>
    )
}

export default ProductContent;

