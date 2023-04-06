import React, { useEffect, useState } from 'react'
import svg from "../../images/cats.svg"
const FindDialog = ({ data, goBuilding, setActiveZone, toggleVisible, city }) => {

    const [selectBuild, setSelectBuild] = useState();
    const aData =
    
    {
        name: "Мебельный корпус",
        titleName: "Товары для дома",
        icon: "dlya_doma",
        floors: [
            {
                name: "mebel",
                floor: 1,
    
                zone: [
                  {
                    name: "Текстиль",
                    id: "97c06658-eab4-450c-8502-b4391fa2f359",
                    props: [
                      {
                        graphics: true,
                        startPoint: [-2530, -545],
                        point: [
                          [-1555, -545],
                          [-1555, 285],
                          [-1925, 285],
                          [-1925, 645],
                          [-2530, 645],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Клеенки корзины сушилки пластик",
                    id: "0686859a-c54a-46a3-aa4e-f0b8784ececf",
                    props: [
                      {
                        graphics: true,
                        startPoint: [-1535, -920],
                        point: [
                          [-460, -920],
                          [-460, 115],
                          [-925, 115],
                          [-925, -10],
                          [-1280, -10],
                          [-1280, 115],
                          [-1535, 115],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Бытовая химия",
                    id: "360e746a-10d6-412a-a022-d2fd8b8c1e80",
                    props: [
                      {
                        graphics: true,
                        startPoint: [-1325, 300],
                        point: [
                          [-500, 300],
                          [-500, 640],
                          [-1325, 640],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Арома",
                    id: "790b0b5a-c584-4b0b-a718-66b45d317b41",
                    props: [
                      {
                        graphics: true,
                        startPoint: [-2200, -920],
                        point: [
                          [-1920, -920],
                          [-1920, -565],
                          [-2200, -565],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Сувенир",
                    id: "e3d1154f-3756-4348-a7a0-999b90c56929",
                    props: [
                      {
                        graphics: true,
                        startPoint: [-1910, -920],
                        point: [
                          [-1545, -920],
                          [-1545, -565],
                          [-1910, -565],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Сковородки",
                    id: "ee318362-ad72-468a-92b9-66de67bc741f",
                    props: [
                      {
                        graphics: true,
                        startPoint: [-450, -555],
                        point: [
                          [455, -555],
                          [455, -445],
                          [-450, -445],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Кастрюли посуда для сервировки",
                    id: "67168837-3e29-4fab-8a13-51bb45eefe35",
                    allCategory: [
                      {
                        name: "Кастрюли",
                        id: "97e76780-3323-4c30-95c6-0c1b36f8c0d0",
                      },
                      {
                        name: "Посуда для сервировки",
                        id: "67168837-3e29-4fab-8a13-51bb45eefe35",
                      },
                    ],
                    props: [
                      {
                        graphics: true,
                        startPoint: [468, -920],
                        point: [
                          [1920, -920],
                          [1920, -565],
                          [468, -565],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Кухонная утварь тарелки кастрюли чайники",
                    id: "531e96d5-9c30-4b4c-823d-e91792a37f07",
                    allCategory: [
                      {
                        name: "Посуда для приготовления пищи",
                        id: "e1e1b734-1fd4-4d63-b34d-f894b5837ad0",
                      },
                      {
                        name: "Столовая посуда",
                        id: "33775e33-b557-47af-96a6-7c94df6d1ad5",
                      },
                      {
                        name: "Чайники",
                        id: "fef45bb6-2b0a-41f4-b8a4-ad6cb4d1281a",
                      },
                    ],
                    props: [
                      {
                        graphics: true,
                        startPoint: [470, -555],
                        point: [
                          [1919, -555],
                          [1919, 115],
                          [1280, 115],
                          [1280, -8],
                          [923, -8],
                          [923, 115],
                          [469, 115],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Хрусталь",
                    id: "33775e33-b557-47af-96a6-7c94df6d1ad5",
                    props: [
                      {
                        graphics: true,
                        startPoint: [1935, -920],
                        point: [
                          [2520, -920],
                          [2520, -220],
                          [2205, -220],
                          [2205, -340],
                          [1935, -340],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Фарфор",
                    id: "",
                    props: [
                      {
                        graphics: true,
                        startPoint: [1935, -210],
                        point: [
                          [2520, -210],
                          [2520, 640],
                          [1937, 640],
                          [1937, 400],
                          [2216, 400],
                          [2216, 290],
                          [1935, 290],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Премиальный бутик",
                    id: "",
                    props: [
                      {
                        graphics: true,
                        startPoint: [800, 300],
                        point: [
                          [1307, 300],
                          [1307, 640],
                          [800, 640],
                        ],
                      },
                    ],
                  },
                  {
                    name: "Аптека",
                    id: "",
                    props: [
                      {
                        graphics: true,
                        startPoint: [495, 300],
                        point: [
                          [790, 300],
                          [790, 640],
                          [495, 640],
                        ],
                      },
                    ],
                  },
                ],
              },
        ].reverse(),
    }

    useEffect(() => {
        setSelectBuild()
    }, [data]);

    return (
        <div id='findListMap' className='absolute w-[1720px] h-[880px] hidden bg-[#ffffff] border-4 border-[#008954]'>

            <h1 className='w-full text-center font-semibold text-[25px]'>Навигация</h1>

            <button onClick={() => toggleVisible()} className='absolute w-[40px] h-[40px] rounded right-[10px] top-[10px] bg-[#fd4040]'>
                <p>X</p>
            </button>

            {selectBuild &&
                <button onClick={() => setSelectBuild()} className='absolute w-[80px] h-[40px] rounded left-[10px] top-[10px] bg-[#b7b7b7]'>
                    <p>BACK</p>
                </button>
            }

            <div className='h-[800px] flex items-center'>
                {!selectBuild ? (
                    <div className='flex flex-wrap w-full justify-around items-center mllx-[50px]'>
                        {data.length && data?.map((item, startIndex) =>

                            !item.allBuild &&

                            <div onClick={() => setSelectBuild(item)} key={startIndex} className='relative bg-[#F5F5F5] w-[500px] h-[350px] m-[20px]'>
                                <img src={require(`../../images/${item.icon ? item.icon : 'cats'}.svg`)} alt='' className='w-[334px] h-[210px] m-auto mt-[40px]' />
                                <span className='absolute bottom-[17px] block w-full text-center font-semibold'>{item.name}</span>
                            </div>
                        )}

                        {city == "Махачкала" &&
                            <div onClick={() => setSelectBuild(aData)} className='relative bg-[#F5F5F5] w-[500px] h-[350px] m-[20px]'>
                                <img src={require(`../../images/${aData.icon ? aData.icon : 'cats'}.svg`)} alt='' className='w-[334px] h-[210px] m-auto mt-[40px]' />
                                <span className='absolute bottom-[17px] block w-full text-center font-semibold'>{aData.titleName}</span>
                            </div>
                        }

                    </div>
                ) : (
                    <div className='flex flex-wrap w-full justify-around items-center h-[800px] mxfd-[20px] '>
                        {selectBuild.floors.map((elem, index) => (
                            <div key={index} className='flex flex-col border-2 border-[#008954] mb-[10px] h-[390px]'>

                                <div className='font-semibold bg-[#00895499] text-center'>
                                    <p>{elem.floor} этаж</p>
                                </div>

                                <div className=''>

                                    {elem.zone.map((zone, index) => (
                                        <button onClick={() => { goBuilding([selectBuild.name, index, elem.floor], 'find'); setActiveZone(zone); setSelectBuild() }} className="w-[350px] truncate ml-[15px] flex" key={index}>
                                            <p className='text-[20px] font-serif'>{zone.name}</p>
                                        </button>
                                    ))}

                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FindDialog