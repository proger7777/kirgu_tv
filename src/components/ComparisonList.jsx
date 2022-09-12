import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Favorites from '../pages/Favourites';
import ComparisonItem from './ComparisonItem';
import Icons from './Icons';
import { getCatCrumbs, getCategories } from './services/categories';
import { setImagePath } from './services/images';




const ComparisonList = ({ catId }) => {

    const [catalogItem, setCatalogItem] = useState([])

    const [product, setProduct] = useState([])

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resultAllCats = await getCategories()

        let cat = resultAllCats.find(i => i.id === catId)
        setCatalogItem(cat)
    })

    useEffect(() => {

        fetchProduct(catId, catId)
        Compare()

    }, [])


    function Compare() {

        const raw = JSON.parse(localStorage.getItem('comparison')) || []
        if (raw.length) {
            setProduct(raw.filter(item => item.category == catId))
        }

    }

    return (
        <div className='border-[1px] border-[#F5F5F5] w-[324px] h-[276px] pl-[20px] pr-[20px] flex flex-col items-center'>

                <Link to={`/comparisonItem/${catalogItem.id}/${catalogItem.name}`}>

                    <img src={setImagePath(catalogItem.image)} alt='' className='object-contain h-[197px] m-auto mt-[20px] mb-[10px]' />
                    <span className='text-[14px] font-semibold block w-full text-center'>{catalogItem.name} - ({product.length})</span>

                </Link>

        </div>
    )
}

export default ComparisonList