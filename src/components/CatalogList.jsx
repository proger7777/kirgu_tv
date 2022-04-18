import CatalogItem from "./CatalogItem";

const CatalogList = ({catalog, catalogId}) => {

    return(
        <div className='catalog_content grid grid-cols-4 w-full gap-[25px] mt-[50px]'>
            {catalog.map(i => 
                <CatalogItem key={i.id} cat={i} catalogId={catalogId} />
            )}
        </div>
    )
}

export default CatalogList;