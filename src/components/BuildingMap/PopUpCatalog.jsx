import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PopUpCatalog = ({ activeZone, setActiveZone, activeCategory, setActiveCategory, goBuilding }) => {

    const navigate = useNavigate();

    useEffect(() => {
        setActiveCategory()
    }, [activeZone]);

    return (
        <div>
            {activeZone && (
                <div className={`absolute border-4 border-[#008954] p-[10px] w-[350px] bg-[#00895460] bottom-[160px] right-[192px] ${!activeZone && 'hidden'}`}>
                    <p className={`text-[20px] font-semibold mb-[10px] ${!activeZone.allCategory && 'hidden'}`}>Категории:</p>

                    <button onClick={() => {setActiveZone(); setActiveCategory()}} className={`absolute w-[30px] h-[30px] rounded bg-[#f94545] top-[5px] right-[5px] ${!activeZone.allCategory && 'hidden'}`}>
                        <p>X</p>
                    </button>

                    {activeZone.allCategory?.map((item) => (
                        <button key={item.id} onClick={() => setActiveCategory(item)} className='grid text-[18px]  font-semibold pl-[15px] mb-[10px]'>
                            <p className={`border-b-4 truncate ${activeCategory?.id == item.id && 'border-[#008954]'}`}>-{item.name}</p>
                        </button>
                    ))}

                    {activeZone.allCategory ? (

                        <button disabled={!activeCategory && true} onClick={() => navigate(`/catalog/${activeCategory.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white ${activeCategory ? 'bg-[#008954]' : 'bg-[#00895460]'}`}>
                            <p>Перейти к каталогу</p>
                        </button>

                    ) : activeZone.build ? (
                        <button disabled={!activeZone.id && true} onClick={() => goBuilding([activeZone.build[0], activeZone.build[1], 1], true) } className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white ${activeZone.id ? 'bg-[#008954]' : 'bg-[#00895450]'}`}>
                            <p>Перейти к зданию</p>
                        </button>
                    ) : (

                        <button disabled={!activeZone.id && true} onClick={() => navigate(`/catalog/${activeZone.id}`)} className={`w-full h-[50px] border rounded text-[20px] font-semibold text-white ${activeZone.id ? 'bg-[#008954]' : 'bg-[#00895450]'}`}>
                            <p>Перейти к каталогу</p>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default PopUpCatalog