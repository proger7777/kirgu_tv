import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompareNavBarItem from "./CompareNavBarItem";


const CompareNavBar = ({ currentId }) => {

    const [catalogId, setCatalogId] = useState([])
    const comparison = useSelector(state => state.comparison.comparison)

    //Добавление уникальных CatalogId

    comparison.map(cat => {

        if (!catalogId.find((item) => item == cat.catId)) {

            setCatalogId([cat.catId, ...catalogId])

        }
    })

    return (
        <div className="w-full flex">

            {
                catalogId.map((item, i) => (

                    <div className={`mr-[16px] border rounded-[4px] ${(item == currentId) ? (' border-[#008954]') : (' border-[#e6e6e6]')}`} key={i}>

                        <CompareNavBarItem catId={item} key={i} />

                    </div>

                ))

            }

        </div>
    )
}

export default CompareNavBar;