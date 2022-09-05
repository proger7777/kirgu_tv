import React from 'react'
import { useEffect, useState } from 'react'
import CatalogList from './CatalogList'
import { getCategories } from './services/categories'
import { Link } from 'react-router-dom'
import ProductPropsBlock from './ProductPropsBlock'
import ProductCompare from './ProductCompare'
import CompareList from './CompareList'

const CompareMenuList = ({ catalogCompare, activePart, openPartFnc, removeComp, compareWithProperties }) => {

    const activeTabClasses = 'border-b-[1px] border-[#008954] pb-[12px] font-medium text-[#008954]'

    let compareItem = localStorage.compare ? JSON.parse(localStorage.getItem('compare')) : []

    const [compareItems, setCompareItems] = useState([])

    const [characteristic, setСharacteristic] = useState([])

    const [compareProperties, setCompareProperties] = useState([])

    const filterCompare = (props) => {

        compareWithProperties = compareWithProperties.filter(findId => findId.section == props)

        let resultCatalog = []

        let resultCharacteristic = []

        let saveCompareProperties = []


        compareItem = compareWithProperties.map(item => {

            saveCompareProperties.push(item)

            setCompareProperties(saveCompareProperties)

            let categoryItem = compareItem.find(it => it.site_id == item.id)

            let filterCharacteristic = compareWithProperties.find(it => it.id == categoryItem.site_id)

            resultCharacteristic.push(Object.keys(filterCharacteristic.properties)) 
            
            resultCatalog.push(categoryItem)

        })

        resultCharacteristic = resultCharacteristic.flat()

        setСharacteristic(resultCharacteristic.filter((x, i) => resultCharacteristic.indexOf(x) === i ))

        setCompareItems(resultCatalog)

    }

    return (
        <div className=" justify-center ml-[20px] mr-[20px] ">
            <div className='flex bg-[white] space-x-[50px] text-[25px] text-[black] mt-[30px] mb-[30px] border-b-[2px]'>
                {
                    catalogCompare.map(cat =>
                        <button
                            key={cat.id}
                            className={`${activePart === cat.id && activeTabClasses}`}
                            onClick={(e) => { openPartFnc(e.target, cat.id); filterCompare(cat.id) }}
                        >
                            <div className='justify-center'>
                                {cat.name}
                            </div>
                        </button>
                    )}
            </div>

            <div className='justify-between'>

                <CompareList catalog={compareItems} removeCompare={removeComp} save={compareWithProperties}/>

                <div className='text-[27px] text-[#008954] mt-[10px] mb-[10px]'>Общие характеристики</div>

                <ProductCompare compareProperties={compareProperties} itemAllChar={characteristic}/>

            </div>

        </div>
    )
}

export default CompareMenuList