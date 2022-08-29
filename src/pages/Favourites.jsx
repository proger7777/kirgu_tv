import React from "react";
import { useEffect, useState } from "react";
import CatalogList from "../components/CatalogList";
import Icons from "../components/Icons";
import Layout from "../layout";


const Favorites = () => {

    const [favorites, setFavorites] = useState([])

    let favoritesPage = JSON.parse(localStorage.getItem('favorites'))

    let articleDelete = JSON.parse(localStorage.getItem('articul'))

    // let atriculToCatalogItem = articleDelete.properties.Артикул

    useEffect(() => {

        const raw = localStorage.getItem('favorites') || []
        if (raw.length) {
            setFavorites(JSON.parse(raw))
        }

    }, [])

    //Удаление товаров из избранного
    const removeFavorite = (cat) => {

        localStorage.setItem('articul', JSON.stringify(articleDelete.filter(rf => rf.xml_id !== cat.id)));

        setFavorites(favorites.filter(rf => rf.id !== cat.id))

        localStorage.setItem('favorites', JSON.stringify(favoritesPage.filter(rf => rf.id !== cat.id)));

    }

    function clearFavorites() {

        localStorage.removeItem("favorites")
        setFavorites([])

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

                        <CatalogList catalog={favorites} removeFavorite={removeFavorite} articleDelete={articleDelete} />

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

