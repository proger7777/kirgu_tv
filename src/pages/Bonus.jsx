import React, { }  from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../layout";
import { useFetching } from "../hooks/useFetching";
import kirguBonusPhoto from '../images/kirgu.svg';
import KirguSource from "../components/API/KirguSource";
import Loadering from "../components/Loadering";
import { useRef } from "react";
import { checkAuthBonusForm, clearCheckBonus } from "../components/services/bonus";
import BonusExitPrompt from "../components/BonusExitPrompt";

const Bonus = () => {

    const params = useParams()
    const [bonusData, setBonusData] = useState()
    const currentTab = useRef()
    const historyTab = useRef()
    const buttonsRef = useRef()
    const navigate = useNavigate()

    const [exitPrompt, setExitPrompt] = useState(false)
    const [exitPath, setExitPath] = useState('')

    const [fetchBonusData, isBonusDataLoading, bonusDataError] = useFetching(async(phone) => {
        const res = checkAuthBonusForm()
        if(!res) navigate('/info')
        const result = await KirguSource.getBonusData(phone)
        setBonusData(result)
    })

    function openTab(e, tab) {

        for (let i = 0; i < 2; i++) {
            buttonsRef.current.children[i].classList.remove('border-[#008954]', 'text-[#008954]', 'font-bold')
            buttonsRef.current.children[i].classList.add('border-[#e6e6e6]', 'text-[#000]')
        }

        e.target.classList.remove('border-[#e6e6e6]', 'text-[#000]')
        e.target.classList.add('border-[#008954]', 'text-[#008954]', 'font-bold')

        if(tab === 'history') {
            currentTab.current.classList.add('hidden')
            historyTab.current.classList.remove('hidden')
        } else {
            historyTab.current.classList.add('hidden')
            currentTab.current.classList.remove('hidden')
        }

    }

    function onExitPage() {
        clearCheckBonus()
        navigate(exitPath)  
    }

    function exitLinkPage(e) {
        e.preventDefault()
        clearCheckBonus()
        navigate('/info')  
    }

    function redirectToBonCondsPage(e) {
        e.preventDefault()
        showExitPrompt('/info/bonus_conditions')
    }

    function closeExitPrompt() {
        setExitPrompt(false)
    }

    function showExitPrompt(path) {
        setExitPath(path)
        setExitPrompt(true)
    }

    useEffect(() => {
        fetchBonusData(params.phone)

        document.querySelector('.toolbar').addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            if(e.target.classList.contains('bread_back')) {
                showExitPrompt('/info')
                return
            }

            if(e.target.classList.contains('search_inp')) {
                showExitPrompt('/search')
                return
            }

            if(e.target.classList.contains('voice_search')) {
                showExitPrompt('/search?voice=true')
                return
            }
            
            if(e.target.href) {
                let path = ''

                path = e.target.href.split('tv').slice(-1)[0]
                showExitPrompt(path)
            }

        })
    }, [])

    const crumbs = [['????????????????????', 'info'], ['?????? ???????????????? ??????????', 'info/bonus']]

    return(
        <Layout crumbs={crumbs} activeMenu='info'>
            {isBonusDataLoading 
                ? <Loadering />
                : (bonusData 
                    ? <div className='flex flex-col w-full'>
                    <div ref={buttonsRef} className='flex space-x-[26px] mb-[50px]'>
                        <button onClick={(e) => openTab(e, 'current') } className='w-1/2 rounded-[10px] h-[80px] text-[22px] flex items-center justify-center border border-[#008954] text-[#008954] font-bold '>?????? ??????????</button>
                        <button onClick={(e) => openTab(e, 'history') } className='w-1/2 rounded-[10px] h-[80px] text-[22px] flex items-center justify-center border border-[#e6e6e6] text-#[000]'>??????????????</button>
                    </div>

                    <div ref={currentTab} className='flex items-start space-x-[26px]'>
                        {bonusData &&
                            <>
                                <img  alt='' src={kirguBonusPhoto} className='w-1/2' />
                                <div className='w-1/2 text-[22px] pt-[30px]'>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>???????????????? ??????????</span>
                                        <span className='font-semibold'>{bonusData.current.??????????????????????????}</span>
                                    </p>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>?????? ???????????????? ??????????</span>
                                        <span className='font-semibold'>{bonusData.current.????????????????????????????????}</span>
                                    </p>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>?????????? ??????????</span>
                                        <span className='font-semibold'>{bonusData.current.??????????????????????????}</span>
                                    </p>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>???????????????? ???????????????? ????????????</span>
                                        <span className='font-semibold'>{bonusData.current.????????????????????????????.toLocaleString('ru-RU')} ???</span>
                                    </p>
                                    <p className='flex justify-between mb-[40px]'>
                                        <span>?????????????? ??????????????????</span>
                                        <span className='font-semibold'>{bonusData.current.????????????????????????????????.toLocaleString('ru-RU')} ???</span>
                                    </p>

                                    <Link to='' onClick={(e) => redirectToBonCondsPage(e)} className='table text-[24px] text-[#11A9FF] font-semibold underline'>?????????????? ?????????????????? "???????????? ??????????"</Link>

                                    <Link to='' onClick={exitLinkPage} className='table mt-[70px] text-[40px] text-[#EB5757] underline'>??????????</Link>
                                </div>
                            </>
                        }
                    </div>

                    <div ref={historyTab} className='hidden'>
                        {bonusData.history ?
                            <table className='w-full text-center text-[22px]'>
                                <thead>
                                    <tr className='h-[70px] border-b border-[#e6e6e6]'>
                                        <td>????????</td>
                                        <td>????????????????</td>
                                        <td>?????????? ??????????????</td>
                                        <td>?????????????? ?????????? ????????????????</td>
                                        <td>??????????</td>
                                        <td>??????????</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {bonusData.history.map(i =>
                                        <tr key={i} className='h-[70px] border-b border-[#e6e6e6]'>
                                            <td>{i['????????'].substring(0, 10)}</td>
                                            <td>{i['??????']}</td>
                                            <td className={`${parseInt(i['??????????????????????????']) < 0 ? 'text-[#E6141E]' : 'text-[#008954]'}`}>{parseInt(i['??????????????????????????']).toLocaleString('ru-RU')} ???</td>
                                            <td>{parseInt(i['????????????????????????????????????????']).toLocaleString('ru-RU') } ???</td>
                                            <td>{i['??????????']}</td>
                                            <td>{i['??????????????????']}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        :
                            <p className='text-[18px] text-[#8f8f8f]'>?????? ????????????</p>
                        }
                    </div>

                </div>
                : <p className='text-[18px] text-[#8f8f8f]'>?????? ???????????? ???? ???????????? {params.phone}</p>
                )
            }

            {exitPrompt && <BonusExitPrompt confirm={onExitPage} close={closeExitPrompt}  /> } 

        </Layout>
    )

}


export default Bonus;