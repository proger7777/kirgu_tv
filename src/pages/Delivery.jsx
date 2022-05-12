import Layout from "../layout";

const Delivery = () => {
    
    const crumbs = [['Информация', 'info'], ['Доставка', 'info/delivery']]

    return(
        <Layout crumbs={crumbs} activeMenu='info'>
            <div className='w-full'>
                <h2 className='text-[24px] font-bold mb-[45px]'>Доставка</h2>
                <p className='text-[#505050] mb-[25px]'>Доставка заказов по Республике Дагестан и Чеченской республике. Доставка осуществляется посредством собственной курьерской службы.</p>
        
                <h3 className='font-bold text-[#505050] mb-[25px]'>Сроки доставки</h3>
                <p className='mt-[20px] text-[#505050]'>Срок доставки товара по Республике Дагестан составляет до 3 дней.<br />Срок доставки товара по Чеченской республике составляет  до 5 дней.</p>
        
                <table className="mt-[21px] mb-[45px] w-full border-collapse border border-[#e6e6e6] bg-white text-[#505050]">
                    <thead>
                        <tr>
                            <th rowSpan='2' className='text-[22px] w-[640px] font-bold border-collapse border border-[#e6e6e6] h-[100px]'>Территориальная зона доставки</th>
                            <th colSpan='2' className="border-collapse border border-[#e6e6e6] text-center">Стоимость и условия доставки</th>
                        </tr>
                        <tr>
                            <th className='border-collapse border border-[#e6e6e6]'>Стоимость заказа до 3000 р.</th>
                            <th className='border-collapse border border-[#e6e6e6]'>Стоимость заказа более 3000 р.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='h-[51px]'>
                            <td className="border border-[#e6e6e6] pl-[25px]">Махачкала</td>
                            <td className="border border-[#e6e6e6] text-center">100₽</td>
                            <td className="border border-[#e6e6e6] text-center">Бесплатно</td>
                        </tr>
                        <tr className='h-[51px]'>
                            <td className="border border-[#e6e6e6] pl-[25px]">Каспийск</td>
                            <td className="border border-[#e6e6e6] text-center">150₽</td>
                            <td className="border border-[#e6e6e6] text-center">Бесплатно</td>
                        </tr>
                        <tr className='h-[51px]'>
                            <td className="border border-[#e6e6e6] pl-[25px]">Хасавюрт</td>
                            <td className="border border-[#e6e6e6] text-center">100₽</td>
                            <td className="border border-[#e6e6e6] text-center">Бесплатно</td>
                        </tr>
                        <tr className='h-[51px]'>
                            <td className="border border-[#e6e6e6] pl-[25px]">Дербент</td>
                            <td className="border border-[#e6e6e6] text-center">100₽</td>
                            <td className="border border-[#e6e6e6] text-center">Бесплатно</td>
                        </tr>
                        <tr className='h-[51px]'>
                            <td className="border border-[#e6e6e6] pl-[25px]">Кизилюрт</td>
                            <td className="border border-[#e6e6e6] text-center">150₽</td>
                            <td className="border border-[#e6e6e6] text-center">Бесплатно</td>
                        </tr>
                        <tr className='h-[51px]'>
                            <td className="border border-[#e6e6e6] pl-[25px]">Чеченская Республика</td>
                            <td className="border border-[#e6e6e6] text-center">200₽</td>
                            <td className="border border-[#e6e6e6] text-center">Бесплатно</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3 className='font-bold text-[#505050] mb-[25px]'>Доставка заказов в Москву и МО</h3>
                <p className='mt-[20px] text-[#505050] mb-[45px]'>Доставка осуществляется посредством транспортной компании.<br />Возможна доставка до терминала или адреса клиента по согласованию с клиентом.</p>
            </div>
        </Layout>
    )

}


export default Delivery;