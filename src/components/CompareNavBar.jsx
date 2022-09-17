import React, { useEffect, useState } from "react";
import CompareNavBarItem from "./CompareNavBarItem";


const CompareNavBar = ({ updatePage, currentId }) => {

    const [comparison, setComparison] = useState([])
    const [catalogId, setCatalogId] = useState([])

    useEffect(() => {

        Compare()

    }, [])

    function Compare () {
        const raw = localStorage.getItem('comparison') || []
        if (raw.length) {
            setComparison(JSON.parse(raw))
        }
    }

    //Добавление уникальных CatalogId

    comparison.map(cat => {

        if (!catalogId.find((item) => item == cat.category)) {

            setCatalogId([cat.category, ...catalogId])

        }
    })

    return (
        <div className="w-full flex">

            {(catalogId.length) ? (
                catalogId.map((item, i) => (

                    <div className={`mr-[16px] border rounded-[4px] ${(item == currentId) ? (' border-[#008954]') : (' border-[#e6e6e6]')}`} key={i}>
                    
                       <CompareNavBarItem catId={item} key={i} updatePage={id => updatePage(id)}/>
                    
                    </div>
                    
                ))

            ) : (<></>)
            }

        </div>
    )
}

export default CompareNavBar;