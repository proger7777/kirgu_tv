import React, { useEffect, useState } from 'react'
import svg from "../../images/cats.svg"
const FindDialog = ({ data, goBuilding, setActiveZone, toggleVisible }) => {

    const [selectBuild, setSelectBuild] = useState();

    // const toggleVisible = (id) => {

    //     const findList = document.getElementById("findListMap")
    //     const buildingMap = document.getElementById("buildingMap")

    //     // const icon = document.getElementById(`iconDownForList-${id}`)
    //     // const elementList = document.getElementById(`elementList-${id}`)
    //     // const titleNameList = document.getElementById(`titleNameList-${id}`)
    //     findList.className = findList.className.includes("grid") ? findList.className.replace("grid", "hidden") : findList.className.replace("hidden", "grid")
    //     buildingMap.className = buildingMap.className.includes("flex") ? buildingMap.className.replace("flex", "invisible") : buildingMap.className.replace("invisible", "flex")

    //     // titleNameList.className = titleNameList.className.includes("truncate") ? titleNameList.className.replace("truncate", "sd") : titleNameList.className.replace("sd", "truncate")
    //     // elementList.className = elementList.className.includes("grid") ? elementList.className.replace("grid", "hidden") : elementList.className.replace("hidden", "grid")
    //     // icon.style.transform = icon.style.transform ? '' : 'rotate(180deg)'

    // }

    const toggleVisibleList = (id) => {

        // const icon = document.getElementById(`iconDownForList-${id}`)
        const elementList = document.getElementById(`elementFindList-${id}`)
        // const titleNameList = document.getElementById(`titleNameList-${id}`)

        // titleNameList.className = titleNameList.className.includes("truncate") ? titleNameList.className.replace("truncate", "sd") : titleNameList.className.replace("sd", "truncate")
        elementList.className = elementList.className.includes("grid") ? elementList.className.replace("grid", "hidden") : elementList.className.replace("hidden", "grid")
        // icon.style.transform = icon.style.transform ? '' : 'rotate(180deg)'

    }

    useEffect(() => {
        console.log(selectBuild)
    }, [selectBuild]);
    return (
        <div id='findListMap' className='absolute w-[1720px] h-[880px] hidden border-4 border-[#008954]'>

            <h1 className='w-full text-center font-semibold text-[25px]'>Навигация</h1>

            <button onClick={() => toggleVisible()} className='absolute w-[40px] h-[40px] rounded right-[10px] top-[10px] bg-[#fd4040]'>
                <p>X</p>
            </button>

            {selectBuild &&
                <button onClick={() => setSelectBuild()} className='absolute w-[80px] h-[40px] rounded left-[10px] top-[10px] bg-[#b7b7b7]'>
                    <p>BACK</p>
                </button>
            }

            <div className='flex flex-wrap w-full justify-around  mllx-[50px]'>

                {!selectBuild ?

                    data.map((item, startIndex) =>

                        !item.allBuild &&

                        // <div key={item.name + startIndex} className=''>

                            // {/* <p className='w-full text-center text-[22px] text-[#008954] font-semibold'>{item.name}</p> */}

                            <div onClick={() => setSelectBuild(item)} key={startIndex} className='relative bg-[#F5F5F5] w-1/3 h-[350px] m-[20px]'>
                                <img src={svg} alt='' className='w-[234px] h-[110px] m-auto mt-[40px]' />
                                <span className='absolute bottom-[17px] block w-full text-center font-semibold'>{item.name}</span>
                            </div>

                        //     {/* <div className='h-[750px] overflow-y-scroll flex flex-col gap-2'>

                        //     {item.floors.map((elem, index) =>

                        //         <div key={item.name + elem.floor + index} className='flex flex-col border-2 border-[#008954] mb-[10px]'>

                        //             <div className='font-semibold bg-[#00895499] text-center'>
                        //                 <p>{elem.floor} этаж</p>
                        //             </div>

                        //             <div id={`elementFindList-${item.name + elem.floor}`} className=''>

                        //                 {elem.zone.map((zone, index) => (
                        //                     <button onClick={() => { toggleVisible(); goBuilding([item.name, startIndex + 1, elem.floor], true); setActiveZone(zone); console.log(zone.props) }} className="w-[350px] truncate ml-[15px] flex " key={item.name + elem.floor + zone.id + index}>
                        //                         <p>{zone.name}</p>
                        //                     </button>
                        //                 ))}

                        //             </div>

                        //         </div>

                        //     )}

                        // </div> */}
                        // </div>
                    ) : (
                        selectBuild.floors.map((elem, index) => (
                            <div key={index} className='flex flex-col border-2 border-[#008954] mb-[10px]'>

                                    <div className='font-semibold bg-[#00895499] text-center'>
                                        <p>{elem.floor} этаж</p>
                                    </div>

                                    <div className=''>

                                        {elem.zone.map((zone, index) => (
                                            <button onClick={() => { goBuilding([selectBuild.name, index, elem.floor], true); setActiveZone(zone); setSelectBuild() }} className="w-[350px] truncate ml-[15px] flex " key={index}>
                                                <p>{zone.name}</p>
                                            </button>
                                        ))}

                                    </div>

                                </div>
                        ))
                    )}

            </div>

        </div>
    )
}

export default FindDialog