const ProductCompare = ({ compareProperties, itemAllChar }) => {

    const propsBlackList = ['Рассрочка', 'Акции', 'Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой']

    return (
        <div className='w-full'>
            {itemAllChar ? itemAllChar.map(key =>
                key && !propsBlackList.includes(key) &&
                <div>
                    <div key={key} className='text-[22px] flex p-[5px] text-[16px]'>
                        <div className='w-full p-[10px] bg-[#E0E0E0] text-[black] font-semibold'>{key}</div>
                    </div>
                    <div className='flex text-[20px] flex-wrap justify-between'>
                        <div className='flex  text-[20px] flex-wrap justify-around w-full'>{compareProperties.map(it => 
                        <div className='' dangerouslySetInnerHTML={{__html: it[key]}}></div>    
                        )}</div>
                    </div>

                </div>
            )
                : <p className='text-[18px] text-[#8f8f8f]'>Выберите категорию</p>
            }
        </div>
    )
}

export default ProductCompare;