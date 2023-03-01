import React, { } from 'react';
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import Layout from '../layout';
import { getCategories, getCategoriesById } from '../components/services/categories';
import MapProject from '../components/BuildingMap/MapProject';
import { useSelector } from 'react-redux';
import { SelectCity } from '../components/BuildingMap/SelectCity';
import { useNavigate } from 'react-router-dom';
import StartMapProject from '../components/BuildingMap/StartMapProject';
import NavList from '../components/BuildingMap/NavList';


const BuildingMap = () => {

    const positionTerminal = localStorage.settingsTerminal ? JSON.parse(localStorage.getItem('settingsTerminal')) : false

    // If not selected position terminal
    if (!positionTerminal) {
        window.location.href = "/tv/setBuildingMap"
    }


    // Refresh data position terminal
    const navigate = useNavigate();

    // Get city and put active city
    const city = useSelector(state => state.buildingMap.map)
    const [activeCity, setActiveCity] = useState(positionTerminal.city);
    const [checker, setChecker] = useState(false);


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

    const goSetBuildingMap = () => {
        const password = prompt("Введите пароль")

        if ( password == "777555333" ) {
            navigate("/setBuildingMap")
        }
    }

    // Update building map when change building
    useEffect(() => {
        if (checker) {

            setFloor(1)
            setActiveBuilding(0)
            setBuilding(Object.values(buildingData)[0])

        }
    }, [activeCity]);

    useEffect(() => {
        setChecker(true)
    }, [])

    // Function for switching to main buildingMap
    const goBuilding = (item) => {
        if (buildingData[item[0]].length > item[2]) {
            setBuilding(buildingData[item[0]])
            setActiveBuilding(item[1])
        } else {
            setBuilding(buildingData[item[0]])
            setActiveBuilding(item[1])
            setFloor(1)
        }
    }


    const [floor, setFloor] = useState(positionTerminal.floor);

    const [navigationList, setNavigationList] = useState();
    const [activeZone, setActiveZone] = useState();
    const [activeCategory, setActiveCategory] = useState();

    const getNavigationData = (optionFloor) => {

        const filterList = building.filter(item => item.floor == (optionFloor ? optionFloor : floor))
        const data = filterList[0]?.zone

        setNavigationList(data)
    }

    useEffect(() => {
        setActiveZone()
        getNavigationData()
    }, [floor, building]);

    const crumbs = [['Схема зданий', 'buildingMap']]

    return (
        <Layout crumbs={crumbs} >
            <div className='w-full h-full flex justify-between bg-[bluesd]'>

                {/* Left bar */}
                <div className='w-full h-full bg-[redsd] flex flex-col justify-between'>

                    <div className='max-h-[500px]'>
                        <h1 className='text-[22px] font-bold mt-[30px] mb-[10px] pb-[8px] border-[#dbdbdb] border-b'>Каталог товаров</h1>
                        <NavList list={navigationList} activeZone={activeZone} setActiveZone={setActiveZone}/>
                    </div>






                    {activeZone && (
                        <div className=''>
                            <p className='text-[20px] font-semibold mb-[10px]'>{activeZone.allCategory && "Категории:"}</p>

                            {activeZone.allCategory?.map((item) => (
                                <button key={item.id} onClick={() => setActiveCategory(item)} className='grid text-[18px]  font-semibold pl-[15px] mb-[10px]'>
                                    <p className={`border-b-4 truncate ${activeCategory?.id == item.id && 'border-[#008954]'}`}>-{item.name}</p>
                                </button>
                            ))}

                            {activeZone.build ? (

                                <button onClick={() => goBuilding( [activeZone.build[0], activeZone.build[1] , floor] ) } className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white bg-[#008954]`}>
                                    <p>Перейти к зданию</p>
                                </button>

                             ) : activeZone.allCategory ? (

                                <button onClick={() => navigate(`/catalog/${activeCategory ? activeCategory.id : activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white bg-[#008954]`}>
                                    <p>Перейти к каталогу</p>
                                </button>

                            ) : (
                                
                                <button disabled={!activeZone.id && true } onClick={() => navigate(`/catalog/${activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white ${activeZone.id ? 'bg-[#008954]' : 'bg-[#00895450]'}`}>
                                    <p>Перейти к каталогу</p>
                                </button>
                            )}
                        </div>
                    )}
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
                            {/* <button onClick={() => navigate("/setBuildingMap")} className="m-[7px]" > */}
                            <button onClick={() => goSetBuildingMap() } className="m-[7px]" >
                                Настройки
                            </button>
                        </div>

                        {/* Select city */}
                        <div className='flex items-center border border-[#dbdbdb] rounded'>
                            <SelectCity city={city} setActiveCity={setActiveCity} activeCity={positionTerminal.city} />
                        </div>

                    </div>

                    {/* Display building map */}
                    {(building[0].name == "kirgu") ? (

                        <StartMapProject buildingData={building} activeBuilding={activeBuilding} city={activeCity} activeTerminal={positionTerminal} goBuilding={goBuilding} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone}/>

                    ) : (

                        <MapProject buildingData={building} city={activeCity} activeTerminal={activeTerminal()} floor={floor} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone}/>

                    )}
                </div>


            </div>
        </Layout>
    )

}


export default BuildingMap;