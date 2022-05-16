import React, {  }  from 'react';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import NumbersPriceFilter from '../NumbersPriceFilter';

function PriceFilter({minPrice, maxPrice, onChange}) {

    const minRef = useRef()
    const maxRef = useRef()

    useEffect(() => {
        minRef.current.textContent = parseInt(minPrice).toLocaleString('ru-RU')
        maxRef.current.textContent = parseInt(maxPrice).toLocaleString('ru-RU')
    }, [])
    
    const [enableNumsKeyboard, setEnableNumsKeyboard] = useState(false)
    const [selectPrice, setSelectPrice] = useState()

    function openNumbers(sel) {
        setEnableNumsKeyboard(true)
        setSelectPrice(sel)

        removeFocus()

        if(sel === 'min') { 
            minRef.current.textContent = ''
            minRef.current.parentElement.classList.remove('border-[#e6e6e6]')
            minRef.current.parentElement.classList.add('border-green')
        }

        if(sel === 'max') {
            maxRef.current.textContent = ''
            maxRef.current.parentElement.classList.remove('border-[#e6e6e6]')
            maxRef.current.parentElement.classList.add('border-green')
        }
    }

    function removeFocus(type = 'all') {

        console.log(minRef.current.parentElement)

        if(type === 'all') {
            minRef.current.parentElement.classList.remove('border-green')
            maxRef.current.parentElement.classList.remove('border-green')

            minRef.current.parentElement.classList.add('border-[#e6e6e6]')
            maxRef.current.parentElement.classList.add('border-[#e6e6e6]')
        }

        if(type === 'min') {
            minRef.current.parentElement.classList.remove('border-green')
            minRef.current.parentElement.classList.add('border-[#e6e6e6]')
        }

        if(type === 'max') {
            maxRef.current.parentElement.classList.remove('border-green')
            maxRef.current.parentElement.classList.add('border-[#e6e6e6]')
        }

    }

    function setPrice(num) {
        if(selectPrice === 'min') {
            let min = minRef.current.textContent
            let newVal = min.replace(' ', '') + num
            newVal = parseInt(newVal).toLocaleString('ru-RU')
            minRef.current.textContent = newVal
        } else {
            let max = maxRef.current.textContent
            let newVal = max.replace(' ', '') + num
            newVal = parseInt(newVal).toLocaleString('ru-RU')
            maxRef.current.textContent = newVal
        }     
    }

    function clearPrice() {
        if(selectPrice === 'min') {
            let min = minRef.current.textContent
            let newVal = min.substring(0, min.length - 1)
            newVal = parseInt(newVal).toLocaleString('ru-RU')
            minRef.current.textContent = newVal
        } else {
            let max = maxRef.current.textContent
            let newVal = max.substring(0, max.length - 1)
            newVal = parseInt(newVal).toLocaleString('ru-RU')
            maxRef.current.textContent = newVal
        }        
    }

    function closeNumbersPriceFilter() {
        setEnableNumsKeyboard(false)

        removeFocus()

        if(minRef.current.textContent === '') {
            minRef.current.textContent = parseInt(minPrice).toLocaleString('ru-RU') 
        }

        if(maxRef.current.textContent === '') {
            maxRef.current.textContent = parseInt(maxPrice).toLocaleString('ru-RU') 
        }
    }

    function onSetup() {
        closeNumbersPriceFilter()

        let minClean = minRef.current.textContent.replace(' ', '')
        let maxClean = maxRef.current.textContent.replace(' ', '')

        onChange(minClean, maxClean)
    }

    return(
        <>
            <div className='relative'>
                <span className="font-bold">Цена</span>
        
                <div className='pt-[10px] flex space-x-[8px] text-[14px]'>
                    <div onClick={ () => openNumbers('min') } className='w-1/2 flex items-center h-[40px] rounded-[4px] border border-[#e6e6e6] cursor-pointer'>
                        <span className='text-[#8F8F8F] ml-[12px]'>от</span>
                        <span ref={minRef} className='ml-[8px] mr-[3px]'></span>
                        <span>₽</span>
                    </div>

                    <div onClick={ () => openNumbers('max') } className='w-1/2 flex items-center h-[40px] rounded-[4px] border border-[#e6e6e6] cursor-pointer'>
                        <span className='text-[#8F8F8F] ml-[12px]'>до</span>
                        <span ref={maxRef} className='ml-[8px] mr-[3px]'></span>
                        <span>₽</span>
                    </div>
                </div>

                {enableNumsKeyboard && <NumbersPriceFilter onSetup={onSetup} set={setPrice} clear={clearPrice} close={closeNumbersPriceFilter} />}
            </div>

            
        </>
    )

}

export default PriceFilter