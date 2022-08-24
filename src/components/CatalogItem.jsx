import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate } from "./services/str";
import Icons from "./Icons";
import { setProductUrl } from "./services/product";
import { addFavorites } from './AddFavorite';


const CatalogItem = ({ cat, catalogId, fromAllCats }) => {

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

    }, [])

    return (

        <div className='border border-[#e6e6e6] items-center flex flex-col'>

            <Link to={setProductUrl(catalogId, cat.id, fromAllCats)} className='product_item flex flex-col items-center w-[322px] h-[335px]  pl-[20px] pr-[30px]'>

                <img src={setImagePath(image(cat))} alt='' className='object-contain h-[162px] mt-[20px] mb-[10px]' />

                <span className='flex mb-[10px]'>
                    {[1, 2, 3, 4, 5].map(i =>
                        <Icons key={i} name='star' className={`w-[16px] h-[16px] ${cat.rating >= i ? 'fill-[#f0a83c]' : 'fill-[#e6e6e6]'}`} />
                    )}
                </span>

                <p className='text-[22px] text-center mb-[5px]'>{truncate(cat.name, 30)}</p>
                <p className='text-green text-[28px]'>{parseInt(cat.price).toLocaleString('ru-RU')} ₽</p>

            </Link>

            {inFavorites ? (

                <button className={`focus:outline-none flex item-start items-center border border-[#008954] h-[30px] w-[150px] mt-[15px] mb-[18px] rounded-[4px] bg-[#008954]`} onClick={() => { addFavorites(cat); checkInFavorites() }}>
                
                    <div className='h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>
                        <Icons name={'xclose'} color={'#ffffff'} className={`w-[20px] h-[20px] `} />
                    </div>

                    <p className={`text-[16px] text-white pl-[10px]`}> Добавлено</p>
                </button>

            ) : (

                <button className={`focus:outline-none favorites flex items-start items-center border border-[#008954] h-[30px] w-[150px] mt-[15px] mb-[18px] rounded-[4px]`} onClick={() => { addFavorites(cat); checkInFavorites() }}>
                    
                    <div className='favorites h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>
                        <Icons name={'add'} color={'#008954'} className={`favorites w-[20px] h-[20px]`} />
                    </div>

                    <p className={`favorites text-[16px] text-green pl-[10px]`}>В избранное</p>

                </button>

            )}

        </div>

    )

}

export default CatalogItem;