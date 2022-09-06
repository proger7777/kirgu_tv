import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate } from "./services/str";
import Icons from "./Icons";
import { getProduct, setProductUrl } from "./services/product";
import { addComparison, addFavorites } from './AddFavorite';
import { useFetching } from '../hooks/useFetching';
import Loadering from './Loadering';


const CompareItem = ({ cat, catalogId, propList }) => {

    const [propsProduct, setPropsProduct] = useState()

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resProduct = await getProduct(id)
        setPropsProduct(resProduct)
    })


    const [inFavorites, setInFavorites] = useState(false)

    const checkInFavorites = () => {

        const favorites = localStorage.favorites ? JSON.parse(localStorage.getItem('favorites')) : []

        const exist = favorites.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)

        setInFavorites(exist ? true : false)

    }




    function image(cat) {

        if (cat.image_url) { return cat.image_url }
        else { return cat.images[0][1] }

    }

    useEffect(() => {
        
        checkInFavorites()
        fetchProduct(cat.category, cat.id)

    }, [])




    const propsBlackList = ['Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой', 'Акции', 'Рассрочка']




    return (

        <div className='border border-[#e6e6e6] items-center flex flex-col'>
            {isProductLoading
                ? <Loadering />
                : <>
                    <Link to={setProductUrl(cat.category, cat.id)} >
                        <div className='product_item flex flex-col items-center w-[342px] h-[355px] pl-[20px] pr-[30px]'>
                            <img src={setImagePath(image(cat))} alt='' className='object-contain h-[162px] mt-[20px] mb-[10px]' />

                            <span className='flex mb-[10px]'>
                                {[1, 2, 3, 4, 5].map(i =>
                                    <Icons key={i} name='star' className={`w-[16px] h-[16px] ${cat.rating >= i ? 'fill-[#f0a83c]' : 'fill-[#e6e6e6]'}`} />
                                )}
                            </span>

                            <p className='text-[22px] text-center mb-[5px]'>{truncate(cat.name, 30)}</p>
                            <p className='text-green text-[28px]'>{parseInt(cat.price).toLocaleString('ru-RU')} ₽</p>

                        </div>

                    </Link>
                    {/* <div className='border-b w-[342px] flex justify-center'> */}
                        <div className='flex w-full justify-center border-b'>
                            {inFavorites ? (

                                <button className={`focus:outline-none favorites flex items-center border border-[#008954] h-[30px] w-[140px]  mb-[18px] rounded-[4px] bg-[#008954]`} onClick={() => { addFavorites(cat, catalogId); checkInFavorites() }}>

                                    <div className='h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>
                                        <Icons name={'xclose'} color={'#ffffff'} className={`w-[20px] h-[20px] `} />
                                    </div>

                                    <p className={`text-[16px] text-white pl-[5px]`}> Добавлено</p>

                                </button>


                            ) : (

                                <button className={`focus:outline-none favorites flex items-center border border-[#008954] h-[30px] w-[140px]  mb-[18px] rounded-[4px]`} onClick={() => { addFavorites(cat, catalogId); checkInFavorites() }}>

                                    <div className='favorites h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>
                                        <Icons name={'add'} color={'#008954'} className={`favorites w-[20px] h-[20px]`} />
                                    </div>

                                    <p className={`favorites text-[16px] text-green pl-[5px]`}>В избранное</p>

                                </button>

                            )}

                            <button className={`comparisonIt focus:outline-none flex items-center border border-[#008954] h-[30px]  mb-[18px] ml-[20px] rounded-[4px] bg-[#008954]`} onClick={() => { addComparison(cat, catalogId) }}>

                                <div className='comparisonIt h-[30px] w-[30px] flex justify-center items-center'>
                                    <Icons name={'scales'} color={'#ffffff'} className={`comparisonIt w-[20px] h-[20px] `} />
                                </div>

                            </button>

                        </div>
                    {/* </div> */}

                    {(propsProduct) ? (
                        propsProduct.properties ? propList.map(key =>
                            key && !propsBlackList.includes(key) &&
                            <div key={key} className='mb-[7px] h-[50px] w-full flex p-[5px] text-[16px] rounded-[4px] border-b border-[#e6e6e6]'>
                                <div className='text-start' dangerouslySetInnerHTML={{ __html: propsProduct.properties[key] }}></div>
                            </div>
                        )
                            : <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>) : (<>пустое значение</>)
                    }

                </>}
        </div>

    )

}

export default CompareItem;