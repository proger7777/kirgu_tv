import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Icons from "../components/Icons";
import SearchKeywordBlock from "../components/SearchKeywordBlock";
import Layout from "../layout";

const Search = () => {

    const [finders, setFinders] = useState()

    const searchInpRef = useRef()
    const clearRef = useRef()

    const crumbs = [['Поиск', 'search']]

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

    const [search, searchLoading, searchError] = useFetching(async(title) => {
        const result = await DigineticaSource.search('Диван')
        setStock(result)
        setСrumbs([...crumbs, result.name])
    })

    useEffect(() => {
        search()
    }, [])

    return(
        <Layout crumbs={crumbs}>
            <div className='flex flex-col'>
            <div className='flex h-[80px] text-[22px] mb-[20px]'>
                <div className='relative'>
                    <input ref={searchInpRef} type='text' autoFocus className='focus:border-green focus:outline-none w-[1421px] h-full  pl-[30px] pr-[70px] border border-[#e6e6e6] rounded-tl-[5px] rounded-bl-[5px]' placeholder='Поиск' />
                    
                    <span ref={clearRef} onClick={ () => clearSearchVal() } className='absolute top-[27px] right-[30px] hidden cursor-pointer'>
                        <Icons name='close' className='w-[24px] h-[24px]' />
                    </span>
                </div>
                <button type='button' className='search_submit w-[300px] bg-[#008954] flex justify-center items-center text-white rounded-tr-[5px] rounded-br-[5px]'>Поиск</button>
            </div>

            {

            }
            <div className='search_finders_block flex justify-between'>

            </div>

            {/* <SearchKeywordBlock write={writeLetter} clear={clearLetter} /> */}
        </div>
        </Layout>
    )

}


export default Search;