import React, { } from 'react';
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import ListCategory from '../components/BuildingMap/ListCategory';
import Layout from '../layout';
import { getCategories, getCategoriesById } from '../components/services/categories';
import MapProject from '../components/BuildingMap/MapProject';
import { useSelector } from 'react-redux';
import { SelectCity } from '../components/BuildingMap/SelectCity';
import { useNavigate } from 'react-router-dom';
import StartMapProject from '../components/BuildingMap/StartMapProject';


const BuildingMap = () => {

    const positionTerminal = localStorage.settingsTerminal ? JSON.parse(localStorage.getItem('settingsTerminal')) : false

    // If not selected position terminal
    if (!positionTerminal) {
        window.location.href = "/tv/settingBuildingMap"
    }


    // Refresh data position terminal
    const navigate = useNavigate();

    const updatePosition = () => {
        navigate("/settingBuildingMap")
    }


    // Get city and put active city
    const city = useSelector(state => state.buildingMap.map)
    const [activeCity, setActiveCity] = useState(positionTerminal.city);


    // Get building map and put active building
    const buildingData = useSelector(state => state.buildingMap.map[activeCity])
    const [building, setBuilding] = useState(Object.values(buildingData)[positionTerminal.buildingIndex]);
    const [activeBuilding, setActiveBuilding] = useState(positionTerminal.buildingIndex);


    // Set position terminal 
    const activeTerminal = () => {
        if (activeCity == positionTerminal.city && activeBuilding == positionTerminal.buildingIndex) {
            return positionTerminal
        } else {
            return false
        }
    }


    // Update building map when change building
    useEffect(() => {
        setFloor(1)
        setActiveBuilding(0)
        setBuilding(Object.values(buildingData)[0])
    }, [activeCity]);


    // Get info product for left bar
    const [allCats, setAllCats] = useState([])
    const [categories, setCategories] = useState([])

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async () => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        getListProductFloor(resultAllCats)

        const result = await getCategoriesById(null)
        setCategories(result)
    })

    useEffect(() => {
        fetchCategories()
        setActiveBuilding(positionTerminal.buildingIndex)
        setBuilding(Object.values(buildingData)[positionTerminal.buildingIndex])
    }, [])

    const goBuilding = (item) => {
        setActiveBuilding(item[1])
        setBuilding(buildingData[item[0]])
    }


    const [floor, setFloor] = useState(positionTerminal.floor);
    const [propsList, setPropsList] = useState(false);

    const getListProductFloor = (allCats) => {
        const list = []

        if (allCats.length) {
            const filterList = building.filter(item => item.floor == floor)

            filterList[0].id.map((it) => {

                const nameList = (allCats.filter(item => item.id == it))[0]
                const ls = allCats.filter(item => item.parent_id == it)
                if (nameList && ls) {
                    list.push([
                        nameList, ls
                    ])
                }
            })
        }

        setPropsList(list[0] ? list : false)
    }

    useEffect(() => {
        getListProductFloor(allCats)
    }, [floor, building]);

    const crumbs = [['Схема зданий', 'buildingMap']]

    return (
        <Layout crumbs={crumbs} >
            <div className='w-full h-full flex justify-between bg-[bluesd]'>


                {/* Left bar */}
                <div className='w-[270px] h-full bg-[redsd] overflow-y-scroll'>
                    <h1 className='text-[22px] font-bold mt-[30px] pb-[8px] border-[#dbdbdb] border-b'>Каталог товаров</h1>
                    <ListCategory list={categories} sublist={allCats} itemList={propsList} />
                </div>


                {/* Other element */}
                <div className='w-full h-[879px] bg-[greensd] p-[10px] '>

                    <div className='flex justify-between h-[50px]'>

                        {/* Select building */}
                        <div className='w-[1170px] h-[60px] ml-[8px] flex items-center bg-[redsd] overflow-y-scroll'>

                            {Object.keys(buildingData).map((item, index) => (
                                <button key={item} onClick={() => { setBuilding(buildingData[item]); setActiveBuilding(index); setFloor(1) }} className={`mr-[10px] border-[2px] p-[5px] whitespace-nowrap rounded ${index == activeBuilding ? `border-[#008954]` : `border-[#dbdbdb]`} `}>
                                    <p>{item.replaceAll("_", " ")}</p>
                                </button>

                            ))}

                        </div>

                        <div className='flex items-center border border-[#dbdbdb] rounded'>
                            <button onClick={() => updatePosition()} className="m-[7px]" >Настройки</button>
                        </div>

                        {/* Select city */}
                        <div className='flex items-center border border-[#dbdbdb] rounded'>
                            <SelectCity city={city} setActiveCity={setActiveCity} activeCity={positionTerminal.city} />
                        </div>

                    </div>

                    {/* Display building map */}
                    {(building[0].name == "kirgu") ? (

                        <StartMapProject buildingData={building} activeBuilding={activeBuilding} city={activeCity} activeTerminal={positionTerminal} goBuilding={goBuilding} />

                    ) : (

                        <MapProject buildingData={building} city={activeCity} activeTerminal={activeTerminal()} setFloor={setFloor} />

                    )}
                </div>


            </div>
        </Layout>
    )

}


export default BuildingMap;