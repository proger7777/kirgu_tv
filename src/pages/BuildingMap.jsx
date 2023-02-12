import React, { } from 'react';
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import ListCategory from '../components/BuildingMap/ListCategory';
import Layout from '../layout';
import { getCategories, getCategoriesById } from '../components/services/categories';
import MapProject from '../components/BuildingMap/MapProject';
import { useSelector } from 'react-redux';


const BuildingMap = () => {

    const [allCats, setAllCats] = useState([])
    const [categories, setCategories] = useState([])

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async () => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        const result = await getCategoriesById(null)
        setCategories(result)
        console.log(result)
        console.log(resultAllCats)
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const buildingData = useSelector(state => state.buildingMap.building)

    const crumbs = [['MKH', 'categories']]

    return (
        <Layout crumbs={crumbs} >
            <div className='w-full h-full flex justify-between bg-[bluesd]'>






                <div className='w-[270px] bg-[redsd] overflow-x-scroll'>
                    <ListCategory list={categories} sublist={allCats}/>
                </div>








                <div className='w-full h-full bg-[greensd]'>
                    Map
                    <MapProject/>
                </div>









                <div className='w-[200px] h-[879px] grid items-center justify-center bg-[#f025ffsd]'>
                    <div className=''>
                        <div className='h-[50px] w-[50px] bg-[yellow]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                        <div className='h-[50px] w-[50px] bg-[yellow] mt-[10px]'></div>
                    </div>
                </div>











            </div>
        </Layout>
    )

}


export default BuildingMap;