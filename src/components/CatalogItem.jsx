import React, { } from 'react';
import localforage from "localforage";
import { Link } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate } from "./services/str";
import Icons from "./Icons";
import { setProductUrl } from "./services/product";
import KirguSource from './API/KirguSource';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteItemAction, removeFavoriteItemAction } from '../store/favoriteReducer';
import { addArticuleAction, removeArticuleAction } from '../store/articuleReducer';
import { addCompareItemAction, addCompareItemLittleAction, removeCompareItemAction, removeCompareItemLittleAction } from '../store/compareReducer';


const CatalogItem = ({ cat, catalogId, fromAllCats, removeF, articule2 }) => {

    const dispatch = useDispatch()

    const getArticule = (props) => {
        KirguSource.getProduct(props).then((result) => dispatch(addArticuleAction(result)))
    }

    const getCompare = (props) => {
        KirguSource.getProduct(props).then((result) => dispatch(addCompareItemAction(result)))
    }

    const favorite = useSelector(state => state.favorite.favoriteItem)

    const compare = useSelector(state => state.compare.compareItem)

    const removClickF = (cat) => {
        removeF === undefined ? removeF = null : removeF(cat)
    }

    const [inFavorites, setInFavorites] = useState(false)

    const checkInFavorites = () => {

        const exist = favorite.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)

        setInFavorites(exist ? true : false)

    }


    const [inCompare, setInCompare] = useState(false)

    const checkCompare = () => {

        const exist = compare.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)

        setInCompare(exist ? true : false)

    }

    useEffect(() => {

        checkCompare()

    }, [compare])

    useEffect(() => {

        checkInFavorites()

    }, [favorite])

    return (
        <div className='flex justify-content-center relative mr-[10px] mb-[10px]'>
            <div className='border border-[#e6e6e6] items-center flex flex-col'>

                <Link to={setProductUrl(catalogId, cat.id, fromAllCats)} className='product_item flex flex-col items-center w-[322px] h-[280px]  pl-[20px] pr-[20px]'>

                    <img src={setImagePath(cat.image_url || cat.images[0][1])} alt='' className='object-contain h-[152px] mt-[10px] mb-[5px]' />

                    <span className='flex mb-[10px]'>
                        {[1, 2, 3, 4, 5].map(i =>
                            <Icons key={i} name='star' className={`w-[16px] h-[16px] ${cat.rating >= i ? 'fill-[#f0a83c]' : 'fill-[#e6e6e6]'}`} />
                        )}
                    </span>

                    <p className='text-[18px] text-center mb-[0px]'>{truncate(cat.name, 30)}</p>
                    <p className='text-green text-[20px]'>{parseInt(cat.price || cat.price_1).toLocaleString('ru-RU')} ₽</p>

                </Link>

                {articule2 !== undefined ? (
                    articule2.filter(it => it.id == cat.site_id || it.id == cat.id ).map((item, index) => <p key={index} className='text-[18px] font-normal font-semibold mb-[20px] text-[#008954]'>Артикул товара: {item.properties.Артикул}</p>)
                )
                    :
                    <p className='text-[17px] font-semibold mb-[5px] text-black'></p>
                }

                {inFavorites ? (

                    <button className={`flex item-start items-center border border-[#008954] h-[30px] w-[150px] mb-[5px] rounded-[4px] bg-[#008954]`} onClick={() => { dispatch(removeFavoriteItemAction(cat)); checkInFavorites(); removClickF(cat);}}>

                        <div className='h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'xclose'} color={'#ffffff'} className={`w-[20px] h-[20px] `} />
                        </div>

                        <p className={`text-[16px] text-white p-[10px]`}> Добавлено</p>
                    </button>

                ) : (

                    <button className={`flex items-start items-center border border-[#008954] h-[30px] w-[150px] mb-[5px] rounded-[4px]`} onClick={() => { dispatch(addFavoriteItemAction(cat)); checkInFavorites(); getArticule(cat.id) }}>

                        <div className='h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'add'} color={'#008954'} className={`w-[20px] h-[20px]`} />
                        </div>

                        <p className={`text-[16px] text-[#008954] p-[10px]`}>В избранное</p>

                    </button>

                )}

                {inCompare ? (

                    <button className={`flex item-start items-center border border-[#008954] h-[30px] w-[150px] mb-[20px] rounded-[4px] bg-[#008954]`} onClick={() => {dispatch(removeCompareItemAction(cat)); dispatch(removeCompareItemLittleAction(cat)); checkCompare() }}>

                        <div className='h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'xclose'} color={'#ffffff'} className={`w-[20px] h-[20px] `} />
                        </div>

                        <p className={`text-[16px] text-white p-[10px]`}>В сравнении</p>
                    </button>

                ) : (

                    <button className={`flex items-start items-center border border-[#008954] h-[30px] w-[150px] mb-[20px] rounded-[4px]`} onClick={() => {getCompare(cat.id); dispatch(addCompareItemLittleAction(cat)) ; checkCompare() }}>

                        <div className='h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'arrow-left-right'} color={'#008954'} className={`w-[20px] h-[20px]`} />
                        </div>

                        <p className={`text-[16px] text-[#008954] p-[10px]`}>Сравнить</p>

                    </button>

                )}

            </div>
        </div>

    )

}

export default CatalogItem;