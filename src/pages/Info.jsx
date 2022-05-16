import React, {  }  from 'react';
import stockSvg from '../images/stock.svg'
import usloviyaSvg from '../images/usloviya.svg'
import bonusCartSvg from '../images/bonus_cart.svg'  
import deliverySvg from '../images/delivery.svg'  
import sborkaSvg from '../images/sborka.svg'  
import contactsSvg from '../images/contacts.svg'  


import { Link } from "react-router-dom";
import Layout from '../layout'
import CheckBonus from '../components/CheckBonus'
import { useState } from 'react'
import { useEffect } from 'react'
import localforage from 'localforage'


const Info = () => {

    const [enableCheckBonus, setEnableCheckBonus] = useState(false)

    const crumbs = [['Информация', 'info']]

    useEffect(() => {
        localforage.setItem('activeMenu', 'info')
    }, [])

    return(
        <Layout crumbs={crumbs} activeMenu='info'>
            <div className='w-full flex flex-col text-[22px] font-semibold'>
                <div className='grid grid-cols-3 gap-[25px] justify-between w-full'>
                    <Link to='/info/stocks' className='bg-[#F5F5F5] h-[427px] relative'>
                        <img src={stockSvg} alt='' className='w-[303px] h-[295px] m-auto absolute right-0 left-0 top-[-40px] bottom-0' />
                        <span className='absolute bottom-[20px] block w-full text-center'>Акции</span>
                    </Link>

                    <Link to='/info/bonus_conditions' className='bg-[#F5F5F5] h-[427px] relative'>
                        <img src={usloviyaSvg} alt='' className='w-[303px] h-[295px] m-auto absolute right-0 left-0 top-[-40px] bottom-0' />
                        <span className='absolute bottom-[20px] block w-full text-center'>Условия программы “Бонусы Киргу”</span>
                    </Link>

                    <Link to='' onClick={() => setEnableCheckBonus(true) } className='check_bonus bg-[#F5F5F5] h-[427px] relative'>
                        <img src={bonusCartSvg} alt='' className='w-[253px] h-[267px] m-auto absolute right-0 left-0 top-[-40px] bottom-0' />
                        <span className='absolute bottom-[20px] block w-full text-center'>Узнать бонусные баллы</span>
                    </Link>

                    <Link to='/info/delivery' className='bg-[#F5F5F5] h-[427px] relative'>
                        <img src={deliverySvg} alt='' className='w-[303px] h-[295px] m-auto absolute right-0 left-0 top-[-40px] bottom-0' />
                        <span className='absolute bottom-[20px] block w-full text-center'>Доставка</span>
                    </Link>

                    <Link to='/info/services' className='bg-[#F5F5F5] h-[427px] relative'>
                        <img src={sborkaSvg} alt='' className='w-[248px] h-[275px] m-auto absolute right-0 left-0 top-[-40px] bottom-0' />
                        <span className='absolute bottom-[20px] block w-full text-center'>Услуги</span>
                    </Link>

                    <Link to='/info/contacts' className='bg-[#F5F5F5] h-[427px] relative'>
                        <img src={contactsSvg} alt='' className='w-[319px] h-[297px] m-auto absolute right-0 left-0 top-[-40px] bottom-0' />
                        <span className='absolute bottom-[20px] block w-full text-center'>Наши магазины</span>
                    </Link>
                </div>
            </div>

            {enableCheckBonus && <CheckBonus setEnableCheckBonus={setEnableCheckBonus} />}

        </Layout>

    )

}


export default Info;