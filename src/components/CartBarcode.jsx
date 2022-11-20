import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Barcode from 'react-barcode';
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../layout";
import Icons from "./Icons";

const CartBarcode = () => {

    const [cartId, setCartId] = useState()

    const params = useParams()

    const navigate = useNavigate();

    useEffect(() => {

        getCart(params.cart)

    }, [])

    const getCart = async (cart) => {

        const response = await axios.get(`https://kirgu.ru/proxy/?url=http://public.kirgu.ru:81/mobile/HS/exchangemobileapp/cart_shopping_entry/${cart}`)
        
        setCartId(response.data.НомерКорзины)
    }



    const crumbs = [['Корзина', 'cart'], ['Поделиться', 'cartBarcode']]


    return (
        <Layout crumbs={crumbs} activeMenu='cartBarcode'>

            <div className="w-full">

                <div className='flex justify-between items-center'>

                    <h2 className='text-[28px] font-semibold'>Поделиться</h2>

                    <button className="w-[30px] h-[30px]" onClick={() => { navigate(-1) }}>

                        <Icons name='close' className={` w-[30px] h-[30px]`} />

                    </button>

                </div>


                <div className="flex flex-col items-center">

                    <p className="text-[50px] text-green font-semibold">Сгенерирован штрих-код</p>
                    <p className="text-[22px]">сфотографируйте и покажите штрих код консультанту для оформления заказа</p>

                    <div className="mt-[50px]">

                        <Barcode value={cartId} width={2.5} height={144} />

                    </div>

                    <div className="mt-[80px] p-[30px] bg-[#00895420] w-full flex flex-col items-center">

                        <p className="text-[26px]">Узнать более подробную информацию и оформить </p>
                        <p className="text-[26px]">заказ можно по номерам:</p>

                        <div className="flex mt-[40px] w-[870px] justify-between">

                            <div>

                                <p className="text-[18px]">консультация в Whatsapp</p>
                                <p className="text-[45px] text-green font-semibold">8-988-204-21-01</p>

                            </div>

                            <div className="ml-[]">

                                <p className="text-[18px]">консультация по телефону</p>
                                <p className="text-[45px] text-green font-semibold">8-800-770-30-03</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </Layout>
    )
};

export default CartBarcode