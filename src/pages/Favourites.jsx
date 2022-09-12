import React from "react";
import { useEffect, useState } from "react";
import CatalogList from "../components/CatalogList";
import Icons from "../components/Icons";
import Layout from "../layout";
import { useSelector } from "react-redux";


const Favorites = () => {

    const favorites = useSelector(state => state.favorite.favoriteItem)

    const articule = useSelector(state => state.articule.articuleItem)

    const uniqArticule = articule.reduce((o, i) => {
        if (!o.find(v => v.id == i.id)) {
            o.push(i)
        }
        return o;
    }, [] )


    //Удаление товаров из избранного
    const removeFavorite = (cat) => {

        favorites.filter(rf => rf.id !== cat.id)

    }

    function clearFavorites() {

        favorites([])

    }
    const crumbs = [['Избранное', 'favorites']]

    return (
        <Layout crumbs={crumbs} activeMenu='favorites'>

            <div className='inline-block justify-content-center ml-[auto] mr-[auto]'>

                <div className='flex justify-between items-center mb-[20px]'>
                    <h2 className='text-[24px]'>Избранное</h2>

                    <button className="flex justify-between items-center  w-[160px]" onClick={() => { clearFavorites() }}>
                        <h1 className='text-[24px] text-green'>Очистить</h1>
                        <Icons name='delete' className={`w-[40px] h-[40px]`} />
                    </button>
                </div>


                <div>

                    {favorites.length ? (

                        <CatalogList catalog={favorites} removeFavorite={removeFavorite} articule1={uniqArticule}/>

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

