import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CatalogList = ({catalog, catalogId, fromAllCats, removeFavorite,  articleDelete}) => {

    return(
        <div className={`catalog_content`}>
            <div className='flex flex-wrap justify-between'>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} removeF={removeFavorite} articleItem={articleDelete}/>
            )}
            </div>
        </div>
    )
}

export default CatalogList;