import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate } from "./services/str";
import Icons from "./Icons";
import { setProductUrl } from "./services/product";
import { addComparison, addFavorites } from './AddFavorite';


const CompareProducts = ({ cat, catalogId, params }) => {

    const [inFavorites, setInFavorites] = useState(false)

    const checkInFavorites = () => {

        const favorites = localStorage.favorites ? JSON.parse(localStorage.getItem('favorites')) : []

        const exist = favorites.find((item) => item.xml_id == cat.id || item.id == cat.id || item.id == cat.xml_id)

        setInFavorites(exist ? true : false)

    }

    function image(cat) {

        if (cat.image_url) { return cat.image_url }
        else if (cat.images) { return cat.images[0][1] }

    }

    useEffect(() => {

        checkInFavorites()

    }, [])

    return (

        <div className='border border-[#e6e6e6] items-center flex mb-[5px] w-[332px]'>

            <Link to={setProductUrl(cat.category, cat.id)} className='product_item flex w-[150px] justify-center'>

                <img src={setImagePath(image(cat))} alt='' className='object-contain h-[120px]' />

            </Link>

            <div className='flex flex-col items-start'>

                <p className='text-[16px] text-start ml-[10px] '>{truncate(cat.name, 30)}</p>

                <div className='flex w-full justify-start mt-[10px] ml-[10px]'>

                    {inFavorites ? (

                        <button className={`favorites focus:outline-none flex items-center border border-[#008954] h-[30px] w-[120px] rounded-[4px] bg-[#008954]`} onClick={() => { addFavorites(cat, catalogId); checkInFavorites() }}>

                            <div className='favorites h-[30px] w-[30px] border-r border-[#e6e6e6] flex justify-center items-center'>

                                <Icons name={'xclose'} color={'#ffffff'} className={`favorites w-[18px] h-[18px]`} />

                            </div>

                            <p className={`favorites text-[10px] text-white pl-[5px]`}> Добавлено</p>

                        </button>


                    ) : (

                        <button className={`favorites focus:outline-none flex items-center border border-[#008954] h-[30px] w-[120px] rounded-[4px]`} onClick={() => { addFavorites(cat, catalogId); checkInFavorites() }}>

                            <div className='favorites h-[30px] w-[30px] border-r border-[#008954] flex justify-center items-center'>

                                <Icons name={'add'} color={'#008954'} className={`favorites w-[18px] h-[18px]`} />

                            </div>

                            <p className={`favorites text-[10px] text-green pl-[5px]`}>В избранное</p>

                        </button>

                    )}

                    <button className={`compareIt focus:outline-none flex items-center border border-[#e6e6e6] w-[30px] h-[30px] ml-[10px] rounded-[4px]`} onClick={() => { addComparison(cat, catalogId); params(catalogId) }}>

                        <div className='compareIt h-[30px] w-[30px] flex justify-center items-center'>

                            <Icons name={'deleteV2'} color={'#ffffff'} className={`compareIt w-[16px] h-[16px] `} />

                        </div>

                    </button>

                </div>

            </div>

        </div>

    )

}

export default CompareProducts;