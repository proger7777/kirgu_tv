import React, {  }  from 'react';
import { Link } from "react-router-dom";
import Icons from "./Icons";
import { useContext, useState } from "react";
import { ProductContext } from "../context";
import { setProductUrl } from "./services/product";
import { addFavorites } from './AddFavorite';
import { useEffect } from 'react';

const ProductInfoDataBlock = ({item}) => {

    console.log(item)

    const {onChangeOffer, fromAllCats} = useContext(ProductContext)

    const [inFavorites, setInFavorites] = useState(false)

    const checkInFavorites = () => {

        const favorites = localStorage.favorites ? JSON.parse(localStorage.getItem('favorites')) : []

        const exist = favorites.find((items) => items.xml_id == item.id || items.id == item.id || items.id == item.xml_id)
        
        setInFavorites(exist ? true : false)

    }

    useEffect(() => {

        checkInFavorites()

    }, [])

    let offersOptions = []

    if(item.offers) {
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

    return(
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

            <div className='mt-[50px] mb-[50px] h-[1px] bg-[#e6e6e6]'></div>

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
                        <button key={i.value} onClick={() => setOffer(i) } className={`${i.value === activeOffer.value && 'border-green'} flex mb-[10px] items-center pl-[12px] pr-[12px] h-[35px] rounded-[4px] border text-[14px] cursor-pointer`}>{i.label}</button>
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

            <p className='text-[17px] font-semibold mt-[20px] mb-[5px] text-green'>Артикул товара: {item.properties.Артикул}</p>
            <p className='text-[17px] font-semibold mt-[20px] mb-[5px] text-green'>Код товара: {item.id}</p>


            <>
                {inFavorites ? (

                    <button className={`flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[35px] mb-[18px] rounded-[4px] bg-[#008954]`} onClick={() => { addFavorites(item); checkInFavorites() }}>

                        <div className='h-[60px] w-[60px] border-r border-[#e6e6e6] flex justify-center items-center'>
                            <Icons name={'xclose'} color={'#ffffff'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-white p-[20px]`}>Добавлен</p>

                    </button>

                ) : (

                    <button className={`flex item-start items-center border border-[#008954] h-[60px] w-[330px] mt-[35px] mb-[18px] rounded-[4px]`} onClick={() => { addFavorites(item); checkInFavorites() }}>

                        <div className='h-[60px] w-[60px] border-r border-[#008954] flex justify-center items-center'>
                            <Icons name={'add'} color={'#008954'} className={`w-[30px] h-[30px] `} />
                        </div>

                        <p className={`text-[20px] text-green p-[20px]`}>В избранное</p>

                    </button>

                )}
            </>

        </div>
    )
}

export default ProductInfoDataBlock;