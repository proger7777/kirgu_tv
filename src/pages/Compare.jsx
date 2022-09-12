import React from "react";
import { useEffect, useState } from "react";
import Layout from "../layout";
import localforage from "localforage";
import { useSelector } from "react-redux";
import CompareList from "../components/CompareList";
import CompareProperties from "../components/CompareProperties";

const Compare = () => {

    const activeTabClasses = 'border-b-[2px] border-[#008954] text-[27px] text-[#008954] font-medium '

    const compareLittle = useSelector(state => state.compare.compareItemLittle)

    let compare = useSelector(state => state.compare.compareItem)

    const [letter, setLetter] = useState()

    const [compareCategory, setCompareCategory] = useState([])

    const [compareFilter, setCompareFilter] = useState([])

    const [compareWithProp, setCompareWithProp] = useState([])

    const [characteristics, setCharacteristics] = useState([])

    const loadCompareCategory = () => {

        let resultCategories = []

        localforage.getItem('categories').then(values => {
            compare.map(item => {

                let categoryItem = values.find(it => it.id == item.section)

                resultCategories.push(categoryItem)

                setCompareCategory(resultCategories.filter((item, index) => resultCategories.indexOf(item) === index)
                )
            })
        })

    }

    const filterCompare = (props) => {

        const resultCompare = []

        let saveCharacteristic = []

        setCompareWithProp(compare.filter(it => it.section == props))

        compare.filter(it => it.section == props).map(it => {

            let compareItem = compareLittle.find(fc => fc.site_id == it.id)

            resultCompare.push(compareItem)

            setCompareFilter(resultCompare)

            saveCharacteristic.push(Object.keys(it.properties))

            saveCharacteristic = saveCharacteristic.flat()

            setCharacteristics(saveCharacteristic.filter((item, index) => saveCharacteristic.indexOf(item) === index ))

            setLetter('Характеристики')

        })
    }

    const [activePart, setActivePart] = useState()

    const checkActiveMenu = (idActiv, activ) => {
        setActivePart(activ)
    }

    useEffect(() => {
        loadCompareCategory()
    }, [])

    const crumbs = [['Сравнение', 'compare']]

    return (
        <Layout crumbs={crumbs} activeMenu='compare'>

            <div className='flex flex-col'>

                <div className="mb-[30px]" >
                    <h2 className='text-[27px] text-[#008954]'>Сравнение товаров</h2>
                </div>

                {compare.length ? (

                    <div className="flex">

                        <div className="flex text-[25px] sticky left-0 text-[black] border-b-[1px]">

                            {compareCategory.map(cat =>
                                <div className='mr-[30px] mb-[15px]'>
                                    <button
                                        key={cat.id}
                                        className={`${activePart === cat.id && activeTabClasses}`}
                                        onClick={(e) => { checkActiveMenu(e.target, cat.id); filterCompare(cat.id) }}>
                                        <div className='space-x-[50px] '>
                                            {cat.name}
                                        </div>
                                    </button>
                                </div>

                            )}

                        </div>

                    </div>

                ) : (
                    <div className="flex justify-center" >
                        <h2 className='text-[27px] text-[red] mt-[20px]'>У вас нет товаров в сравнении</h2>
                    </div>
                )}

                <CompareList catalog={compareFilter} letter={letter}/>

                <CompareProperties compareProperties={compareWithProp} itemAllChar={characteristics}/>

            </div>

        </Layout>
    )

}

export default Compare;

