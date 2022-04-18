import Layout from "../layout";

const Delivery = () => {

    const crumbs = ['Информация', 'Доставка']

    return(
        <Layout crumbs={crumbs}>
            <div className='flex justify-between text-[16px]'>
                <div className='w-[50%]'>
            
                    <h2 className='text-[24px] font-bold'>Доставка заказов по Республике Дагестан<br /> и Чеченской республике.</h2>
                    <p className='mt-[20px] text-[#505050] mb-[45px]'>Доставка осуществляется посредством собственной курьерской службы.</p>
            
                    <h2 className='text-[24px] font-bold'>Сроки доставки</h2>
                    <p className='mt-[20px] text-[#505050] mb-[45px]'>Срок доставки товара по Республике Дагестан составляет до 3 дней.
                    <br />Срок доставки товара по Чеченской республике составляет  до 5 дней.</p>
                
                    <h2 className='text-[24px] font-bold'>Стоимость доставки</h2>
                    <p className='mt-[20px] text-[#505050] mb-[45px]'>Доставка заказов осуществляется ежедневно с 9:00 до 21:00.
                    <br />Если сумма заказа превышает 3000₽ доставка осуществляется <span className="text-color-primary">БЕСПЛАТНО</span>.</p>
            
                    <table className="mt-[20px] w-[70%] border-collapse border border-slate-400 bg-white text-sm shadow-sm">
                        <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                            <th className="w-1/2 border border-slate-300 font-semibold p-3 text-slate-900 text-left">Зона доставки</th>
                            <th className="w-1/2 border border-slate-300 font-semibold p-3 text-slate-900 text-left">Заказ до 3000₽</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Махачкала</td>
                            <td className="border border-slate-300 p-2 text-slate-500">100₽</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Каспийск</td>
                            <td className="border border-slate-300 p-2 text-slate-500">150₽</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Хасавюрт</td>
                            <td className="border border-slate-300 p-2 text-slate-500">100₽</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Хасавюрт</td>
                            <td className="border border-slate-300 p-2 text-slate-500">100₽</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Дербент</td>
                            <td className="border border-slate-300 p-2 text-slate-500">50₽</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Чеченская Республика</td>
                            <td className="border border-slate-300 p-2 text-slate-500">200₽</td>
                        </tr>
                        </tbody>
                    </table>
                
                </div>
            
                <div className='w-[50%]'>
                    <h2 className='text-[24px] font-bold'>Доставка заказов в Москву и МО</h2>
                    <p className='mt-[20px] text-[#505050] mb-[45px]'>Доставка осуществляется посредством транспортной компании.
                    <br />Возможна доставка до терминала или адреса клиента по согласованию с клиентом.</p>
                
                    <h2 className='text-[24px] font-bold'>Сроки доставки</h2>
                    <p className='mt-[20px] text-[#505050] mb-[45px]'>Срок доставки товара в Москву  и МО составляет от 4 до 7 дней. </p>
                
                    <h2 className='text-[24px] font-bold'>Стоимость доставки</h2>
                    <p className='mt-[20px] text-[#505050] mb-[45px]'>Стоимость доставки определяется транспортной компанией и может изменяться в зависимости от суммы заказа.
                    <br />В зависимости от суммы заказа клиент оплачивает  доставку полностью, частично или же доставка будет осуществлена бесплатно.</p>
            
                    <table className="mt-[20px] w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm">
                        <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                            <th className="w-1/4 border border-slate-300 font-semibold p-3 text-slate-900 text-left">Зона доставки</th>
                            <th className="w-1/4 border border-slate-300 font-semibold p-3 text-slate-900 text-left">Заказ до 200 000₽</th>
                            <th className="w-1/4 border border-slate-300 font-semibold p-3 text-slate-900 text-left">Заказ от 200 000₽ до 350 000₽</th>
                            <th className="w-1/4 border border-slate-300 font-semibold p-3 text-slate-900 text-left">Заказ от 350 000₽</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-slate-300 p-2 text-slate-500">Москва и МО</td>
                            <td className="border border-slate-300 p-2 text-slate-500">100% стоимости доставки</td>
                            <td className="border border-slate-300 p-2 text-slate-500">50% стоимости доставки</td>
                            <td className="border border-slate-300 p-2 text-slate-500">Бесплатно</td>
                        </tr>    
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )

}


export default Delivery;