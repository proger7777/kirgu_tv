import { useEffect, useRef } from "react";
import { useState } from "react";
import Icons from "../components/Icons";
import SearchKeywordBlock from "../components/SearchKeywordBlock";
import Layout from "../layout";
import { useLocation, useNavigate } from "react-router-dom";
import Speech from "../components/Speech";

const SearchKeyword = () => {
    
    const navigate = useNavigate()
    const searchUrl = useLocation().search;
    const voiceParamPres = new URLSearchParams(searchUrl).get('voice')

    const [queryVoiceType, setQueryVoiceType] = useState(false)

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

    function onKeyupSearchInp() {
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
    }, [voiceParamPres])

    console.log(queryVoiceType)

    return(
        <Layout crumbs={crumbs} activeMenu='search'>
            <div className='flex flex-col'>
                <div className='flex h-[80px] text-[22px] mb-[20px]'>
                    <div className='relative'>
                        <input defaultValue={searchText} onKeyUp={onKeyupSearchInp} ref={searchInpRef} type='text' autoFocus className='focus:border-green focus:outline-none w-[1421px] h-full  pl-[30px] pr-[70px] border border-[#e6e6e6] rounded-tl-[5px] rounded-bl-[5px]' placeholder='Поиск' />
                        
                        <span ref={clearRef} onClick={clearSearchVal} className='absolute top-[27px] right-[30px] hidden cursor-pointer'>
                            <Icons name='close' className='w-[24px] h-[24px]' />
                        </span>
                    </div>
                    <button type='button' onClick={submitSearch} className='w-[300px] bg-[#008954] flex justify-center items-center text-white rounded-tr-[5px] rounded-br-[5px]'>Поиск</button>
                </div>

                { queryVoiceType 
                    ? <Speech onStop={submitSearch} onChange={(val) => setVoiceVal(val) } classes='mt-[150px]' />
                    : <SearchKeywordBlock write={writeLetter} clear={clearLetter} /> 
                }        
        </div>
        </Layout>
    )

}


export default SearchKeyword;