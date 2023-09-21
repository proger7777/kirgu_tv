import React, { } from 'react';
import { useEffect, useState } from "react";
import Layout from '../../layout';
import { useSelector } from 'react-redux';
import { SelectCity } from './SelectCity';
import SettingMapProject from './SettingMapProject';
import { useNavigate } from 'react-router-dom';


const SettingBuildingMap = () => {


    // Get city and put active city
    const city = useSelector(state => state.buildingMap.map)
    const [activeCity, setActiveCity] = useState(Object.keys(city)[0]);


    // Get building map and put active building
    const buildingData = useSelector(state => state.buildingMap.map[activeCity])
    const [building, setBuilding] = useState(buildingData[0]);
    const [activeBuilding, setActiveBuilding] = useState(0);


    // Set properties position terminal
    const navigate = useNavigate()
    const [positionTerminal, setPositionTerminal] = useState(false);
    const [ClickMkh, setClickMkh] = useState(1);
    const saveSetting = () => {

        const setting = {
            city: activeCity,
            buildingName: building.name,
            floor: positionTerminal[0],
            position: positionTerminal[2]
        }

        console.log(positionTerminal)
        localStorage.setItem('settingBuilding', JSON.stringify(setting))
        alert("Вы успешно сохранили данные!")
        // navigate("/" , {replace: true})
        window.location.href = '/tv'
    }

    // ⚜️⚜️⚜️MKH-PRODUCTION⚜️⚜️⚜️
    const MKH = () => {
        setClickMkh(ClickMkh + 1)

        if (ClickMkh == 5) {
            if (window.confirm("⚜️⚜️⚜️MKH-PRODUCTION⚜️⚜️⚜️")) {
                window.open('https://mkh-production.ru/', '_blank');
            };
        }

        ClickMkh == 5 && setClickMkh(1)
    }


    // Update building map when change building
    useEffect(() => {
        setActiveBuilding(0)
        setBuilding(Object.values(buildingData)[0])
        setPositionTerminal(false)
    }, [activeCity]);


    const crumbs = [['Схема зданий', 'buildingMap'], ['Настройка положения терминала', 'settingBuildingMap']]

    return (
        <Layout crumbs={crumbs} >
            <div className='w-full h-full flex-col justify-between bg-[bluesd]'>



                <div className='w-full h-[30px] flex justify-center text-[30px] '>
                    <button onClick={() => MKH()}>Установка местоположения для терминала!</button>
                </div>



                {/* Other element */}
                <div className='w-full h-[849px] bg-[greensd] p-[10px] '>

                    <div className='flex justify-between h-[50px]'>


                        {/* Select building */}
                        <div className='w-[1170px] h-[60px] ml-[8px] flex items-center bg-[redsd] overflow-y-scroll'>
                            {buildingData.map((item, index) => (
                                    <button key={item+index} onClick={() => { setBuilding( buildingData.filter(it => it.name == item.name)[0] ); setActiveBuilding(item.name); }} className={`mr-[10px] border-[2px] p-[5px] whitespace-nowrap rounded ${item.name == activeBuilding ? `border-[#008954]` : `border-[#dbdbdb]`} `}>
                                        <p>{item.name}</p>
                                    </button>

                            ))}
                        </div>


                        {/* Save setting Terminal */}
                        <div>
                            <button disabled={!positionTerminal && true} onClick={() => saveSetting()} className={`border rounded p-[10px] ${positionTerminal ? `bg-[#008954]` : `bg-[#9f9f9f]`}`}>
                                Сохранить настройки
                            </button>
                        </div>


                        {/* Select city */}
                        <div className='flex items-center border border-[#dbdbdb] rounded'>
                            <SelectCity city={city} setActiveCity={setActiveCity} />
                        </div>


                    </div>


                    {/* Display building map */}
                    
                    <SettingMapProject city={activeCity} buildingData={building.floors} settingsTerm={setPositionTerminal} />

                </div>


            </div>
        </Layout>
    )

}


export default SettingBuildingMap;