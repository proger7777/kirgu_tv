import { useRef } from "react";
import { useState } from "react";
import DigineticaSource from "../components/API/DigineticaSource";
import CatalogList from "../components/CatalogList";
import FiltersCatalog from "../components/FiltersCatalog";
import Icons from "../components/Icons";
import Loadering from "../components/Loadering";
import Pagination from "../components/Pagination";
import SearchKeywordBlock from "../components/SearchKeywordBlock";
import { useFetching } from "../hooks/useFetching";
import Layout from "../layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Speech from "../components/Speech";

const Search = () => {
    
    const [searchItems, setSearchItems] = useState([])
    const [filters, setFilters] = useState()
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [queryProcess, setQueryProcess] = useState(true)

    const searchUrl = useLocation().search;
    const voiceParamPres = new URLSearchParams(searchUrl).get('voice') === 'true'

    const [queryVoiceType, setQueryVoiceType] = useState(voiceParamPres)

    const searchInpRef = useRef()
    const clearRef = useRef()

    const crumbs = [['Поиск', 'search']]

    const pageSize = 8

    function writeLetter(lett){
        const newVal = searchInpRef.current.value + lett
        searchInpRef.current.value = newVal
        
        if(newVal.length === 1) {
            showClearEl()
        }
    }

    function clearLetter(lett){
        const newVal = searchInpRef.current.value.substring(0, searchInpRef.current.value.length - 1)
        searchInpRef.current.value = newVal

        if(newVal.length === 0) {
            hiddenClearEl()
        }
    }

    function clearSearchVal(){
        searchInpRef.current.value = ''
        hiddenClearEl()
    }

    function showClearEl() {
        clearRef.current.classList.remove('hidden')
    }

    function hiddenClearEl() {
        clearRef.current.classList.add('hidden')
    }

    function onKeyupSearchInp() {
        if(searchInpRef.current.value !== '') {
            clearRef.current.classList.remove('hidden')
        } else {
            clearRef.current.classList.add('hidden')
        }
    }

    const [search, searchLoading, searchError] = useFetching(async() => {
        const query = searchInpRef.current.value
        const result = await DigineticaSource.search(query, currentPage)
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
        setQueryProcess(false)
        search()
    }

    function newSearchPage() {
        setQueryProcess(true)
        setQueryVoiceType(false)
    }

    function setVoiceVal(val) {
        searchInpRef.current.value = val
        clearRef.current.classList.remove('hidden')
        setQueryProcess(false)
        search()
    }

    useEffect(() => {
        search()
    }, [currentPage])

    return(
        <Layout crumbs={crumbs} activeMenu='search'>
            <div className='flex flex-col'>
                <div className='flex h-[80px] text-[22px] mb-[20px]'>
                    <div className='relative'>
                        <input onKeyUp={onKeyupSearchInp} ref={searchInpRef} onClick={newSearchPage} type='text' autoFocus className='focus:border-green focus:outline-none w-[1421px] h-full  pl-[30px] pr-[70px] border border-[#e6e6e6] rounded-tl-[5px] rounded-bl-[5px]' placeholder='Поиск' />
                        
                        <span ref={clearRef} onClick={clearSearchVal} className='absolute top-[27px] right-[30px] hidden cursor-pointer'>
                            <Icons name='close' className='w-[24px] h-[24px]' />
                        </span>
                    </div>
                    <button type='button' onClick={submitSearch} className='w-[300px] bg-[#008954] flex justify-center items-center text-white rounded-tr-[5px] rounded-br-[5px]'>Поиск</button>
                </div>

                {queryProcess 
                
                    ? ( queryVoiceType 
                        ? <Speech onChange={(val) => setVoiceVal(val) } classes='mt-[150px]' />
                        : <SearchKeywordBlock write={writeLetter} clear={clearLetter} /> 
                      )
                    : 
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
                }
            
        </div>
        </Layout>
    )

}


export default Search;