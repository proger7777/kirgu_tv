import React, {  }  from 'react';
import { Link } from "react-router-dom";
import Photo404 from '../images/404.svg';

const Page404Content = () => {

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <img alt='404' src={Photo404} />
            <h2 className='text-[42px] mt-[50px] mb-[20px]'>Cтраница не найдена.</h2>
            <p className='w-[917px] text-[22px] text-center mb-[50px]'>К сожалению, страница, которую вы запросили, не была найдена. Вы можете перейти на главную страницу или воспользоваться каталогом товаров. Если эта ошибка будет повторяться, обратитесь, пожалуйста, в службу поддержки.</p>
            <Link to='/' className='rounded-[4px] text-white bg-green w-[400px] h-[80px] flex justify-center items-center text-[26px]'>Главная</Link>
        </div>
    );
};

export default Page404Content;

