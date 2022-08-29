import React, {  }  from 'react';
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../layout";
import { getCatalog, getCategories, getCategoryById, getCatCrumbs } from "../components/services/categories";
import { useFetching } from "../hooks/useFetching";
import FiltersCatalog from "../components/FiltersCatalog";
import CatalogList from "../components/CatalogList";
import Loadering from "../components/Loadering";
import { getFilters } from "../components/services/filters";
import { activeMenu } from "../components/services/menu";
import Pagination from "../components/Pagination";
import Select from 'react-select'

const Catalog = () => {

    const params = useParams()

    const pageSize = 8

    const search = useLocation().search;
    const fromAllCats = new URLSearchParams(search).get('from_all_cats'); 

    const [category, setCategory] = useState([])
    const [crumbs, setСrumbs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [catalog, setCatalog] = useState({})
    const [filters, setFilters] = useState({})

    const [sort, setSort] = useState('popular')

    const [startPageLoad, setStartPageLoad] = useState(true)

    const [mainCatId, setMainCatId] = useState()

    const [fetchCategory, isCategoryLoading, categoryError] = useFetching(async(id) => {
        const resultAllCats = await getCategories()

        const res = getCatCrumbs(id, resultAllCats)
        setСrumbs(res)

        setMainCatId(activeMenu(id, resultAllCats, fromAllCats))

        const result = await getCategoryById(id)
        setCategory(result)
    })
    
    const sortOptions = [
        { value: 'popular', label: 'Сначала популярные' },
        { value: 'desc', label: 'Сначала дорогие' },
        { value: 'asc', label: 'Сначала дешевые' },
    ]

    function setPriceFilter(min, max) {
        filters.price = { min: min, max: max }
        setFilters({...filters})
    }

    function setFilterProp(checked, propParent, propCurr) {

        if(checked) {
            if(!filters[propParent]) {
                filters[propParent] = []
            }

            filters[propParent].push(propCurr)
        } else {
            filters[propParent] = filters[propParent].filter(val => val !== propCurr);
        }

        setFilters({...filters})

        setCurrentPage(1)
    }

    const [filterData, setFilterData] = useState(null)

    const [fetchFilters, isFiltersLoading, filtersError] = useFetching(async(id) => {
        const result = await getFilters(id)
        setFilterData(result)
    })

    const [fetchCatalog, isCatalogLoading, catalogError] = useFetching(async(id) => {
        const result = await getCatalog(id, currentPage, sort, filters)
        setCatalog(result)
        setStartPageLoad(false)
    })
  
    useEffect(() => {
        fetchCatalog(params.id)
    }, [sort, filters, currentPage])


    useEffect(() => {
        fetchFilters(params.id)
        fetchCategory(params.id)
    }, [])

    return(
        <Layout crumbs={crumbs} activeMenu={mainCatId}>
            {startPageLoad
                ? <Loadering />
                : <>
                    {filterData && <FiltersCatalog filterData={filterData} setFilterProp={setFilterProp} setPriceFilter={setPriceFilter} />}
                    <div className='w-[1363px]'>
                        <>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[24px]'>{category.name}</h2>
                                <Pagination
                                    currentPage={currentPage}
                                    totalCount={catalog.totalCount}
                                    pageSize={pageSize}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            </div>
                            
                            <Select 
                                options={sortOptions} 
                                onChange={ (e) => setSort(e.value) }
                                defaultValue={sortOptions[0]}
                                className='w-[322px] h-[40px] mt-[10px] mb-[10px] text-[14px] rounded-[4px]' 
                            />


                            {isCatalogLoading
                                ? <Loadering />
                                : (catalog.totalCount > 0
                                    ? <CatalogList catalog={catalog.items} category={category} catalogId={params.id} fromAllCats={fromAllCats} />
                                    : <p className='mt-[10px] text-[#e14a4a]'>Данные отсутствуют</p>
                                )
                            }
                        </>
                    </div>
                </>
            }
        </Layout>
    )

}


export default Catalog;