import React, {  }  from 'react';
import BgBlock from "./BgBlock";

const NoSupportSpeech = () => {

    return(
        <>
            <BgBlock />
            <div className='absolute flex justify-center items-center m-auto top-0 left-0 right-0 bottom-0 z-30 w-[600px] h-[300px] bg-white p-[20px]'>
                <p className='text-[32px] text-center'>Голосовой поиск не поддерживается в данном устройстве</p>
            </div>
        </>
    )
}

export default NoSupportSpeech;