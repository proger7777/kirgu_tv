import React, { } from 'react';
import CatalogItem from "./CatalogItem";

const CompareList = ({ catalog, catalogId, fromAllCats, removeFavorite, articule1, letter }) => {


    return (
        <div className={`catalog_content`}>
            <div className='flex justify-center mt-[30px]'>
                <div className='w-[240px] font-bold mt-[auto] mb-[auto] text-center text-[22px]'>{letter}</div>
                {catalog.map(i =>
                    <CatalogItem key={i.id} cat={i} catalogId={catalogId} fromAllCats={fromAllCats} removeF={removeFavorite} articule2={articule1} />
                )}
            </div>
        </div>
    )
}

export default CompareList;