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
        <div className='border border-[#e6e6e6] p-[10px] m-[10px] text-[20px]' >
            
        {(product.length) ? (
            <Link to={`/comparisonItem/${catalogItem.id}/${catalogItem.name}`}>
                {(product.length > 4) ? (

                    <div className='flex justify-between'>
                        
                        <div className='flex'>
                            <h1 className='text-[#008954] text-[18px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                            <h1 className='mt-[8px] text-slate-500 text-[10px]'>{product.length} товаров</h1>
                        </div>
                        
                        <Icons name='arrowRight' className="ml-[15px] w-[25px] h-[25px] mr-[4px]" />
                    </div>

                ) : (product.length > 1) ? (

                    <div className='flex justify-between'>
                        
                            <div className='flex'>
                                <h1 className='text-[#008954] text-[18px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                                <h1 className='mt-[8px] text-slate-500 text-[10px]'>{product.length} товара</h1>
                            </div>

                            <Icons name='arrowRight' className="ml-[15px] w-[25px] h-[25px] mr-[4px]" />
                    </div>

                ) : (

                    <div className='flex justify-between '>
                        <div className='flex'>
                            <h1 className='text-[#008954] text-[18px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                            <h1 className='mt-[8px] text-slate-500 text-[10px]'>{product.length} товар</h1>
                        </div>
                        
                        <Icons name='arrowRight' className="ml-[15px] w-[25px] h-[25px] mr-[4px]" />
                    </div>

                )}
            </Link>
        ) : (<></>)}


    </div>
    )
}

export default ComparisonList