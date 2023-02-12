import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { setImagePath } from "../services/images";
import { truncate } from "../services/str";
import Icons from "../Icons";
import { setProductUrl } from "../services/product";
import { useDispatch, useSelector } from 'react-redux';
import { comparisonAction } from '../../store/addComparison';
import { favoritesAction } from '../../store/addFavorites';
import { cartAction } from '../../store/addCart';



const CompareProducts = ({ cat, catalogId }) => {

    const [inCart, setInCart] = useState(false)
    const [inFavorites, setInFavorites] = useState(false)

    const favorites = useSelector(state => state.favorites.favorites)
    const cart = useSelector(state => state.cart.cart)
    const comparison = useSelector(state => state.comparison.comparison)
    const dispatch = useDispatch()

    const add = (type) => {
        const item = {
            product: cat,
            catId: catalogId,
        }

        if (type == 'cart') { dispatch(cartAction(item)) }
        if (type == 'favorites') { dispatch(favoritesAction(item)) }
        if (type == 'comparison') { dispatch(comparisonAction(item)) }

    }

    const checkIn = (type) => {

        const exist = type.find((item) => item.product.xml_id == cat.id || item.product.id == cat.id || item.product.id == cat.xml_id)

        if (type == cart) { setInCart(exist ? true : false) }
        if (type == favorites) { setInFavorites(exist ? true : false) }

    }

    useEffect(() => {

        [cart, favorites].map((item) => {

            checkIn(item)

        })

    }, [favorites, cart])


    function image(cat) {

        if (cat.image_url) { return cat.image_url }
        else if (cat.images) { return cat.images[0][1] }

    }

    return (

        <div className='border border-[#e6e6e6] items-center flex mb-[5px] w-[332px]'>

            <Link to={setProductUrl(cat.category, cat.id)} className='product_item flex w-[150px] justify-center'>

                <img src={setImagePath(image(cat))} alt='' className='object-contain h-[120px]' />

            </Link>

            <div className='flex flex-col items-start'>

                <p className='text-[16px] text-start ml-[10px] '>{truncate(cat.name, 30)}</p>

                <div className='flex w-full justify-start mt-[10px] ml-[10px]'>

                    {inCart ? (

                        <button className={`focus:outline-none flex items-center justify-center border border-[#008954] h-[30px] w-[120px] rounded-[4px] bg-[#008954]`} onClick={() => { add('cart'); checkIn(cart) }}>

                            <p className={`text-[10px] text-white pl-[5px]`}> Добавлено</p>
                            <Icons name={'checkV2'} color={'#ffffff'} className={`cart w-[18px] h-[18px]`} />

                        </button>


                    ) : (

                        <button className={`focus:outline-none flex items-center justify-center border border-[#008954] h-[30px] w-[120px] rounded-[4px]`} onClick={() => { add('cart'); checkIn(cart) }}>

                            <Icons name={'shopCart'} color={'#008954'} className={`cart w-[18px] h-[18px]`} />
                            <p className={`text-[10px] text-green pl-[5px]`}>В корзину</p>

                        </button>

                    )}

                    {inFavorites ? (

                        <button className={`focus:outline-none flex items-center border border-[#008954] h-[30px] ml-[5px] rounded-[4px] bg-[#008954]`} onClick={() => { add('favorites'); checkIn(favorites) }}>

                            <div className='h-[30px] w-[30px] flex justify-center items-center'>
                                <Icons name={'heart'} color={'#ffffff'} className={`w-[25px] h-[25px] `} />
                            </div>

                        </button>


                    ) : (

                        <button className={`focus:outline-none flex items-center border border-[#008954] h-[30px] ml-[5px] rounded-[4px]`} onClick={() => { add('favorites'); checkIn(favorites) }}>

                            <div className='h-[30px] w-[30px] flex justify-center items-center'>
                                <Icons name={'heart'} color={'#008954'} className={`w-[25px] h-[25px] `} />
                            </div>

                        </button>

                    )}


                    <button className={`focus:outline-none flex items-center border border-[#e6e6e6] w-[30px] h-[30px] ml-[5px] rounded-[4px]`} onClick={() => { add('comparison') }}>

                        <div className='h-[30px] w-[30px] flex justify-center items-center'>

                            <Icons name={'deleteV2'} color={'#ffffff'} className={`w-[16px] h-[16px] `} />

                        </div>

                    </button>

                </div>

            </div>

        </div>

    )

}

export default CompareProducts;