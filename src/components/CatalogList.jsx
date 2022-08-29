import React, {  }  from 'react';
import CatalogItem from "./CatalogItem";

const CatalogList = ({catalog, catalogId, category, fromAllCats, removeFavorite, removeCompare,  articleDelete, save}) => {

    return(
        <div className={`catalog_content`}>
            <div className='flex flex-wrap justify-between'>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} removeF={removeFavorite} removeC={removeCompare} articleItem={articleDelete} saveC={save}/>
            )}
            </div>
        </div>
    )
}

export default CatalogList;