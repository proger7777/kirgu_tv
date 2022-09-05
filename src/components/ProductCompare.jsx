const ProductCompare = ({ compareProperties, itemAllChar }) => {

    const propsBlackList = ['Рассрочка', 'Артикул', 'Акции', 'Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой']


    return (
        <div className='w-full'>

            {itemAllChar ? itemAllChar.map((key, index) =>
                key && !propsBlackList.includes(key) &&

                <div key={index} className='flex text-[20px] justify-around'>
                    <div className='w-full mr-[15px] sticky left-0 pt-[5px] bg-[white] pl-[5px] text-[18px] font-bold'>{key}</div>
                    {compareProperties.map((it, index) =>
                        <div key={index} className='w-full border bg-[#EAF6EA]'>

                            {(compareProperties.find(item => item.properties[key] !== it.properties[key])) ?
                                <div className='pl-[22px] pr-[22px] bg-[#EAF6EA] text-[black] p-[25px] pt-[45px] pb-[10px] text-center' dangerouslySetInnerHTML={{ __html: it.properties[key] }}></div>
                                :
                                <div className='pl-[22px] pr-[22px] bg-[white] text-center p-[25px] pt-[45px] pb-[10px]' dangerouslySetInnerHTML={{ __html: it.properties[key] }}></div>
                            }
                        </div>
                    )}
                </div>
            )
                : <p className='text-[18px] text-[#8f8f8f]'>Выберите категорию</p>
            }
        </div>
    )
}

export default ProductCompare;