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
import Icons from '../components/Icons';
import FindDialog from '../components/BuildingMap/FindDialog';
import PopUpCatalog from '../components/BuildingMap/PopUpCatalog';


const BuildingMap = () => {

    // Refresh data position terminal
    const navigate = useNavigate();

    // Test data for avoid problem render
    const testData = {
        test: true,
        buildingName: "Мебельный корпус",
        city: "Махачкала",
        floor: 1,
        floorIndex: 0,
        position: { x: 10, y: 14 }
    }

    const positionTerminal = localStorage.settingsTerminal ? JSON.parse(localStorage.getItem('settingsTerminal')) : testData

    // If not selected position terminal
    if (positionTerminal.test) {

        navigate("/setBuildingMap", { replace: true })
    }



    // Get city and put active city
    const city = useSelector(state => state.buildingMap.map)
    const [activeCity, setActiveCity] = useState(positionTerminal.city);
    const [checker, setChecker] = useState(false);


    // Get building map and put active building
    const buildingData = useSelector(state => state.buildingMap.map[activeCity])
    const [building, setBuilding] = useState(buildingData.filter(item => item.name == positionTerminal.buildingName));
    const [activeBuilding, setActiveBuilding] = useState(positionTerminal.buildingName);


    // Set position terminal 
    const activeTerminal = () => {
        if (activeCity == positionTerminal.city && activeBuilding == positionTerminal.buildingName) {
            return positionTerminal
        } else {
            return false
        }
    }

    const goSetBuildingMap = () => {
        const password = prompt("Введите пароль")

        if (password == "777555333") {
            navigate("/setBuildingMap")
        }
    }

    // Update building map when change building
    useEffect(() => {
        if (checker) {

            setActiveZone()
            setFloor(1)
            setActiveBuilding(0)
            setBuilding([buildingData[0]])

        }
    }, [activeCity]);

    useEffect(() => {
        setChecker(true)
    }, [])

    // Function for switching to main buildingMap
    const goBuilding = (elem, prop) => {
        const frost = buildingData.filter(item => item.name == elem[0])

        if (frost.length > elem[2]) {
            setBuilding(frost)
            setActiveBuilding(elem[1])
            prop && setFloor(elem[2])
        } else {
            setBuilding(frost)
            setActiveBuilding(elem[1])
            setFloor(prop ? elem[2] : 1)
        }
    }


    const [floor, setFloor] = useState(positionTerminal.floor);

    // const [navigationList, setNavigationList] = useState();
    const [activeZone, setActiveZone] = useState();
    const [activeCategory, setActiveCategory] = useState();

    // const getNavigationData = (optionFloor) => {

    //     const filterList = building[0].floors.filter(item => item.floor == (optionFloor ? optionFloor : floor))
    //     const data = filterList[0]?.zone

    //     setNavigationList(data)
    // }

    const toggleVisible = () => {

        const findList = document.getElementById("findListMap")
        const buildingMap = document.getElementById("buildingMap")
        findList.className = findList.className.includes("grid") ? findList.className.replace("grid", "hidden") : findList.className.replace("hidden", "grid")
        buildingMap.className = buildingMap.className.includes("flex") ? buildingMap.className.replace("flex", "invisible") : buildingMap.className.replace("invisible", "flex")

    }

    // useEffect(() => {
    //     // setActiveZone()
    //     // getNavigationData()
    // }, [floor, building]);

    const crumbs = [['Схема зданий', 'buildingMap']]

    return (
        <Layout crumbs={crumbs} >

            <FindDialog data={city[activeCity]} goBuilding={goBuilding} setActiveZone={setActiveZone} />

            <div id="buildingMap" className='w-full h-full flex justify-between bg-[bluesd]'>

                {/* Left bar */}
                {/* <div className='w-[250px] h-[875px] bg-[redsd] flex flex-col justify-between'>

                    <div className='max-h-[480px]'>
                        <h1 className='text-[22px] font-bold mt-[30px] mb-[10px] pb-[8px] border-[#dbdbdb] border-b'>Каталог товаров</h1>
                        <NavList list={navigationList} activeZone={activeZone} setActiveZone={setActiveZone} />
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

                                <button onClick={() => goBuilding([activeZone.build[0], activeZone.build[1], floor])} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white bg-[#008954]`}>
                                    <p>Перейти к зданию</p>
                                </button>

                            ) : activeZone.allCategory ? (

                                <button onClick={() => navigate(`/catalog/${activeCategory ? activeCategory.id : activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white bg-[#008954]`}>
                                    <p>Перейти к каталогу</p>
                                </button>

                            ) : (

                                <button disabled={!activeZone.id && true} onClick={() => navigate(`/catalog/${activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white ${activeZone.id ? 'bg-[#008954]' : 'bg-[#00895450]'}`}>
                                    <p>Перейти к каталогу</p>
                                </button>
                            )}
                        </div>
                    )}
                </div> */}



                {/* <div className={`absolute border-4 border-[#008954] p-[10px] bg-[#00895460] bottom-[160px] right-[192px] ${!activeZone && 'hidden'}`}> */}
                {/* {activeZone && (
                        <div className={`absolute border-4 border-[#008954] p-[10px] w-[350px] bg-[#00895460] bottom-[160px] right-[192px] ${!activeZone && 'hidden'}`}>
                            <p className={`text-[20px] font-semibold mb-[10px] ${!activeZone.allCategory && 'hidden'}`}>Категории:</p>

                            <button onClick={() => setActiveZone()} className={`absolute w-[30px] h-[30px] rounded bg-[#f94545] top-[5px] right-[5px] ${!activeZone.allCategory && 'hidden'}`}>
                                <p>X</p>
                            </button>

                            {activeZone.allCategory?.map((item) => (
                                <button key={item.id} onClick={() => setActiveCategory(item)} className='grid text-[18px]  font-semibold pl-[15px] mb-[10px]'>
                                    <p className={`border-b-4 truncate ${activeCategory?.id == item.id && 'border-[#008954]'}`}>-{item.name}</p>
                                </button>
                            ))}

                            {activeZone.allCategory ? (

                                <button onClick={() => navigate(`/catalog/${activeCategory ? activeCategory.id : activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white bg-[#008954]`}>
                                    <p>Перейти к каталогу</p>
                                </button>

                            ) : (

                                <button disabled={!activeZone.id && true} onClick={() => navigate(`/catalog/${activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white ${activeZone.id ? 'bg-[#008954]' : 'bg-[#00895450]'}`}>
                                    <p>Перейти к каталогу</p>
                                </button>
                            )}
                        </div>
                    )} */}
                {/* </div> */}

                <PopUpCatalog activeZone={activeZone} setActiveZone={setActiveZone} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />


                {/* Other element */}
                <div className='w-full h-[879px] bg-[greensd] p-[10px] '>

                    <div className='w-[1700px] flex justify-between h-[50px]'>

                        {/* Select building */}
                        <div className='w-[1170px] h-[60px] flex items-center bg-[redsd] overflow-y-scroll'>

                            {buildingData.map((item, index) => (
                                <button key={item + index} onClick={() => { setBuilding(buildingData.filter(it => it.name == item.name)); setActiveBuilding(item.name); setFloor(1); setActiveZone() }} className={`mr-[10px] border-[2px] p-[5px] whitespace-nowrap rounded ${item.name == activeBuilding ? `border-[#008954]` : `border-[#dbdbdb]`} `}>
                                    <p>{item.name}</p>
                                </button>

                            ))}

                        </div>

                        <div className='flex gap-2'>

                            <button onClick={() => toggleVisible()} className="p-[7px] border border-[#dbdbdb] rounded">
                                <p>Поиск по каталогам</p>
                                {/* <Icons name="search" className="w-[15px] h-[15px] mt-[5px]" /> */}
                            </button>

                            <button onClick={() => goSetBuildingMap()} className="p-[7px] border border-[#dbdbdb] rounded" >
                                <p>Настройки</p>
                            </button>

                            {/* Select city */}
                            <div className='flex items-center border border-[#dbdbdb] rounded'>
                                <SelectCity city={city} setActiveCity={setActiveCity} activeCity={positionTerminal.city} />
                            </div>

                        </div>

                    </div>

                    {/* Display building map */}
                    {/* {(building[0]?.name == "Общая Схема КИРГУ") ? (

                        <StartMapProject buildingData={building[0]?.floors} activeBuilding={activeBuilding} city={activeCity} activeTerminal={positionTerminal} goBuilding={goBuilding} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone} />

                    ) : ( */}

                    <MapProject buildingData={building[0]?.floors} city={activeCity} activeTerminal={activeTerminal()} floor={floor} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone} />

                    {/* )}  */}
                </div>

            </div>
        </Layout>
    )

}


export default BuildingMap;