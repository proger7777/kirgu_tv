import React, {  }  from 'react';
import BgBlock from "./BgBlock";

const BonusExitPrompt = ({confirm, close}) => {

    return(
        <>
            <BgBlock clickCallback={close} />
            <div className='absolute m-auto top-0 left-0 right-0 bottom-0 z-30 w-[736px] h-[685px] bg-white p-[20px]'>
                <p className='font-bold text-[28px] text-center'>Выход</p>
                <div className='text-center text-[32px] mt-[192px] w-[70%] m-auto'>Вы действительно хотите выйти из аккаунта?</div>
                <div className='mt-[50px] flex justify-center space-x-[17px]'>
                    <button onClick={confirm} className='rounded-[4px] text-[#fff] w-[260px] h-[48px] bg-[#E30512]'>Выйти</button>
                    <button onClick={close} className='rounded-[4px] text-[#fff] w-[260px] h-[48px] bg-[#008B59]'>Отмена</button>
                </div>
            </div>
        </>
    )
}

export default BonusExitPrompt;