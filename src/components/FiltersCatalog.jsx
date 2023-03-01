import React, {  }  from 'react';
import PriceFilter from "./PriceRange/PriceFilter";
import PropFilters from "./PropFilters";

const FiltersCatalog = ({height, filterData, setFilterProp, setPriceFilter}) => {

    return (
        <div className='w-[256px] min-h-[765px] h-[879px] overflow-x-scroll'>
            {filterData.price && parseInt(filterData.price.min) > 1 &&
                <PriceFilter onChange={setPriceFilter} minPrice={filterData.price.min} maxPrice={filterData.price.max} /> 
            } 
            <PropFilters propsData={filterData.props} setFilterProp={setFilterProp} />
        </div>
    )

}

export default FiltersCatalog;