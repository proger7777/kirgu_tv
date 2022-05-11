import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../layout";
import { useFetching } from "../hooks/useFetching";
import kirguBonusPhoto from '../images/kirgu.svg';
import KirguSource from "../components/API/KirguSource";
import Loadering from "../components/Loadering";
import { useRef } from "react";
import { checkAuthBonusForm, clearCheckBonus } from "../components/services/bonus";

const Bonus = () => {

    const params = useParams()
    const [bonusData, setBonusData] = useState()
    const currentTab = useRef()
    const historyTab = useRef()
    const buttonsRef = useRef()
    const navigate = useNavigate()

    const [exitPrompt, setExitPrompt] = useState(false)

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

    function exitPage(e) {
        e.preventDefault()
        clearCheckBonus()
        navigate('/info')  
    }

    function redirectToBonCondsPage(e) {
        e.preventDefault()

        if(window.confirm('Вы действительно хотите покинуть страницу?')) {
            clearCheckBonus()
            navigate('/info/bonus_conditions')
        } 
    }

    useEffect(() => {
        fetchBonusData(params.phone)

        document.querySelector('.toolbar').addEventListener('click', (e) => {
            if(window.confirm('Вы действительно хотите покинуть страницу?')) {
                clearCheckBonus()
            } else {
                e.preventDefault()
                e.stopPropagation()
            }
        })
    }, [])

    const crumbs = [['Информация', 'info'], ['Мои бонусные баллы', 'bonus']]

    return(
        <Layout crumbs={crumbs} activeMenu='info'>
            {isBonusDataLoading 
                ? <Loadering />
                : (bonusData 
                    ? <div className='flex flex-col w-full'>
                    <div ref={buttonsRef} className='flex space-x-[26px] mb-[50px]'>
                        <button onClick={(e) => openTab(e, 'current') } className='w-1/2 rounded-[10px] h-[80px] text-[22px] flex items-center justify-center border border-[#008954] text-[#008954] font-bold '>Моя карта</button>
                        <button onClick={(e) => openTab(e, 'history') } className='w-1/2 rounded-[10px] h-[80px] text-[22px] flex items-center justify-center border border-[#e6e6e6] text-#[000]'>История</button>
                    </div>

                    <div ref={currentTab} className='flex items-start space-x-[26px]'>
                        {bonusData &&
                            <>
                                <img  alt='' src={kirguBonusPhoto} className='w-1/2' />
                                <div className='w-1/2 text-[22px] pt-[30px]'>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>Владелец карты</span>
                                        <span className='font-semibold'>{bonusData.current.КартаВладелец}</span>
                                    </p>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>Тип бонусной карты</span>
                                        <span className='font-semibold'>{bonusData.current.ТипБонуснойКарты}</span>
                                    </p>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>Номер карты</span>
                                        <span className='font-semibold'>{bonusData.current.КартаШтрихкод}</span>
                                    </p>
                                    <p className='flex justify-between mb-[25px]'>
                                        <span>Активных бонусных рублей</span>
                                        <span className='font-semibold'>{bonusData.current.АктивныеБонусы.toLocaleString('ru-RU')} ₽</span>
                                    </p>
                                    <p className='flex justify-between mb-[40px]'>
                                        <span>Ожидают активации</span>
                                        <span className='font-semibold'>{bonusData.current.ОжидаютАктивации.toLocaleString('ru-RU')} ₽</span>
                                    </p>

                                    <Link to='' onClick={(e) => redirectToBonCondsPage(e)} className='table text-[24px] text-[#11A9FF] font-semibold underline'>Условия программы "Бонусы Киргу"</Link>

                                    <Link to='' onClick={(e) => exitPage(e) } className='table mt-[70px] text-[40px] text-[#EB5757] underline'>Выйти</Link>
                                </div>
                            </>
                        }
                    </div>

                    <div ref={historyTab} className='hidden'>
                        {bonusData.history ?
                            <table className='w-full text-center text-[22px]'>
                                <thead>
                                    <tr className='h-[70px] border-b border-[#e6e6e6]'>
                                        <td>Дата</td>
                                        <td>Действие</td>
                                        <td>Сумма бонусов</td>
                                        <td>Остаток после операции</td>
                                        <td>Акция</td>
                                        <td>Заказ</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {bonusData.history.map(i =>
                                        <tr key={i} className='h-[70px] border-b border-[#e6e6e6]'>
                                            <td>{i['Даты'].substring(0, 10)}</td>
                                            <td>{i['Тип']}</td>
                                            <td className={`${parseInt(i['СуммаОперации']) < 0 ? 'text-[#E6141E]' : 'text-[#008954]'}`}>{parseInt(i['СуммаОперации']).toLocaleString('ru-RU')} ₽</td>
                                            <td>{parseInt(i['ОстатокПослеОперации']).toLocaleString('ru-RU') } ₽</td>
                                            <td>{i['Акция']}</td>
                                            <td>{i['НомерЧека']}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        :
                            <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>
                        }
                    </div>

                </div>
                : <p className='text-[18px] text-[#8f8f8f]'>Нет данных по номеру {params.phone}</p>
                )
            }

            {/* {exitPrompt && <BonusExitPrompt /> } */}

        </Layout>
    )

}


export default Bonus;