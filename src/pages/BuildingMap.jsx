import React, { } from 'react';
import { useEffect, useState } from "react";
import Layout from '../layout';
import MapProject from '../components/BuildingMap/MapProjectPIXI';
import { useSelector } from 'react-redux';
import { SelectCity } from '../components/BuildingMap/SelectCity';
import { useNavigate } from 'react-router-dom';
import FindDialog from '../components/BuildingMap/FindDialog';
import PopUpCatalog from '../components/BuildingMap/PopUpCatalog';
import MapProjectTWO from '../components/BuildingMap/MapProject';


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
            setActiveBuilding(buildingData[0].name)
            setBuilding([buildingData[0]])

        }
    }, [activeCity]);

    useEffect(() => {
        setChecker(true)
    }, [])

    // Function for switching to main buildingMap
    const goBuilding = (elem, prop, zone) => {

        const frost = buildingData.filter(item => item.name == elem[0])

        if (frost.length > elem[2]) {
            setActiveZone()
            setBuilding(frost)
            setActiveBuilding(elem[1])
            prop && setFloor(elem[2])
        } else {
            setActiveZone()
            setBuilding(frost)
            setActiveBuilding(elem[1])
            setFloor(prop ? elem[2] : 1)
        }
        setActiveBuilding(elem[0])
        prop == "find" && toggleVisible()

        if (zone) {
            setActiveZone(zone)
        }
    }


    const [floor, setFloor] = useState(positionTerminal.floor);

    // const [navigationList, setNavigationList] = useState();
    const [activeZone, setActiveZone] = useState();
    const [activeCategory, setActiveCategory] = useState();

    const toggleVisible = () => {

        const findList = document.getElementById("findListMap")
        const buildingMap = document.getElementById("buildingMap")
        findList.className = findList.className.includes("grid") ? findList.className.replace("grid", "hidden") : findList.className.replace("hidden", "grid")
        buildingMap.className = buildingMap.className.includes("flex") ? buildingMap.className.replace("flex", "invisible") : buildingMap.className.replace("invisible", "flex")

    }

    const crumbs = [['Схема зданий', 'buildingMap']]

    return (
        <Layout crumbs={crumbs} activeMenu="navigation">

            <FindDialog data={city[activeCity]} goBuilding={goBuilding} toggleVisible={toggleVisible} city={activeCity} />

            <div id="buildingMap" className='w-full h-full flex justify-between focus:outline-none'>

                <PopUpCatalog activeZone={activeZone} setActiveZone={setActiveZone} activeCategory={activeCategory} setActiveCategory={setActiveCategory} goBuilding={goBuilding} />

                {/* Other element */}
                <div className='w-full h-[879px] p-[10px] '>

                    <div className='w-[1700px] flex justify-between h-[50px]'>

                        {/* Select building */}
                        <div className='w-[1000px] h-[60px] flex items-center overflow-y-scroll'>

                            {buildingData?.map((item, index) => (
                                <button key={item + index} onClick={() => { setBuilding(buildingData.filter(it => it.name == item.name)); setActiveBuilding(item.name); setFloor(1); setActiveZone() }} className={`mr-[10px] border-[2px] p-[5px] whitespace-nowrap rounded ${item.name == activeBuilding ? `border-[#008954]` : `border-[#dbdbdb]`} `}>
                                    <p>{item.name}</p>
                                </button>

                            ))}

                        </div>

                        <div className='flex'>

                            {/* <button onClick={() => toggleVisible()} className="p-[7px] border mr-[10px] border-[#dbdbdb] rounded ">
                                <p>Поиск по каталогам</p>
                                <Icons name="search" className="w-[15px] h-[15px] mt-[5px]" />
                            </button> */}

                            <button onClick={() => goSetBuildingMap()} className="p-[7px] border mr-[10px] border-[#dbdbdb] rounded" >
                                <p>Настройки</p>
                            </button>

                            {/* Select city */}
                            <div className='flex items-center border border-[#dbdbdb] rounded'>
                                <SelectCity city={city} setActiveCity={setActiveCity} activeCity={positionTerminal.city} />
                            </div>

                        </div>

                    </div>

                    {/* Display building map */}
                    {/* <MapProject buildingData={building[0]?.floors} city={activeCity} activeTerminal={activeTerminal()} floor={floor} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone} goBuilding={goBuilding} /> */}
                    <MapProjectTWO buildingData={building[0]?.floors} city={activeCity} activeTerminal={activeTerminal()} floor={floor} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone} goBuilding={goBuilding} />
                </div>

            </div>
        </Layout>
    )

}


export default BuildingMap;