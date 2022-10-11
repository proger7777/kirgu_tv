import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { setImagePath } from "./services/images";
import { truncate } from "./services/str";
import Icons from "./Icons";
import { getProduct, setProductUrl } from "./services/product";
import { useFetching } from '../hooks/useFetching';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesAction } from '../store/addFavorites';
import { cartAction } from '../store/addCart';
import { comparisonAction } from '../store/addComparison';



const CatalogItem = ({ cat, catalogId, fromAllCats }) => {

    const [inFavorites, setInFavorites] = useState(false)

    const [inCart, setInCart] = useState(false)

    const [inComparison, setInComparison] = useState(false)

    const [article, setArticle] = useState('')

    const cart = useSelector(state => state.cart.cart)
    const favorites = useSelector(state => state.favorites.favorites)
    const comparison = useSelector(state => state.comparison.comparison)

    const dispatch = useDispatch()

    const add = (type) => {
        const item = {
            product: cat,
            catId: catalogId,
        }

        if (type == cart) { dispatch(cartAction(item)) }
        if (type == favorites) { dispatch(favoritesAction(item)) }
        if (type == comparison) { dispatch(comparisonAction(item)) }

    }

    const checkIn = (item) => {

        const exist = item.find((item) => item.product.xml_id == cat.id || item.product.id == cat.id || item.product.id == cat.xml_id)

        if (item == cart) { setInCart(exist ? true : false) }
        if (item == favorites) { setInFavorites(exist ? true : false) }
        if (item == comparison) { setInComparison(exist ? true : false) }

    }

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resProduct = await getProduct(id)
        setArticle(resProduct.properties)
    })


    const image = (cat) => {

        if (cat.image_url) { return cat.image_url }
        else if (cat.images[0]) { return cat.images[0][1] }

    }

    useEffect(() => {

        [cart, favorites, comparison].map((item) => {

            checkIn(item)

        })

        fetchProduct(cat.category, cat.id)

    }, [cart, favorites, comparison])

    return (

        <div className='border border-[#e6e6e6] items-center flex flex-col'>

            <Link to={setProductUrl(catalogId, cat.id, fromAllCats)} className='product_item flex flex-col items-center w-[320px] h-[335px]  pl-[20px] pr-[30px]'>

                <img src={setImagePath(image(cat))} alt='' className='object-contain h-[162px] mt-[20px] mb-[10px]' />

                <span className='flex mb-[10px]'>
                    {[1, 2, 3, 4, 5].map(i =>
                        <Icons key={i} name='star' className={`w-[16px] h-[16px] ${cat.rating >= i ? 'fill-[#f0a83c]' : 'fill-[#e6e6e6]'}`} />
                    )}
                </span>

                <p className='text-[22px] text-center mb-[7px] w-[220px] h-[55px]'>{truncate(cat.name, 30)}</p>
                <p className='text-[12px] text-slate-500'>Артикул: {article['Артикул']}</p>
                <p className='text-green text-[28px]'>{parseInt(cat.price).toLocaleString('ru-RU')} ₽</p>

            </Link>

            <div className='flex w-[255px] justify-between '>

                {inCart ? (

                    <button className={`cart focus:outline-none flex items-center justify-center border border-[#008954] h-[35px] w-[170px] mt-[10px] mb-[12px] rounded-[4px] bg-[#008954]`} onClick={() => { add(cart); checkIn(cart) }}>

                        <p className={`cart text-[16px] text-white pl-[5px]`}> Добавлено</p>

                        <Icons name={'checkV2'} color={'#ffffff'} className={`cart w-[20px] h-[20px]`} />

                    </button>


                ) : (

                    <button className={`focus:outline-none cart flex items-center justify-center border border-[#008954] h-[35px] w-[170px] mt-[10px] mb-[12px] rounded-[4px]`} onClick={() => { add(cart); checkIn(cart) }}>

                        <Icons name={'shopCart'} color={'#008954'} className={`cart w-[20px] h-[20px]`} />

                        <p className={`cart text-[16px] text-green pl-[5px]`}>В корзину</p>

                    </button>

                )}

                {inFavorites ? (

                    <button className={`favorites focus:outline-none flex items-center border border-[#008954] h-[35px] mt-[10px] mb-[12px] rounded-[4px] bg-[#008954]`} onClick={() => { add(favorites); checkIn(favorites) }}>

                        <div className='favorites h-[35px] w-[35px] flex justify-center items-center'>
                            <Icons name={'heart'} color={'#ffffff'} className={`favorites w-[25px] h-[25px] `} />
                        </div>

                    </button>


                ) : (

                    <button className={`favorites focus:outline-none flex items-center border border-[#008954] h-[35px] mt-[10px] mb-[12px] rounded-[4px]`} onClick={() => { add(favorites); checkIn(favorites) }}>

                        <div className='favorites h-[35px] w-[35px] flex justify-center items-center'>
                            <Icons name={'heart'} color={'#008954'} className={`favorites w-[25px] h-[25px] `} />
                        </div>

                    </button>

                )}

                {inComparison ? (

                    <button className={`focus:outline-none flex items-center border border-[#008954] h-[35px] mt-[10px] mb-[12px] rounded-[4px] bg-[#008954]`} onClick={() => { add(comparison); checkIn(comparison) }}>

                        <div className='h-[35px] w-[35px] flex justify-center items-center'>
                            <Icons name={'scales'} color={'#ffffff'} className={`w-[25px] h-[25px] `} />
                        </div>

                    </button>


                ) : (

                    <button className={`focus:outline-none flex items-center border border-[#008954] h-[35px] mt-[10px] mb-[12px] rounded-[4px]`} onClick={() => { add(comparison); checkIn(comparison) }}>

                        <div className='favorites h-[35px] w-[35px] flex justify-center items-center'>
                            <Icons name={'scales'} color={'#008954'} className={`w-[25px] h-[25px] `} />
                        </div>

                    </button>

                )}

            </div>

        </div>

    )

}

export default CatalogItem;