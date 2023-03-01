import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Icons from "../Icons"
import { setCatUrl } from "../services/categories"




const NavList = ({ list, activeZone, setActiveZone }) => {

    return (
        <div className="w-[250px] h-full overflow-y-scroll flex flex-col gap-2">

            {list && list.map((item, index) => (

                <button key={item.id+index} onClick={() => { setActiveZone(item) }} className={`w-full flex ${item == activeZone ? 'border-b-4 border-[#008954]' : 'border-b'} `}>

                    <h1 className={`font-bold my-[5px] text-[18px] text-left ${item.id !== activeZone?.id && 'truncate'}`}>{item.name}</h1>

                </button>

            ))}

        </div >

    )
}

export default NavList