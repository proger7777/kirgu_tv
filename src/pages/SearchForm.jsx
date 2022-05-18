import { useEffect, useRef } from "react";
import { useState } from "react";
import SearchKeywordBlock from "../components/SearchKeywordBlock";
import Layout from "../layout";
import { useLocation, useNavigate } from "react-router-dom";
import Speech from "../components/Speech";
import SearchBlock from "../components/SearchBlock";

const SearchForm = () => {
    
    const navigate = useNavigate()
    const searchUrl = useLocation().search;
    const voiceParamPres = new URLSearchParams(searchUrl).get('voice')

    const [queryVoiceType, setQueryVoiceType] = useState(voiceParamPres)

    const searchText = new URLSearchParams(searchUrl).get('text')

    const searchInpRef = useRef()
    const clearRef = useRef()

    const crumbs = [['Поиск', 'search']]

    function writeLetter(lett){
        const newVal = searchInpRef.current.value + lett
        searchInpRef.current.value = newVal
        if(newVal.length === 1) showClearEl()
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

    function keyupSearchInp() {
        if(searchInpRef.current.value !== '') {
            clearRef.current.classList.remove('hidden')
        } else {
            clearRef.current.classList.add('hidden')
        }
    }

    function submitSearch() {
        navigate('/search/' +  searchInpRef.current.value)
    }

    function setVoiceVal(val) {
        searchInpRef.current.value = val
        clearRef.current.classList.remove('hidden')
    }

    useEffect(() => {
        if(voiceParamPres) setQueryVoiceType(true) 
        else setQueryVoiceType(false) 
    }, [voiceParamPres])

    return(
        <Layout crumbs={crumbs} activeMenu='search'>
            <SearchBlock
                value={searchText}
                searchInpRef={searchInpRef}
                clearRef={clearRef}
                onSubmitSearch={submitSearch}
                onClearSearchVal={clearSearchVal}
                onKeyupSearchInp={keyupSearchInp}
            >

                { queryVoiceType 
                    ? <Speech onStop={submitSearch} onChange={(val) => setVoiceVal(val) } classes='mt-[150px]' />
                    : <SearchKeywordBlock write={writeLetter} clear={clearLetter} /> 
                }        
            </SearchBlock>
        </Layout>
    )

}


export default SearchForm;