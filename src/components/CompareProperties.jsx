const CompareProperties = ({ compareProperties, itemAllChar }) => {

    const propsBlackList = ['Рассрочка', 'Артикул', 'Акции', 'Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой']

    return (
        <div className='w-full'>
            {itemAllChar.map((key, index) =>
                key && !propsBlackList.includes(key) &&

                <div key={index} className='flex text-[20px] justify-around'>
                    <div className='w-4/6 sticky left-0 pt-[5px] bg-[white] border text-[16px] pr-[5px] pl-[10px] font-bold'>{key}</div>
                    {compareProperties.map((it, index) =>
                        <div key={index} className='w-full border bg-[#EAF6EA]'>

                            {(compareProperties.find(item => item.properties[key] !== it.properties[key])) ?
                                <div className='bg-[#EAF6EA] p-[20px] text-center' dangerouslySetInnerHTML={{ __html: it.properties[key] }}></div>
                                :
                                <div className='bg-[white] p-[20px] text-center' dangerouslySetInnerHTML={{ __html: it.properties[key] }}></div>
                            }
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CompareProperties;