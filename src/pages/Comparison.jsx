import React, { useEffect, useState } from "react";
import ComparisonList from "../components/ComparisonList";
import Icons from "../components/Icons";
import Layout from "../layout";


const Comparison = () => {

    const [comparison, setComparison] = useState([])
    const [catalogId, setCatalogId] = useState([])

    useEffect(() => {

        const raw = localStorage.getItem('comparison') || []
        if (raw.length) {
            setComparison(JSON.parse(raw))
        }

    }, [])


    //Добавление уникальных CatalogId

    comparison.map(cat => {

        if (!catalogId.find((item) => item == cat.category)) {

            setCatalogId([cat.category, ...catalogId])

        }
    })

    function clearComparison() {

        localStorage.removeItem("comparison")
        setComparison([])
        setCatalogId([])

    }

    const crumbs = [['Сравнение', 'comparison']]


    return (
        <Layout crumbs={crumbs} activeMenu='comparison'>

            <div className="w-full">

                <div className='flex justify-between items-center'>
                    <h2 className='text-[24px] font-semibold'>Сравнение товаров</h2>

                    <button className="flex justify-center items-center  w-[370px] h-[50px] border border-[#E6141E] rounded-[4px]" onClick={() => { clearComparison() }}>
                        <Icons name='deleteV2' className={` w-[20px] h-[20px] grid-cols-4`} />
                        <h1 className='text-[20px] text-[#E6141E] font-semibold'>&nbsp;Очистить</h1>
                    </button>
                </div>

                {(catalogId.length) ? (
                    catalogId.map((item, i) => (

                        <ComparisonList catId={item} key={i} />

                    ))

                ) : (<div className="flex justify-center"><p className="text-[24px]">Вы не добавили товары для сравнения</p></div>)
                }

            </div>

        </Layout>
    )
}

export default Comparison;