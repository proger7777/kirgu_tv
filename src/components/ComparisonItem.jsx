import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Layout from '../layout';
import CompareList from './CompareList';

const ComparisonItem = () => {

    const params = useParams()

    const [products, setProducts] = useState([])

    function Compare() {

        const raw = JSON.parse(localStorage.getItem('comparison')) || []
        if (raw.length) {
            setProducts(raw.filter(item => item.category == params.catId))
        }

    }

    useEffect(() => {
        Compare()

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('comparisonIt')) {
                Compare()
                console.log(111)
            }
        })

    }, [])

    const crumbs = [['Сравнение', 'comparison'], ['Товары', 'comparisonItem']]


    return (
        <Layout crumbs={crumbs} activeMenu='comparisonItem'>

            <div className="w-full">

                <div className='flex items-center'>
                    <h2 className='text-[24px]'>Сравнивание товара: &nbsp;</h2>
                    <h2 className='text-[24px] '>{params.catName}</h2>

                </div>


                <div>

                    {products.length ? (

                        <div className='flex'>
                                <div>
                                    <CompareList cat={products} catalogId={params.catId}/>
                                </div>
                                {console.log(products)}
                        </div>

                    ) : (<></>)}
                </div>


            </div>
        </Layout>

    )
}

export default ComparisonItem