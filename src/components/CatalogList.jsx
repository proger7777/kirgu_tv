import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CatalogList = ({catalog, catalogId, fromAllCats, columns='4'}) => {

    return(
        <div className={`catalog_content grid grid-cols-${columns} w-full gap-[25px] mt-[15px]`}>
            {catalog.map(i => 
                (catalogId) ? (
                    <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} />

                ) : (
                    <CatalogItem key={i.id} cat={i} catalogId={i.category} fromAllCats={fromAllCats} />
                )
            )}
        </div>
    )
}

export default CatalogList;