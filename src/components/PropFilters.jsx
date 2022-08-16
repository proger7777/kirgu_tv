import React, {  }  from 'react';
import { useState } from "react";
import PropFilterItem from "./PropFilterItem"

const PropFilters = ({propsData, setFilterProp}) => {

    for ( let i = 0 ; i < propsData.length ; i++) {
        if (propsData[i].name == 'Рассрочка') {
            if (propsData[i].props.length == 1 && propsData[i].props[0].name == 'пустое значение') { 
                delete propsData[i]
            }
        }
    }

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