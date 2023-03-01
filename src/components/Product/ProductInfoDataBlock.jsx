import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Icons from "../Icons";
import { ProductContext } from "../../context";
import { setProductUrl } from "../services/product";
import { useDispatch, useSelector } from 'react-redux';
import { favoritesAction } from '../../store/addFavorites';
import { cartAction } from '../../store/addCart';
import { comparisonAction } from '../../store/addComparison';

const ProductInfoDataBlock = ({ item, catId }) => {

    const { onChangeOffer, fromAllCats } = useContext(ProductContext)

    const [inFavorites, setInFavorites] = useState(false)

    const [inCart, setInCart] = useState(false)

    const [inComparison, setInComparison] = useState(false)

    const cart = useSelector(state => state.cart.cart)
    const favorites = useSelector(state => state.favorites.favorites)
    const comparison = useSelector(state => state.comparison.comparison)

    const dispatch = useDispatch()

    const add = (type) => {
        item.count = 1
        const items = {
            product: item,
            catId: catId,
        }

        if (type == 'cart') { dispatch(cartAction(items)) }
        if (type == 'favorites') { dispatch(favoritesAction(items)) }
        if (type == 'comparison') { dispatch(comparisonAction(items)) }

    }

    const checkIn = (type) => {

        const exist = type.find((items) => items.product.xml_id == item.id || items.product.id == item.id || items.product.id == item.xml_id)

        if (type == cart) { setInCart(exist ? true : false) }
        if (type == favorites) { setInFavorites(exist ? true : false) }
        if (type == comparison) { setInComparison(exist ? true : false) }

    }

    useEffect(() => {

        [cart, favorites, comparison].map((items) => {

            checkIn(items)

        })

    }, [favorites, cart, comparison])


    let offersOptions = []

    if (item.offers) {
        item.offers.forEach(i => {
            const label = i.name.match(/\((.+?)\)/)[1]
            offersOptions.push({ value: i.id, label: label })
        })
    }

    const [activeOffer, setActiveOffer] = useState(offersOptions[0])

    function setOffer(selectOffer) {
        setActiveOffer(selectOffer)
        onChangeOffer(selectOffer.value)
    }

    const price = item.modulesPrice ? item.modulesPrice : item.price

    return (
        <div className='w-[420px] border border-[#e6e6e6] rounded-[5px] p-[50px] pb-0'>
            <p>
                <span className='text-[28px] mr-[9px]'>{item.name}</span>
                {item.properties.Артикул && <span className='text-[14px] text-[#8f8f8f]'>#{item.properties.Артикул}</span>}
            </p>

            <div className='flex items-center mt-[20px]'>
                <span className='text-[24px] font-semibold mr-[10px]'>{price.toLocaleString('ru-RU')} ₽</span>

                {item.old_price > 0 && <span className='text-[14px] text-[#8F8F8F] line-through'>{item.old_price.toLocaleString('ru-RU')} ₽</span>}
            </div>
            {item.bonus > 0 && <p className='text-green text-[12px] font-semibold'>+{item.bonus.toLocaleString('ru-RU')} бонусов за покупку</p>}

            <div className=' mt-[50px] mb-[50px] h-[1px] bg-[#e6e6e6]'></div>

            <div className='flex mb-[15px]'>
                <Icons name='check' className='w-[24px] h-[24px]' />
                <div className='ml-[12px]'>
                    {item.product_label === 'Нет в наличии'
                        ? <p className='text-[16px]'>{item.product_label}</p>
                        : <p className='text-[16px]'>В наличии <span className='font-bold'>{item.product_label.toLowerCase()}</span></p>
                    }
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

            {item.offers &&
                <>
                    <p className='text-[16px] font-semibold mt-[30px] mb-[10px]'>Опции</p>
                    {offersOptions.map(i =>
                        <button key={i.value} onClick={() => setOffer(i)} className={`${i.value === activeOffer.value && 'border-green'} flex mb-[10px] items-center pl-[12px] pr-[12px] h-[35px] rounded-[4px] border text-[14px] cursor-pointer`}>{i.label}</button>
                    )}
                </>
            }

            {item.modules &&
                <>
                    <p className='text-[16px] font-semibold mt-[30px] mb-[10px]'>Модули</p>
                    {item.modules.map(i =>
                        <Link key={i.id} to={setProductUrl(item.section, i.id, fromAllCats)} className='table mb-[10px] pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-[4px] border text-[14px]'>{i.name}</Link>
                    )}
                </>
            }

            <>
                {inCart ? (

                    <button className={`focus:outline-none flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[35px] mb-[10px] rounded-[4px] bg-[#008954]`} onClick={() => { add('cart'); checkIn(cart) }}>

                        <div className='h-[60px] w-[60px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'checkV2'} color={'#ffffff'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-white pl-[20px]`}>Добавлено</p>

                    </button>

                ) : (

                    <button className={`focus:outline-none flex items-center border border-[#008954] h-[60px] w-[330px] mt-[35px] mb-[10px] rounded-[4px]`} onClick={() => { add('cart'); checkIn(cart) }}>

                        <div className='h-[60px] w-[60px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'shopCart'} color={'#008954'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-green pl-[20px]`}>В корзину</p>

                    </button>

                )}
            </>

            <>
                {inFavorites ? (

                    <button className={`focus:outline-none flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[15px] mb-[10px] rounded-[4px] bg-[#008954]`} onClick={() => { add('favorites'); checkIn(favorites) }}>

                        <div className='h-[60px] w-[60px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'heart'} color={'#ffffff'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-white pl-[20px]`}>Добавлено</p>

                    </button>

                ) : (

                    <button className={`focus:outline-none flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[15px] mb-[10px] rounded-[4px]`} onClick={() => { add('favorites'); checkIn(favorites) }}>

                        <div className='h-[60px] w-[60px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'add'} color={'#008954'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-green pl-[20px]`}>В избранное</p>

                    </button>

                )}
            </>

            <>
                {inComparison ? (

                    <button className={`focus:outline-none flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[15px] mb-[10px] rounded-[4px] bg-[#008954]`} onClick={() => { add('comparison'); checkIn(comparison) }}>

                        <div className='h-[60px] w-[60px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'scales'} color={'#ffffff'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-white pl-[20px]`}>Сравнить</p>

                    </button>

                ) : (

                    <button className={`focus:outline-none flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[15px] mb-[10px] rounded-[4px]`} onClick={() => { add('comparison'); checkIn(comparison) }}>

                        <div className='h-[60px] w-[60px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'scales'} color={'#008954'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-green pl-[20px]`}>Сравнить</p>

                    </button>

                )}
            </>

        </div>
    )
}

export default ProductInfoDataBlock;