import React, { } from 'react';
import { useEffect, useState } from "react";
import Layout from '../../layout';
import { useSelector } from 'react-redux';
import { SelectCity } from './SelectCity';
import { useNavigate, useParams } from 'react-router-dom';
import FindDialog from './FindDialog';
import PopUpCatalog from './PopUpCatalog';
import MapProject from './MapProject';


const BuildingMap = () => {

    const navigate = useNavigate();
    const params = useParams()

    // Setting building
    const dataBuilding = params.city ? { city: params.city, floor: 1 } : JSON.parse(localStorage.getItem('settingBuilding'))

    // Get all building and put active city
    const allBuilding = useSelector(state => state.buildingMap.map)
    const [activeCity, setActiveCity] = useState(dataBuilding.city);

    // Get building map and put active building
    const buildingsCity = useSelector(state => state.buildingMap.map[activeCity])
    const [building, setBuilding] = useState(params.city ? [buildingsCity[0]] : buildingsCity.filter(item => item.name == dataBuilding.buildingName));

    // Parameters for initializing active schema settings
    const [floor, setFloor] = useState(dataBuilding.floor);
    const [activeBuilding, setActiveBuilding] = useState(params.city ? buildingsCity[0].name : dataBuilding.buildingName);
    const [activeZone, setActiveZone] = useState();
    const [activeCategory, setActiveCategory] = useState();

    const [checker, setChecker] = useState(false);

    // If the terminal is active in this building, get the terminal position, otherwise false
    const activeTerminal = () => {
        if (activeCity == dataBuilding.city && activeBuilding == dataBuilding.buildingName) {
            return dataBuilding
        } else {
            return false
        }
    }

    // Open page for setting position terminal
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
            setActiveBuilding(buildingsCity[0].name)
            setBuilding([buildingsCity[0]])

        }
    }, [activeCity]);

    useEffect(() => {
        setChecker(true)
    }, [])

    // Function for switching to main buildingMap
    const goBuilding = (elem, prop, zone) => {

        const frost = buildingsCity.filter(item => item.name == elem[0])

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

    const toggleVisible = () => {

        const findList = document.getElementById("findListMap")
        const buildingMap = document.getElementById("buildingMap")
        findList.className = findList.className.includes("grid") ? findList.className.replace("grid", "hidden") : findList.className.replace("hidden", "grid")
        buildingMap.className = buildingMap.className.includes("flex") ? buildingMap.className.replace("flex", "invisible") : buildingMap.className.replace("invisible", "flex")

    }

    const crumbs = params.city ? [['Информация', 'info'], ['Контакты', 'info/contacts'],['Схема зданий', 'buildingMap']] : [['Схема зданий', 'buildingMap']]

    useEffect(() => {
        // console.log(params.city ? "Yes" : "No")
        // console.group("Building")
        // console.log("dataBuilding", dataBuilding)
        // console.log("buildingsCity", buildingsCity)
        // console.log("activeCity", activeCity)
        // console.log("building", building)
        // console.log("activeBuilding", activeBuilding)

        // console.log(building[0].floors)
        // console.log(activeCity )
        // console.log(activeTerminal() )
        // console.log(floor )
        // console.log( activeZone)
        // // console.log( )
        // // console.log( )
        // console.groupEnd()
    }, [buildingsCity, activeCity, building, activeBuilding]);


    return (
        <Layout crumbs={crumbs} activeMenu="navigation">

            <FindDialog data={allBuilding[activeCity]} goBuilding={goBuilding} toggleVisible={toggleVisible} city={activeCity} />

            <div id="buildingMap" className='w-full h-full flex justify-between focus:outline-none'>

                <PopUpCatalog activeZone={activeZone} setActiveZone={setActiveZone} activeCategory={activeCategory} setActiveCategory={setActiveCategory} goBuilding={goBuilding} />

                {/* Other element */}
                <div className='w-full h-[879px] p-[10px] '>

                    <div className='w-[1700px] flex justify-between h-[50px]'>

                        {/* Select building */}
                        <div className='w-[1000px] h-[60px] flex items-center overflow-y-scroll'>

                            {buildingsCity?.map((item, index) => (
                                <button key={item + index} onClick={() => { setBuilding(buildingsCity.filter(it => it.name == item.name)); setActiveBuilding(item.name); setFloor(1); setActiveZone() }} className={`mr-[10px] border-[2px] p-[5px] whitespace-nowrap rounded ${item.name == activeBuilding ? `border-[#008954]` : `border-[#dbdbdb]`} `}>
                                    <p>{item.name}</p>
                                </button>

                            ))}

                        </div>

                        <div className='flex'>

                            <button onClick={() => toggleVisible()} className="p-[7px] border mr-[10px] border-[#dbdbdb] rounded ">
                                <p>Поиск по каталогам</p>
                            </button>

                            <button onClick={() => goSetBuildingMap()} className="p-[7px] border mr-[10px] border-[#dbdbdb] rounded" >
                                <p>Настройки</p>
                            </button>

                            {/* Select city */}
                            <div className='flex items-center border border-[#dbdbdb] rounded'>
                                <SelectCity city={allBuilding} setActiveCity={setActiveCity} activeCity={dataBuilding.city} />
                            </div>

                        </div>

                    </div>

                    {/* Display building map */}
                    <MapProject buildingData={building[0]?.floors} city={activeCity} activeTerminal={activeTerminal()} floor={floor} setFloor={setFloor} activeZone={activeZone} setActiveZone={setActiveZone} goBuilding={goBuilding} />

                </div>

            </div>
        </Layout>
    )

}


export default BuildingMap;