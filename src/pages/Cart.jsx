import React, { useEffect, useState } from "react";
import CatalogItem from "../components/CatalogItem";
import Icons from "../components/Icons";
import InfoPriceCart from "../components/InfoPriceCart";
import Pagination from "../components/Pagination";
import Layout from "../layout";


const Cart = () => {

    const [cart, setCart] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const [downNumber, setDownNumber] = useState(0)

    const [upNumber, setUpNumber] = useState(0)

    const pageSize = 8

    useEffect(() => {

        Basket()

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('cart')) {
                Basket()
            }
        })

        setDownNumber(0 + 8 * (currentPage - 1))
        setUpNumber((0 + 8 * (currentPage - 1)) + 7)

    }, [currentPage])

    function Basket() {

        const raw = localStorage.getItem('cart') || []
        if (raw.length) {
            setCart(JSON.parse(raw))
        }

    }

    function clearCart() {

        localStorage.removeItem("cart")
        setCart([])

    }
    const crumbs = [['Корзина', 'cart']]

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
                                    <CatalogItem key={item.id} cat={item} catalogId={item.category} />
                                ) : (<></>)
                            )}

                        </div>

                    ) : (

                        <div className=" w-full flex justify-center text-center" >
                            <h2 className='text-[27px]'>У вас нет товаров в корзине</h2>
                        </div>

                    )}

                    <div>
                        <InfoPriceCart products={cart} />
                    </div>

                </div>

            </div>
        </Layout>
    )

}

export default Cart;

