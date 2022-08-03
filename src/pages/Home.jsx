import React, {  }  from 'react';
import { useEffect, useState } from "react";
import KirguSource from "../components/API/KirguSource";
import HomeNavbar from "../components/HomeNavbar";
import MainSlider from "../components/MainSlider";
import { useFetching } from "../hooks/useFetching";
import Loadering from "../components/Loadering";

const Home = () => {

    const [sliders, setSliders] = useState([])

    const [fetchSliders, isSlidersLoading, slidersError] = useFetching(async() => {
        const result = await KirguSource.getSliders()
        setSliders(result.filter((item) => item.image2))
    })
    
    useEffect(() => {
        fetchSliders()
    }, [])

    return( 
        isSlidersLoading
            ? <Loadering />
            : <div className='wrapp w-[1720px] m-auto h-full flex flex-col justify-center items-center'>
                {sliders.length && <MainSlider sliders={sliders} /> }
                <HomeNavbar /> 
            </div> 
    )

}


export default Home;