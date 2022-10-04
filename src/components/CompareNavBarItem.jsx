import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { getCategories } from './services/categories';


const CompareNavBarItem = ({ catId }) => {

    const [catalogItem, setCatalogItem] = useState([])

    const comparison = useSelector(state => state.comparison.comparison).filter(item => item.catId == catId)

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resultAllCats = await getCategories()

        let cat = resultAllCats.find(i => i.id === catId)
        setCatalogItem(cat)

    })

    useEffect(() => {

        fetchProduct(catId, catId)

    }, [])

    return (
        <div className='m-[10px] text-[20px]' >


            <Link to={`/comparisonItem/${catalogItem.id}/${catalogItem.name}`}>

                {(comparison.length > 4) ? (

                    <div className='flex justify-between' >

                        <div className='flex'>
                            <h1 className='text-[16px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                            <h1 className='text-slate-500 text-[16px]'>{comparison.length}</h1>
                        </div>

                    </div>

                ) : (comparison.length > 1) ? (

                    <div className='flex justify-between' >

                        <div className='flex'>
                            <h1 className='text-[16px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                            <h1 className='text-slate-500 text-[16px]'>{comparison.length}</h1>
                        </div>

                    </div>

                ) : (

                    <div className='flex justify-between ' >
                        <div className='flex'>
                            <h1 className='text-[16px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                            <h1 className='text-slate-500 text-[16px]'>{comparison.length}</h1>
                        </div>

                    </div>

                )}

            </Link>

        </div>
    )
}

export default CompareNavBarItem