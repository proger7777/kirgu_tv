import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Layout from '../layout';
import { addComparison } from './AddFavorite';
import CompareList from './CompareList';
import CompareNavBar from './CompareNavBar';
import Icons from './Icons';

const ComparisonItem = () => {

    const params = useParams()

    const [products, setProducts] = useState([])

    const navigate = useNavigate();

    function Compare(catalogId) {

        const raw = JSON.parse(localStorage.getItem('comparison')) || []
        setProducts(raw.filter(item => item.category == catalogId))

    }

    useEffect(() => {

        Compare(params.catId)

    }, [])

    function clearComparison() {

        products.map((item) => (
            addComparison(item, params.catId)
        ))

        navigate('/comparison')
    }

    const crumbs = [['Сравнение', 'comparison'], ['Товары', 'comparisonItem']]


    return (
        <Layout crumbs={crumbs} activeMenu='comparisonItem'>

            <div className="w-full h-[882px] overflow-y-hidden">

                <div className='flex justify-between'>

                    <div className='flex'>
                        <h2 className='text-[24px] font-semibold'>Сравнение товаров -&nbsp;</h2>
                        <h2 className='text-[24px] font-semibold'>{params.catName}</h2>
                    </div>

                    <button className="flex justify-center items-center  w-[370px] h-[50px] border border-[#E6141E] rounded-[4px]" onClick={() => { clearComparison() }}>
                        <Icons name='deleteV2' className={` w-[20px] h-[20px] grid-cols-4`} />
                        <h1 className='text-[20px] text-[#E6141E] font-semibold'>&nbsp;Очистить</h1>
                    </button>

                </div>

                <CompareNavBar updatePage={id => Compare(id)} currentId={params.catId} />

                {products.length ? (

                    <div className='flex'>
                        <CompareList cat={products} catalogId={params.catId} params={id => Compare(id)} />
                    </div>

                ) : (navigate('/comparison'))}

            </div>

        </Layout>
    )
}

export default ComparisonItem