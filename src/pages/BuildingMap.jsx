import React, { } from 'react';
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import ListCategory from '../components/BuildingMap/ListCategory';
import Layout from '../layout';
import { getCategories, getCategoriesById } from '../components/services/categories';
import MapProject from '../components/BuildingMap/MapProject';
import { useSelector } from 'react-redux';
import { SelectCity } from '../components/BuildingMap/SelectCity';


const BuildingMap = () => {

    // Get city and put active city
    const city = useSelector(state => state.buildingMap)
    const [activeCity, setActiveCity] = useState(Object.keys(city)[0]);

    // Get building map and put active building
    const buildingData = useSelector(state => state.buildingMap[activeCity])
    const [building, setBuilding] = useState(Object.values(buildingData)[0]);
    const [activeBuilding, setActiveBuilding] = useState(0);



    // Get info product for left bar
    const [allCats, setAllCats] = useState([])
    const [categories, setCategories] = useState([])

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async () => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        const result = await getCategoriesById(null)
        setCategories(result)
    })

    useEffect(() => {
        fetchCategories()
    }, [])


    // Update building map when change building
    useEffect(() => {
        setActiveBuilding(0)
        setBuilding(Object.values(buildingData)[0])
    }, [activeCity]);


    const crumbs = [['MKH', 'categories']]

    return (
        <Layout crumbs={crumbs} >
            <div className='w-full h-full flex justify-between bg-[bluesd]'>


                {/* Left bar */}
                <div className='w-[270px] bg-[redsd] overflow-x-scroll'>
                    <ListCategory list={categories} sublist={allCats} />
                </div>


                {/* Other element */}
                <div className='w-full h-[879px] bg-[greensd] p-[10px] '>

                    <div className='flex justify-between h-[50px]'>

                        {/* Select building */}
                        <div className='w-[1170px] h-[60px] ml-[8px] flex items-center bg-[redsd] overflow-y-scroll'>
                            {Object.keys(buildingData).map((item, index) => (
                                <button key={item} onClick={() => { setBuilding(buildingData[item]); setActiveBuilding(index) }} className={`mr-[10px] border-[2px] p-[5px] whitespace-nowrap rounded ${index == activeBuilding ? `border-[#008954]` : `border-[#dbdbdb]`} `}>
                                    <p>{item.replaceAll("_", " ")}</p>
                                </button>

                            ))}
                        </div>

                        {/* Select city */}
                        <div className='flex items-center border border-[#dbdbdb] rounded'>
                            <SelectCity city={city} setActiveCity={setActiveCity} />
                        </div>

                    </div>

                    {/* Display building map */}
                    <MapProject buildingData={building} />
                </div>


            </div>
        </Layout>
    )

}


export default BuildingMap;