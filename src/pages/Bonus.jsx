import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../layout";
import { useFetching } from "../hooks/useFetching";
import kirguBonusPhoto from '../images/kirgu.jpg';
import KirguSource from "../components/API/KirguSource";

const Bonus = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [bonusData, setBonusData] = useState()

    const [fetchBonusData, isBonusDataLoading, bonusDataError] = useFetching(async(phone) => {
        const result = await KirguSource.getBonusData(phone)

        console.log(result)

        setBonusData(result)
    })

    useEffect(() => {
        fetchBonusData(params.phone)
    }, [])

    const crumbs = ['Информация', 'Мои бонусные баллы']

    return(
        <Layout crumbs={crumbs}>
            {bonusData && <div class='flex flex-col w-full'>
                <div class='flex space-x-[26px] mb-[50px]'>
                    <div class='w-1/2 rounded-[10px] h-[80px] text-[22px] font-semibold flex items-center justify-center border border-[#008954] text-[#008954]'>Моя карта</div>
                    <div class='w-1/2 rounded-[10px] h-[80px] text-[22px] flex items-center justify-center border border-[#e6e6e6]'>История</div>
                </div>

                <div class='my_cart_block flex space-x-[26px]'>
                    {bonusData.current ?
                        <>
                            <img  alt='' src={kirguBonusPhoto} className='w-1/2 h-[349px]' />
                            <div className='w-1/2 text-[22px]'>
                                <p className='flex justify-between mb-[25px]'>
                                    <span>Владелец карты</span>
                                    <span className='font-semibold'>{bonusData.current['Владелец']}</span>
                                </p>
                                <p className='flex justify-between mb-[25px]'>
                                    <span>Тип бонусной карты</span>
                                    <span className='font-semibold'>{bonusData.current['ЗначимостьКарты']}</span>
                                </p>
                                <p className='flex justify-between mb-[25px]'>
                                    <span>Номер карты</span>
                                    <span className='font-semibold'>{bonusData.current['ШК']}</span>
                                </p>
                                <p className='flex justify-between mb-[25px]'>
                                    <span>Активных бонусных рублей</span>
                                    <span className='font-semibold'>{bonusData.current['СуммаОсталось'].toLocaleString('ru-RU')} ₽</span>
                                </p>
                                <p className='flex justify-between mb-[45px]'>
                                    <span>Ожидают активации</span>
                                    <span className='font-semibold'>{bonusData.current['СуммаНачислят'].toLocaleString('ru-RU')} ₽</span>
                                </p>

                                <Link to='/info/usloviya_bonusa' className='text-[24px] text-[#11A9FF] font-semibold underline'>Условия программы "Бонусы Киргу"</Link>
                            </div>
                        </>
                    :
                        <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>
                    }
                </div>

                <div className='hidden bonus_history_block'>
                    {bonusData.history ?
                        <table className='w-full text-center text-[22px]'>
                            <tr className='h-[70px] border-b border-[#e6e6e6]'>
                                {/* <td>Дата</td> */}
                                <td>Действие</td>
                                <td>Сумма бонусов</td>
                                <td>Остаток после операции</td>
                                <td>Акция</td>
                                <td>Заказ</td>
                            </tr>

                            {bonusData.history.map(i =>
                                <tr className='h-[70px] border-b border-[#e6e6e6]'>
                                    {/* <td>{i['Даты'].to_date.strftime('%d.%m.%Y')}</td> */}
                                    <td>{i['Тип']}</td>
                                    <td className={`${parseInt(i['СуммаОперации']) < 0 ? 'text-[#E6141E]' : 'text-[#008954]'}`}>{parseInt(i['СуммаОперации']).toLocaleString('ru-RU')} ₽</td>
                                    <td>{parseInt(i['ОстатокПослеОперации']).toLocaleString('ru-RU') } ₽</td>
                                    <td>{i['Акция']}</td>
                                    <td>{i['НомерЧека']}</td>
                                </tr>
                            )}
                        </table>
                    :
                        <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>
                    }
                </div>

            </div>}
        </Layout>
    )

}


export default Bonus;