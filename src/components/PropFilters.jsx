import { useState } from "react";
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
                propsData.map((i, inx) => {
                    return i.props.length
                    ? <PropFilterItem key={inx} pr={i} openData={openPropFiltId} openAccord={openAccord} setFilterProp={setFilterProp} />
                    : false
                }) 
            }
        </>

    )

}

export default PropFilters;