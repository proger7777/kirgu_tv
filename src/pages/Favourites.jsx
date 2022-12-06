import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../components/CatalogItem";
import Icons from "../components/Icons";
import Pagination from "../components/Pagination";
import Layout from "../layout";
import { clearFavoritesAction } from "../store/addFavorites";


const Favorites = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const [downNumber, setDownNumber] = useState(0)

    const [upNumber, setUpNumber] = useState(0)

    const pageSize = 10

    useEffect(() => {

        setDownNumber(0 + 10 * (currentPage - 1))
        setUpNumber((0 + 10 * (currentPage - 1)) + 9)

    }, [currentPage])

    const crumbs = [['Избранное', 'favorites']]

    const dispatch = useDispatch()

    const clearFavor = () => { dispatch(clearFavoritesAction()) }

    const favorites = useSelector(state => state.favorites.favorites)


    return (
        <Layout crumbs={crumbs} activeMenu='favorites'>
            <div className="w-full">

                <div className='flex justify-between items-center'>
                    <h2 className='text-[24px] font-semibold'>Избранное</h2>

                    <div className="flex">
                        <Pagination
                            currentPage={currentPage}
                            totalCount={favorites.length}
                            pageSize={pageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />

                        <button className="clearFavorites flex justify-center items-center ml-[20px] w-[370px] h-[50px] border border-[#E6141E] rounded-[4px]" onClick={() => { clearFavor() }}>
                            <Icons name='deleteV2' className={`clearFavorites w-[20px] h-[20px] grid-cols-4`} />
                            <h1 className='clearFavorites text-[20px] text-[#E6141E] font-semibold'>&nbsp;Очистить</h1>
                        </button>
                    </div>
                </div>

                <div className="flex">

                    {favorites.length ? (

                        <div className={`catalog_content grid grid-cols-5 w-full gap-[25px] mt-[15px]`}>
                            {favorites.map((item, i) =>
                                (i >= downNumber && i <= upNumber) ? (
                                    <CatalogItem key={item.product.id} cat={item.product} catalogId={item.catId} />
                                ) : (<></>)
                            )}
                        </div>

                    ) : (

                        <div className=" w-full flex justify-center text-center" >
                            <h2 className='text-[27px]'>У вас нет избранных товаров</h2>
                        </div>

                    )}

                </div>

            </div>
        </Layout>
    )

}

export default Favorites