import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { getCategories } from './services/categories';


const CompareNavBarItem = ({ catId, updatePage }) => {

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
        
        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('compareIt')) {
                Compare()
            }
        })
        
    }, [])


    function Compare() {

        const raw = JSON.parse(localStorage.getItem('comparison')) || []
        if (raw.length) {
            setProduct(raw.filter(item => item.category == catId))
        }

    }

    return (
        <div className='m-[10px] text-[20px]' >

            {(product.length) ? (

                <Link to={`/comparisonItem/${catalogItem.id}/${catalogItem.name}`}>

                    {(product.length > 4) ? (

                        <div className='flex justify-between' onClick={() => updatePage(catalogItem.id)}>

                            <div className='flex'>
                                <h1 className='text-[16px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                                <h1 className='text-slate-500 text-[16px]'>{product.length}</h1>
                            </div>

                        </div>

                    ) : (product.length > 1) ? (

                        <div className='flex justify-between' onClick={() => updatePage(catalogItem.id)}>

                            <div className='flex'>
                                <h1 className='text-[16px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                                <h1 className='text-slate-500 text-[16px]'>{product.length}</h1>
                            </div>

                        </div>

                    ) : (

                        <div className='flex justify-between ' onClick={() => updatePage(catalogItem.id)}>
                            <div className='flex'>
                                <h1 className='text-[16px] font-semibold'>{catalogItem.name}&nbsp;</h1>
                                <h1 className='text-slate-500 text-[16px]'>{product.length}</h1>
                            </div>

                        </div>

                    )}

                </Link>

            ) : (<></>)}

        </div>
    )
}

export default CompareNavBarItem