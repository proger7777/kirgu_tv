import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Favorites from '../pages/Favourites';
import ComparisonItem from './ComparisonItem';
import Icons from './Icons';
import { getCatCrumbs, getCategories } from './services/categories';




const ComparisonList = ({ catId, compare }) => {

    const [product, setProduct] = useState([])

    const [productLength, setProductLength] = useState([])

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resultAllCats = await getCategories()

        const res = await getCatCrumbs(catId, resultAllCats)

        setProduct(res.pop())
    })

    useEffect(() => {

        fetchProduct(catId, catId)
        Compare()

    }, [])


    function Compare() {

        const raw = JSON.parse(localStorage.getItem('comparison')) || []
        if (raw.length) {
            setProductLength(raw.filter(item => item.category == catId))
        }

    }

    return (

        <div >
            <div className='border border-[#e6e6e6] p-[10px] m-[10px] text-[20px]' >
                {(product.length) ? (
                    <Link to={`/comparisonItem/${product[1].slice(8)}/${product[0]}`}>
                        {(productLength.length > 4) ? (

                            <div className='flex justify-between'>
                                <h1>{product[0]}</h1>
                                <div className='flex w-[145px] justify-between'>
                                        <h1 className='text-slate-500'>{productLength.length} товаров</h1>
                                        <Icons name='page_next' className="ml-[15px] w-[20px] h-[20px] mr-[4px] relative  top-[8px]" />
                                    </div>
                            </div>

                        ) : (productLength.length > 1) ? (

                            <div className='flex justify-between'>
                                    <h1>{product[0]}</h1>
                                    <div className='flex w-[145px] justify-between'>
                                        <h1 className='text-slate-500'>{productLength.length} товара</h1>
                                        <Icons name='page_next' className="ml-[15px] w-[20px] h-[20px] mr-[4px] relative  top-[8px]" />
                                    </div>
                            </div>

                        ) : (

                            <div className='flex justify-between '>
                                <h1>{product[0]}</h1>
                                <div className='flex w-[145px] justify-between'>
                                        <h1 className='text-slate-500'>{productLength.length} товар</h1>
                                        <Icons name='page_next' className="ml-[15px] w-[20px] h-[20px] mr-[4px] relative  top-[8px]" />
                                    </div>
                            </div>

                        )}
                    </Link>
                ) : (<></>)}


            </div>

        </div>

    )
}

export default ComparisonList