import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CatalogList = ({catalog, catalogId, fromAllCats, columns=4}) => {

    return(
        <div className={`catalog_content grid grid-cols-4 gap-[25px] mt-[15px]`}>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} />
            )}
        </div>
    )
}

export default CatalogList;