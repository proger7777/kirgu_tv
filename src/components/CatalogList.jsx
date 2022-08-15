import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CatalogList = ({catalog, catalogId, fromAllCats}) => {

    return(
        <div className={`catalog_content`}>
            <div className='flex flex-wrap '>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} />
            )}
            </div>
        </div>
    )
}

export default CatalogList;