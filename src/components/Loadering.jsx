import React, {  }  from 'react';
import { BeatLoader } from "react-spinners";

const Loadering = () => {

    return(
        <div className='absolute top-0 left-0 w-full h-full'>
            <div className='absolute z-30 top-0 left-0 w-full h-full bg-[#fff] opacity-80'></div>
            <div className='flex absolut top-0 left-0 justify-center items-center w-full h-full'>
                <BeatLoader color='#008954' size={30} margin='10' css={{'z-index': 100}} /> 
            </div>
        </div>
    )
}

export default Loadering;