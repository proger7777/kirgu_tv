import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CompareList = ({catalog, catalogId, fromAllCats, removeFavorite, removeCompare,  articleDelete}) => {

    return(
        <div className={`catalog_content`}>
            <div className='flex'>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} removeF={removeFavorite} removeC={removeCompare} articleItem={articleDelete}/>
            )}
            </div>
        </div>
    )
}

export default CompareList;