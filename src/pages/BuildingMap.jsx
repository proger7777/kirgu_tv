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
    const buildingData = useSelector(state => state.buildingMap.building)
    const [building, setBuilding] = useState(buildingData.tech);

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async () => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        const result = await getCategoriesById(null)
        setCategories(result)
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        console.log(building)
    }, [building]);

    // console.log(building)

    const crumbs = [['MKH', 'categories']]

    return (
        <Layout crumbs={crumbs} >
            <div className='w-full h-full flex justify-between bg-[bluesd]'>






                <div className='w-[270px] bg-[redsd] overflow-x-scroll'>
                    <ListCategory list={categories} sublist={allCats} />
                </div>








                <div className='w-full h-[879px] bg-[greensd] p-[10px]'>

                    <div className='w-full bg-[redsd]'>
                        {Object.keys(buildingData).map(item => (
                            // <button key={item} onClick={() => { setBuilding(buildingData[item]) ;console.log(buildingData[item])}} className="w-[200px] ml-[10px]">
                            <button key={item} onClick={() => setBuilding(buildingData[item]) } className="w-[200px] ml-[10px]">
                                <p>{item}</p>
                            </button>
                           
                        ))}
                    </div>

                    <MapProject buildingData={building}/>
                </div>


                {/* 
                <div className='w-[200px] h-[879px] grid items-center justify-center bg-[#f025ffsd]'>
                    <div className=''>
                        {buildingData.tech.map((item) => (
                            <div>
                                <button className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>{item.floor}</button>
                            </div>
                        ))}
                        <button className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mt-[30px] mb-[10px] justify-center items-center'>+</button>
                        <button className='h-[50px] w-[50px] flex border border-[#dbdbdb] rounded mb-[10px] justify-center items-center'>-</button>

                    </div>
                </div> */}



            </div>
        </Layout>
    )

}


export default BuildingMap;