import React from "react";
import { useEffect, useState } from "react";
import CatalogList from "../components/CatalogList";
import Icons from "../components/Icons";
import Layout from "../layout";


const Favorites = () => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {

        const raw = localStorage.getItem('favorites') || []
        if (raw.length) {
            setFavorites(JSON.parse(raw))
        }

    }, [])

    function clearFavorites() {

        localStorage.removeItem("favorites") 
        setFavorites([])

    }
    const crumbs = [['Избранное', 'favorites']]

    return (
        <Layout crumbs={crumbs} activeMenu='favorites'>
            <div style={{ width: '100%' }}>

                <div className='flex justify-between items-center'>
                    <h2 className='text-[24px]'>Избранное</h2>

                    <button className="flex justify-between items-center  w-[160px]" onClick={() => {clearFavorites()}}>
                        <h1 className='text-[24px] text-green'>Очистить</h1>
                        <Icons name='delete' className={`w-[40px] h-[40px]`} />
                    </button>

                </div>


                <div>

                    {favorites.length ? (

                        <CatalogList catalog={favorites} columns='5' />

                    ) : (
                        <div className="flex justify-center" >
                            <h2 className='text-[27px]'>У вас нет избранных товаров</h2>
                        </div>
                    )}

                </div>

            </div>
        </Layout>
    )

}

export default Favorites;

