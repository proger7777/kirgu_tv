import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const InfoPriceCart = ({ products }) => {

    const [allPrice, setAllPrice] = useState(0)

    const [allDiscount, setAllDiscount] = useState(0)

    const [allBonus, setAllBonus] = useState(0)

    const [cart, setCart] = useState('')

    useEffect(() => {

        Info()
        sendCart()

    }, [products])


    function Info() {

        let price = 0
        let discount = 0
        let bonus = 0

        products.map((item) => {

            price = price + item.product.price

            if (item.product.bonusov) {

                bonus = bonus + Number(item.product.bonusov)

            } else if (item.product.bonus) {

                bonus = bonus + Number(item.product.bonus)

            }

            if (item.product.skidka) {

                discount = discount + Number(item.product.skidka)

            }

        })

        setAllPrice(price)
        setAllDiscount(discount)
        setAllBonus(bonus)

    }

    function sendCart() {

        let basket = []

        const check = (item) => {

            if (item.product.xml_id) {

                return {
                    id: item.product.xml_id,
                    price: item.product.price,
                    count: 1
                }
                
            } else {
                
                return {
                    id: item.product.id,
                    price: item.product.price,
                    count: 1
                }
            }
        }

        products.map((item) => basket.push(check(item)))
        setCart(JSON.stringify(basket))

    }




    return (

        <div className="w-[370px] h-[260px] mt-[15px] bg-[#FAFAFA] ml-[22px]">

            <div className="m-[20px]">

                <p className="text-[22px] mb-[20px] font-semibold">Ваша корзина</p>

                <div className="text-[18px] text-[#505050] pb-[20px] leading-[35px] border-b">

                    <div className="flex justify-between">

                        <p>Товары x{products.length}&nbsp;&nbsp;</p>
                        <p className="text-[#E6E6E6]">_ _ _ _ _ _ _ _ _ _ _ _ </p>
                        <p> {parseInt(allPrice).toLocaleString('ru-RU')} </p>

                    </div>

                    {(allDiscount > 0) ? (

                        <div className="flex justify-between">

                            <p>Скидка</p>
                            <p className="text-[#E6E6E6]">_ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>
                            <p className="text-[#E6141E]">- {parseInt(allDiscount).toLocaleString('ru-RU')} </p>

                        </div>

                    ) : (<></>)}

                    <div className="flex justify-between">

                        <p>Бонусы за покупку</p>
                        <p className="text-[#E6E6E6]"> _ _ _ _ _ _ _ </p>
                        <p className="text-[#008954]">+  {parseInt(allBonus).toLocaleString('ru-RU')} </p>

                    </div>

                </div>

                <div className="flex justify-between font-semibold">

                    <p className="text-[22px] ">Итого :</p>
                    <p> {parseInt(allPrice - allDiscount).toLocaleString('ru-RU')} ₽</p>

                </div>


                {products.length ? (

                    <Link to={`/cartBarcode/${cart}`}>

                        <button className="w-full h-[50px] border rounded-[4px] bg-[#008954] mt-[20px]" onClick={() => sendCart()}>

                            <p className="text-[18px] text-center text-[#ffffff]">Сохранить корзину</p>

                        </button>

                    </Link>

                ) : (

                    <div className="w-full h-[50px] flex border rounded-[4px] bg-[#00895430] mt-[20px]">

                        <p className="text-[18px] m-auto text-[#ffffff]">Сохранить корзину</p>

                    </div>

                )

                }

            </div>


        </div>

    )
}

export default InfoPriceCart