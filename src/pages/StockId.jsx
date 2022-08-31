import React, {  }  from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KirguSource from "../components/API/KirguSource";
import Loadering from "../components/Loadering";
import { useFetching } from "../hooks/useFetching";
import Layout from "../layout";
import { setImagePath } from "../components/services/images";
import { truncate } from "../components/services/str";

const StockId = () => {
    const params = useParams()
    const [stock, setStock] = useState(null)

    const [crumbs, setСrumbs] = useState([['Информация', 'info'], ['Акции', 'info/stocks']])

    const [fetchStock, stockLoading, stockError] = useFetching(async(title) => {
        const result = await KirguSource.getStock(title)
        setStock(result)
        setСrumbs([...crumbs, [result.name, `info/stocks/${result.name}`]])
    })

    useEffect(() => {
        fetchStock(params.title)
    }, [])

    return(
        <Layout crumbs={crumbs} activeMenu='info'>
            {!stock
                ? <Loadering />
                : <div className='w-full h-[800px] overflow-y-auto'>
                    <img src={setImagePath(stock.image)} alt='' className='object-contain w-[1721px] h-[620px] float-left' />
                    <div className='w-1/2'>
                        <h2 className='text-[28px] font-semibold mb-[25px]'>{stock.name}</h2>
                        <div className='text-[#505050]'dangerouslySetInnerHTML={{__html: truncate(stock.description)}}></div>
                    </div>
                </div>
            }
        </Layout>
    )

}


export default StockId;