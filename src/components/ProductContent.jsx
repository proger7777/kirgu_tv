import React, { } from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context";
import Icons from "./Icons";
import ProductDescBlock from "./ProductDescBlock";
import ProductInfoBlock from "./ProductInfoBlock";
import ProductMenuList from "./ProductMenuList";
import ProductPropsBlock from "./ProductPropsBlock";
import ProductReviewsBlock from "./ProductReviewsBlock";
import { changeOffer } from "./services/product";

const ProductContent = ({ item, fromAllCats }) => {

    const [product, setProduct] = useState(item)

    const navigate = useNavigate()

    const prMenuList = [
        ['info', 'Информация о товаре'],
        ['desc', 'Описание'],
        ['props', 'Характеристики'],
        //['reviews', `Отзывы (${item.reviewsData.reviewsCount})`]
    ]

    // Если описание пустое (не берем в расчет, что описание содержит наименование продукта), то удаляет пункт
    if (item.description === item.name) prMenuList.splice(1, 1)

    const [activePart, setActivePart] = useState(prMenuList[0][0])

    function openPartFnc(currEl, part) {
        setActivePart(part)
    }


    function onChangeOffer(val) {
        item = changeOffer(item, val)
        setProduct({ ...item })
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
                <ProductContext.Provider value={{ onChangeOffer, fromAllCats }}>
                    <ProductInfoBlock item={product} open={activePart === 'info'} />
                    {product.description !== product.name && <ProductDescBlock item={product} open={activePart === 'desc'} />}
                    <ProductPropsBlock item={product} open={activePart === 'props'} />
                    {/* <ProductReviewsBlock item={product} open={activePart === 'reviews'} /> */}
                </ProductContext.Provider>
            </div>
        </div>
    )
}

export default ProductContent;

