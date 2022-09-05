import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CompareList = ({catalog, catalogId, category, fromAllCats, removeFavorite, removeCompare,  articleDelete, save}) => {

    return(
        <div className={`catalog_content`}>
            <div className='flex'>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} removeF={removeFavorite} removeC={removeCompare} articleItem={articleDelete} saveC={save}/>
            )}
            </div>
        </div>
    )
}

export default CompareList;