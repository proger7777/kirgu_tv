import { useEffect, useState } from "react";
import KirguSource from "../components/API/KirguSource";
import StockItem from "../components/StockItem";
import { useFetching } from "../hooks/useFetching";
import Layout from "../layout";

const Stocks = () => {

    const [stocks, setStocks] = useState([])

    const [fetchStocks, isStocksLoading, stockError] = useFetching(async() => {
        const result = await KirguSource.getStocks()
        setStocks(result)
    })

    useEffect(() => {
        fetchStocks()
    }, [])

    const crumbs = [['Информация', 'info'], ['Акции', 'stocks']]

    return(
        <Layout crumbs={crumbs} activeMenu='info'>
            <div className='overflow-y-auto'>

                <h2 className='text-[28px] font-semibold'>Акции</h2>

                <div className='stocks_content'>
                    {stocks.map(stock => 
                        <StockItem key={stock.id} stock={stock} />    
                    )}
                </div>
            </div>
        </Layout>
    )

}


export default Stocks;