import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import Layout from '../layout';
import { comparisonAction } from '../store/addComparison';
import CompareList from './CompareList';
import CompareNavBar from './CompareNavBar';
import Icons from './Icons';

const ComparisonItem = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const comparison = useSelector(state => state.comparison.comparison).filter(item => item.catId == params.catId)

    const addComparison = (prod) => {
        const item = {
            product: prod,
            catId: params.catId,
        }
        dispatch(comparisonAction(item))
    }

    const clearComparison = () => {

        comparison.map((item) => (
            addComparison(item.product)
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

                <CompareNavBar currentId={params.catId} />

                {comparison.length ? (

                    <div className='flex'>
                        <CompareList cat={comparison} catalogId={params.catId} />
                    </div>

                ) : (navigate('/comparison'))}

            </div>

        </Layout>
    )
}

export default ComparisonItem