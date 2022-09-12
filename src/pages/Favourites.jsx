import React, { useEffect, useState } from "react";
import CatalogItem from "../components/CatalogItem";
import Icons from "../components/Icons";
import InfoPriceFavorites from "../components/InfoPriceFavorites";
import Pagination from "../components/Pagination";
import Layout from "../layout";


const Favorites = () => {

    const [favorites, setFavorites] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const [downNumber, setDownNumber] = useState(0)

    const [upNumber, setUpNumber] = useState(0)

    const pageSize = 10

    useEffect(() => {

        Favor()

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('favorites')) {
                Favor()
            }
        })

        setDownNumber(0 + 10 * (currentPage - 1))
        setUpNumber((0 + 10 * (currentPage - 1)) + 9)

    }, [currentPage])

    function Favor() {

        const raw = localStorage.getItem('favorites') || []
        if (raw.length) {
            setFavorites(JSON.parse(raw))
        }

    }

    function clearFavorites() {

        localStorage.removeItem("favorites")
        setFavorites([])

    }
    const crumbs = [['Избранное', 'favorites']]

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

                        <button className="clearFavorites flex justify-center items-center ml-[20px] w-[370px] h-[50px] border border-[#E6141E] rounded-[4px]" onClick={() => { clearFavorites() }}>
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
                                        <CatalogItem key={item.id} cat={item} catalogId={item.category} />
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

export default Favorites;

