import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompareItem from "../components/CompareItem";
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
                    <h2 className='text-[24px]'>Сравнение</h2>

                    <button className="flex justify-between items-center  w-[160px]" onClick={() => { clearComparison() }}>
                        <h1 className='text-[24px] text-green'>Очистить</h1>
                        <Icons name='delete' className={`w-[40px] h-[40px] grid-cols-4`} />
                    </button>
                </div>

                {(catalogId.length) ? (

                    <div className='grid grid-cols-5 gap-[25px]'>

                        {catalogId.map((item, i) => (
                            <ComparisonList catId={item} key={i} />
                        ))}

                    </div>

                ) : (<div className="flex justify-center"><p className="text-[24px]">Вы не добавили товары для сравнения</p></div>)
                }

            </div>

        </Layout>
    )
}

export default Comparison;