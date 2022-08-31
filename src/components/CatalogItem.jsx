import React, { } from 'react';
import localforage from "localforage";
import { Link } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate } from "./services/str";
import Icons from "./Icons";
import { setProductUrl } from "./services/product";
import ProductPropsBlock from './ProductPropsBlock';
import { getProduct } from './services/product';
import { addFavorites } from './AddFavorite';
import { addCompare } from './AddCompare';
import { useEffect } from 'react';
import { useState } from 'react';

const CatalogItem = ({ cat, catalogId, fromAllCats, removeF, removeC, articleItem, saveC }) => {

    if (articleItem !== undefined) articleItem = articleItem.filter(it => it.id == cat.site_id || it.id == cat.id)

    const removClickF = (cat) => {
        removeF === undefined ? removeF = null : removeF(cat)
    }

    const removClickC = (cat) => {
        removeC === undefined ? removeC = null : removeC(cat)
    }




    const [inFavorites, setInFavorites] = useState(false)

    const checkInFavorites = () => {

        const favorites = localStorage.favorites ? JSON.parse(localStorage.getItem('favorites')) : []

        const exist = favorites.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)

        setInFavorites(exist ? true : false)

    }


    const [compare, setCompare] = useState(false)

    const checkCompare = () => {

        const compares = localStorage.compare ? JSON.parse(localStorage.getItem('compare')) : []

        const exist = compares.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)

        setCompare(exist ? true : false)

    }


    function image(cat) {

        if (cat.image_url) { return cat.image_url }
        else { return cat.images[0] }

    }

    let activePart = 'props'

    useEffect(() => {

        checkInFavorites()

        checkCompare()

    }, [])

    return (
        <div className='flex justify-content-center relative mr-[10px] mb-[10px]'>
            <div className='border border-[#e6e6e6] items-center flex flex-col'>

                <Link to={setProductUrl(catalogId, cat.id, fromAllCats)} className='product_item flex flex-col items-center w-[322px] h-[280px]  pl-[20px] pr-[20px]'>

                    <img src={setImagePath(image(cat))} alt='' className='object-contain h-[152px] mt-[10px] mb-[5px]' />

                    <span className='flex mb-[10px]'>
                        {[1, 2, 3, 4, 5].map(i =>
                            <Icons key={i} name='star' className={`w-[16px] h-[16px] ${cat.rating >= i ? 'fill-[#f0a83c]' : 'fill-[#e6e6e6]'}`} />
                        )}
                    </span>

                    <p className='text-[18px] text-center mb-[0px]'>{truncate(cat.name, 30)}</p>
                    <p className='text-green text-[20px]'>{parseInt(cat.price || cat.price_1).toLocaleString('ru-RU')} ₽</p>

                </Link>

                {articleItem !== undefined ?
                    articleItem.map((item, index) => <p key={index} className='text-[18px] font-normal font-semibold mb-[20px] text-[#008954]'>Артикул товара: {item.properties.Артикул}</p>)
                    :
                    <p className='text-[17px] font-semibold mb-[5px] text-black'></p>
                }

                {inFavorites ? (

                    <button className={`flex item-start items-center border border-[#008954] h-[30px] w-[150px] mb-[5px] rounded-[4px] bg-[#008954]`} onClick={() => { addFavorites(cat); checkInFavorites(); removClickF(cat) }}>

                        <div className='h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'xclose'} color={'#ffffff'} className={`w-[20px] h-[20px] `} />
                        </div>

                        <p className={`text-[16px] text-white p-[10px]`}> Добавлено</p>
                    </button>

                ) : (

                    <button className={`flex items-start items-center border border-[#008954] h-[30px] w-[150px] mb-[5px] rounded-[4px]`} onClick={() => { addFavorites(cat); checkInFavorites(); getProduct(cat.id) }}>

                        <div className='h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'add'} color={'#008954'} className={`w-[20px] h-[20px]`} />
                        </div>

                        <p className={`text-[16px] text-[#008954] p-[10px]`}>В избранное</p>

                    </button>

                )}

                {compare ? (

                    <button className={`flex item-start items-center border border-[#008954] h-[30px] w-[150px] mb-[20px] rounded-[4px] bg-[#008954]`} onClick={() => { addCompare(cat); getProduct(cat);  checkCompare(); removClickC(cat) }}>

                        <div className='h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'xclose'} color={'#ffffff'} className={`w-[20px] h-[20px] `} />
                        </div>

                        <p className={`text-[16px] text-white p-[10px]`}>В сравнении</p>
                    </button>

                ) : (

                    <button className={`flex items-start items-center border border-[#008954] h-[30px] w-[150px] mb-[20px] rounded-[4px]`} onClick={() => { addCompare(cat); getProduct(cat); checkCompare() }}>

                        <div className='h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'arrow-left-right'} color={'#008954'} className={`w-[20px] h-[20px]`} />
                        </div>

                        <p className={`text-[16px] text-[#008954] p-[10px]`}>Сравнить</p>

                    </button>

                )}

                {/* {saveC.map(it =>
                    <ProductPropsBlock item={it} open={activePart} />
                )} */}

            </div>
        </div>

    )

}

export default CatalogItem;