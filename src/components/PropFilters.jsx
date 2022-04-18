import { useState } from "react";
import { useEffect } from "react";
import PropFilterItem from "./PropFilterItem"

const PropFilters = ({propsData, setFilterProp}) => {

    const [openPropFiltId, setOpenPropFiltId] = useState({id: null, open: false})

    const openAccord = (pr) => {
        const open = openPropFiltId.id === pr.id ? !openPropFiltId.open : true
        setOpenPropFiltId({id: pr.id, open: open})
    }

    return (
        <>
            { 
                propsData.map((i) => {
                    return Object.keys(i.values).length
                    ? <PropFilterItem key={i.id} pr={i} openData={openPropFiltId} openAccord={openAccord} setFilterProp={setFilterProp} />
                    : false
                }) 
            }
        </>

    )

}

export default PropFilters;