import React from "react";
import { useEffect, useState } from "react";
import CompareMenuList from "../components/CompareMenuList";
import Layout from "../layout";
import KirguSource from "../components/API/KirguSource";
import localforage from "localforage";

const Compare = () => {

    let saveCompare = localStorage.saveCompare ? JSON.parse(localStorage.getItem('saveCompare')) : []

    const [nameCategory, setNameCategory] = useState([])

    const filterCategoryCompare = async() => {
        let category = await localforage.getItem('categories')
        let resultCategories = []
        category = saveCompare.map(item => {

            let categoryItem = category.find(it => it.id == item.section)

            resultCategories.push(categoryItem)

            resultCategories = resultCategories.filter((item, index) => resultCategories.indexOf(item) === index)

        })
        setNameCategory(resultCategories)
    }

    const [compares, setCompares] = useState([])

    useEffect(() => {

        filterCategoryCompare()

        const raw = localStorage.getItem('compare') || []
        if (raw.length) {
            setCompares(JSON.parse(raw))
        }

    }, [])

    //Удаление товаров из сравнения
    const removeCompare = (cat) => {

        // console.log(cat)

        // console.log(compares)

        setCompares(compares.filter(rf => rf.site_id !== cat.site_id))

        // localStorage.setItem('saveCompare', JSON.stringify(saveCompare.filter(rf => rf.site_id !== cat.site_id)));


    }

    //Меню лист
    const [activePart, setActivePart] = useState()

    function openPartFnc(currEl, part) {
        setActivePart(part)
    }

    // console.log('123')

    const crumbs = [['Сравнение', 'compare']]

    return (
        <Layout crumbs={crumbs} activeMenu='compare'>

            <div className='inline-block justify-content-center ml-[auto] mr-[auto] z-50'>

                <div className="flex justify-center mb-[30px]" >
                    <h2 className='absolute text-[27px] text-[#008954]'>Товары в сравнении</h2>
                </div>

                <div>

                    {compares.length ? (

                        <div className="flex justify-center ml-[20px] mr-[20px]">

                            <CompareMenuList catalogCompare={nameCategory} activePart={activePart} openPartFnc={openPartFnc} removeComp={removeCompare} compareWithProperties={saveCompare}/>

                        </div>
                        

                    ) : (
                        <div className="flex justify-center" >
                            <h2 className='text-[27px] text-[#008954]'>У вас нет товаров в сравнении</h2>
                        </div>
                    )}

                </div>

            </div>
        </Layout>
    )

}

export default Compare;

