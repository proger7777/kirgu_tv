import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import KirguSource from "./API/KirguSource";
import PriceRange from "./PriceRange/PriceRange";
import PropFilters from "./PropFilters";

const FiltersCatalog = ({id, setFilterProp}) => {
    
    const [priceData, setPriceData] = useState(null)
    const [propsData, setPropsData] = useState(null)

    const [fetchFilters, isFiltersLoading, filtersError] = useFetching(async(id) => {
        const result = await KirguSource.getFilters(id)
        setPriceAndPropsData(result)
    })

    function setPriceAndPropsData(res) {
        setPriceData(res[0])
        setPropsData(res.slice(1))
    }

    useEffect(() => {
        fetchFilters(id)
    }, [])

    return (
        <div className='w-[256px] h-[840px] overflow-scroll'>
            {priceData && propsData && 
                <>
                    {/* <PriceRange minPr={parseInt(priceData.min)} maxPr={parseInt(priceData.max)} /> */}
                    <PropFilters propsData={propsData} setFilterProp={setFilterProp} />
                </>
            }
        </div>
    )

}

export default FiltersCatalog;