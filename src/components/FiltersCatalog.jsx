import PriceFilter from "./PriceRange/PriceFilter";
import PropFilters from "./PropFilters";

const FiltersCatalog = ({height, filterData, setFilterProp, setPriceFilter}) => {

    return (
        <div className={`w-[256px]`}>
            {filterData.price && <PriceFilter onChange={setPriceFilter} minPrice={filterData.price.min} maxPrice={filterData.price.max} /> } 
            <PropFilters propsData={filterData.props} setFilterProp={setFilterProp} />
        </div>
    )

}

export default FiltersCatalog;