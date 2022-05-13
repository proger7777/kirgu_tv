import PriceFilter from "./PriceRange/PriceFilter";
import PropFilters from "./PropFilters";

const FiltersCatalog = ({height, filterData, setFilterProp, setPriceFilter}) => {

    return (
        <div className='w-[256px] min-h-[765px]'>
            {filterData.price && filterData.price.min !== '1.00' && filterData.price.max !== '1.00' &&
                <PriceFilter onChange={setPriceFilter} minPrice={filterData.price.min} maxPrice={filterData.price.max} /> 
            } 
            <PropFilters propsData={filterData.props} setFilterProp={setFilterProp} />
        </div>
    )

}

export default FiltersCatalog;