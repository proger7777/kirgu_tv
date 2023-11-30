import React, {  }  from 'react';
import { useState } from "react";
import DigineticaSource from "../components/API/DigineticaSource";
import CatalogList from "../components/CatalogList";
import FiltersCatalog from "../components/FiltersCatalog";
import Loadering from "../components/Loadering";
import Pagination from "../components/Pagination";
import { useFetching } from "../hooks/useFetching";
import Layout from "../layout";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import SearchBlock from "../components/SearchBlock";
import KirguSource from '../components/API/KirguSource';
import CategoriesSearch from '../components/CategoriesSearch';

const Search = () => {
    
    const [searchItems, setSearchItems] = useState([])
    const [categories, setCategories] = useState();
    const [categoryActiveId, setCategoryActiveId] = useState('');
    const [filters, setFilters] = useState()
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const navigate = useNavigate()

    const params = useParams()

    const crumbs = [['Поиск', 'search'], [params.query, '']]

    const pageSize = 10

    const [search, searchLoading, searchError] = useFetching(async() => {
        const result = await KirguSource.search2({
            q: params.query,
            PAGEN_2: currentPage,
            count: pageSize,
            idSection: categoryActiveId,
          })

        const { products, filters, totalCount } = result

        setSearchItems(result.data)
        setCategories(result.categoryFilter)
        // setFilters(filters)
        setTotalCount(2350)             
    })

    function setFilterProp(checked, propParent, propCurr) {

        if(checked) {
            if(!filters[propParent]) filters[propParent] = []
            filters[propParent].push(propCurr)
        } else {
            filters[propParent] = filters[propParent].filter(val => val !== propCurr);
        }

        setFilters({...filters})    
        setCurrentPage(1)

        search()
    }

    function submitSearch() {
        setCategoryActiveId('')
        setCategories()
        search()
    }

    function newSearchPage() {
        navigate('/search?text=' + params.query)
    }

    function clearSearch() {
        navigate('/search')
    }

    useEffect(() => {
        search()
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(1)
        search()
    }, [categoryActiveId])

    return(
        <Layout crumbs={crumbs} activeMenu='search'>

            <SearchBlock
                value={params.query}
                onSubmitSearch={submitSearch}
                onClearSearchVal={clearSearch}
                onClickSearchInp={newSearchPage}
            >
                <div className='flex justify-between'>
                    {/* {filters && <FiltersCatalog filterData={filters} setFilterProp={setFilterProp} /> } */}
                    <div className='w-[1720px]'>
                        <div className='flex justify-between items-center'>
                            <CategoriesSearch categories={categories} categoryActiveId={categoryActiveId} setCategoryActiveId={setCategoryActiveId}/>
                            {totalCount > 0 && <Pagination
                                currentPage={currentPage}
                                totalCount={totalCount}
                                pageSize={pageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />}
                        </div>
        
                        {searchLoading
                            ? <Loadering />
                            : (searchItems && searchItems.length
                                ? <CatalogList catalog={searchItems} catalogId='' columns={5}/>
                                : <p className='mt-[10px] text-[#e14a4a]'>Ничего не найдено</p>
                            )
                        }

                    </div>
                </div>
                
            </SearchBlock>
        </Layout>
    )

}


export default Search;