import React from 'react'

const FindDialog = ({ data, goBuilding, setActiveZone }) => {

    const toggleVisibleFind = (id) => {

        const findList = document.getElementById("findListMap")
        const buildingMap = document.getElementById("buildingMap")

        // const icon = document.getElementById(`iconDownForList-${id}`)
        // const elementList = document.getElementById(`elementList-${id}`)
        // const titleNameList = document.getElementById(`titleNameList-${id}`)
        findList.className = findList.className.includes("grid") ? findList.className.replace("grid", "hidden") : findList.className.replace("hidden", "grid")
        buildingMap.className = buildingMap.className.includes("flex") ? buildingMap.className.replace("flex", "invisible") : buildingMap.className.replace("invisible", "flex")

        // titleNameList.className = titleNameList.className.includes("truncate") ? titleNameList.className.replace("truncate", "sd") : titleNameList.className.replace("sd", "truncate")
        // elementList.className = elementList.className.includes("grid") ? elementList.className.replace("grid", "hidden") : elementList.className.replace("hidden", "grid")
        // icon.style.transform = icon.style.transform ? '' : 'rotate(180deg)'

    }

    const toggleVisibleList = (id) => {

        // const icon = document.getElementById(`iconDownForList-${id}`)
        const elementList = document.getElementById(`elementFindList-${id}`)
        // const titleNameList = document.getElementById(`titleNameList-${id}`)

        // titleNameList.className = titleNameList.className.includes("truncate") ? titleNameList.className.replace("truncate", "sd") : titleNameList.className.replace("sd", "truncate")
        elementList.className = elementList.className.includes("grid") ? elementList.className.replace("grid", "hidden") : elementList.className.replace("hidden", "grid")
        // icon.style.transform = icon.style.transform ? '' : 'rotate(180deg)'

    }

    // console.log(data)
    return (
        <div id='findListMap' className='absolute w-[1720px] h-[880px] hidden border-4 border-[#008954]'>

            <h1 className='w-full text-center font-semibold text-[25px]'>Навигация</h1>

            <button onClick={() => toggleVisibleFind()} className='absolute w-[40px] h-[40px] rounded right-[10px] top-[10px] bg-[#fd4040]'>
                <p>X</p>
            </button>

            <div className='flex justify-around gap-5 mx-[50px]'>

                {data.map((item, startIndex) =>

                    !item.allBuild &&

                    <div key={item.name + startIndex} className=''>

                        <p className='w-full text-center text-[22px] text-[#008954] font-semibold'>{item.name}</p>

                        <div className='h-[750px] overflow-y-scroll flex flex-col gap-2'>

                            {item.floors.map((elem, index) =>

                                <div key={item.name + elem.floor + index} className='flex flex-col border-2 border-[#008954] mb-[10px]'>

                                    <div className='font-semibold bg-[#00895499] text-center'>
                                        <p>{elem.floor} этаж</p>
                                    </div>

                                    <div id={`elementFindList-${item.name + elem.floor}`} className=''>

                                        {elem.zone.map((zone, index) => (
                                            <button onClick={() => { toggleVisibleFind(); goBuilding([item.name, startIndex + 1, elem.floor], true); setActiveZone(zone); console.log(zone.props) }} className="w-[350px] truncate ml-[15px] flex " key={item.name + elem.floor + zone.id + index}>
                                                <p>{zone.name}</p>
                                            </button>
                                        ))}

                                    </div>

                                </div>

                            )}

                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default FindDialog