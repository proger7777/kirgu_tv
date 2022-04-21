import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import CatalogList from "./CatalogList";
import FiltersCatalog from "./FiltersCatalog";
import Loadering from "./Loadering";
import Pagination from "./Pagination";
import { getCatalog } from "./services/categories";

const CatalogContent = ({catalogId, title}) => {

    const [pageNum, setPageNum] = useState(1)
    const [catalog, setCatalog] = useState([])
    const [filters, setFilters] = useState({})

    const [fetchCatalog, isCatalogLoading, catalogError] = useFetching(async() => {
        const result = await getCatalog(catalogId, pageNum, filters)
        setCatalog(result)
    })

    function setFilterProp(propInp, propParent) {

        if(propInp.checked) {
            if(!filters[propParent]) {
                filters[propParent] = []
            }

            filters[propParent].push(propInp.value)
        } else {
            filters[propParent] = filters[propParent].filter(val => val !== propInp.value);
        }

        setFilters({...filters})

        console.log(filters)

        setPageNum(1)
    }

    useEffect(() => {
        fetchCatalog()
    }, [filters, pageNum])

    return(
        <>
            <FiltersCatalog id={catalogId} setFilterProp={setFilterProp} />
            <div className='catalog_block w-[1363px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[24px]'>{title}</h2>
                    <Pagination pageNum={pageNum} setPageNum={setPageNum} lastPage={false} /> 
                </div>
                {isCatalogLoading
                    ? <Loadering />
                    : <CatalogList catalog={catalog} catalogId={catalogId} />
                } 
            </div>
        </>
    )

}


export default CatalogContent;