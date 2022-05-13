import { useRef } from "react";
import { useState } from "react";
import DigineticaSource from "../components/API/DigineticaSource";
import CatalogList from "../components/CatalogList";
import FiltersCatalog from "../components/FiltersCatalog";
import Icons from "../components/Icons";
import Loadering from "../components/Loadering";
import Pagination from "../components/Pagination";
import { useFetching } from "../hooks/useFetching";
import Layout from "../layout";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Search = () => {
    
    const [searchItems, setSearchItems] = useState([])
    const [filters, setFilters] = useState()
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()

    const params = useParams()

    const crumbs = [['Поиск', 'search'], [params.query, '']]

    const pageSize = 8

    const [search, searchLoading, searchError] = useFetching(async() => {
        const result = await DigineticaSource.search(params.query, currentPage)
        const { products, filters, totalCount } = result

        setSearchItems(products)
        setFilters(filters)  
        setTotalCount(totalCount)             
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
        search()
    }

    function newSearchPage() {
        navigate('/search')
    }

    useEffect(() => {
        search()
    }, [currentPage])

    return(
        <Layout crumbs={crumbs} activeMenu='search'>
            <div className='flex flex-col'>
                <div className='flex h-[80px] text-[22px] mb-[20px]'>
                    <div className='relative'>
                        <input defaultValue={params.query} onClick={newSearchPage} type='text' autoFocus className='focus:border-green focus:outline-none w-[1421px] h-full  pl-[30px] pr-[70px] border border-[#e6e6e6] rounded-tl-[5px] rounded-bl-[5px]' placeholder='Поиск' />
                        
                        <span onClick={() => navigate('/search')} className='absolute top-[27px] right-[30px] cursor-pointer'>
                            <Icons name='close' className='w-[24px] h-[24px]' />
                        </span>
                    </div>
                    <button type='button' onClick={submitSearch} className='w-[300px] bg-[#008954] flex justify-center items-center text-white rounded-tr-[5px] rounded-br-[5px]'>Поиск</button>
                </div>

                <div className='flex justify-between'>
                    {filters && <FiltersCatalog filterData={filters} setFilterProp={setFilterProp} /> }
                    <div className='w-[1363px]'>
                        <div className='flex justify-end items-center'>
                            {totalCount > 0 && <Pagination
                                currentPage={currentPage}
                                totalCount={totalCount}
                                pageSize={pageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />}
                        </div>
        
                        {searchLoading
                            ? <Loadering />
                            : (searchItems.length
                                ? <CatalogList catalog={searchItems} catalogId='' />
                                : <p className='mt-[10px] text-[#e14a4a]'>Ничего не найдено</p>
                            )
                        }

                    </div>
                </div>
                
        </div>
        </Layout>
    )

}


export default Search;