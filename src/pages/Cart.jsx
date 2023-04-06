import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import Icons from "../components/Icons";
import CartInfoPrice from "../components/Cart/CartInfoPrice";
import Pagination from "../components/Pagination";
import Layout from "../layout";
import { clearCartAction } from "../store/addCart";


const Cart = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const [downNumber, setDownNumber] = useState(0)

    const [upNumber, setUpNumber] = useState(0)

    const pageSize = 8

    useEffect(() => {

        setDownNumber(0 + 8 * (currentPage - 1))
        setUpNumber((0 + 8 * (currentPage - 1)) + 7)

    }, [currentPage])

    const crumbs = [['Корзина', 'cart']]

    const dispatch = useDispatch()

    const clearCart = () => { dispatch(clearCartAction()) }

    const cart = useSelector(state => state.cart.cart)

    return (
        <Layout crumbs={crumbs} activeMenu='cart'>
            <div className="w-full">

                <div className='flex justify-between items-center'>

                    <h2 className='text-[24px] font-semibold'>Корзина</h2>

                    <div className="flex">

                        <Pagination
                            currentPage={currentPage}
                            totalCount={cart.length}
                            pageSize={pageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />

                        <button className="clearCart flex justify-center items-center ml-[20px] w-[370px] h-[50px] border border-[#E6141E] rounded-[4px]" onClick={() => { clearCart() }}>

                            <Icons name='deleteV2' className={`clearCart w-[20px] h-[20px] grid-cols-4`} />
                            <h1 className='clearCart text-[20px] text-[#E6141E] font-semibold'>&nbsp;Очистить</h1>

                        </button>

                    </div>

                </div>

                <div className="flex">

                    {cart.length ? (

                        <div className={`catalog_content grid grid-cols-4 w-full gap-[25px] mt-[15px]`}>

                            {cart.map((item, i) =>
                                (i >= downNumber && i <= upNumber) ? (
                                    <CartItem key={item.product.id} cat={item.product} catalogId={item.catId} />
                                ) : (<></>)
                            )}

                        </div>

                    ) : (

                        <div className=" w-full flex justify-center text-center" >
                            <h2 className='text-[27px]'>У вас нет товаров в корзине</h2>
                        </div>

                    )}

                    <div>
                        <CartInfoPrice products={cart} />
                    </div>

                </div>

            </div>
        </Layout>
    )

}

export default Cart;

