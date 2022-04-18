import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KirguSource from "../components/API/KirguSource";
import Loader from "../components/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import Layout from "../layout";
import { setImagePath } from "../utils/images";
import { truncate } from "../utils/str";

const StockId = () => {
    const params = useParams()
    const [stock, setStock] = useState(null)

    const [crumbs, setСrumbs] = useState(['Информация', 'Акции'])

    const [fetchStock, stockLoading, stockError] = useFetching(async(title) => {
        const result = await KirguSource.getStock(title)
        setStock(result)
        setСrumbs([...crumbs, result.name])
    })

    useEffect(() => {
        fetchStock(params.title)
    }, [])

    return(
        <Layout crumbs={crumbs}>
            {!stock
                ? <Loader />
                : <div className='w-full h-[800px] overflow-y-auto'>
                    <img src={setImagePath(stock.image)} alt='' className='w-full object-contain h-[620px] mb-[20px]' />
                    <div className='w-1/2'>
                        <h2 className='text-[28px] font-semibold mb-[25px]'>{stock.name}</h2>
                        <div className='text-[#505050]'>{truncate(stock.description)}</div>
                    </div>
                </div>
            }
        </Layout>
    )

}


export default StockId;