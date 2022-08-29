import { useState } from "react";

const ProductCompare = ({ compareProperties, itemAllChar }) => {

    const propsBlackList = ['Рассрочка', 'Артикул', 'Акции', 'Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой']

    // console.log(compareProperties.some(x => compareProperties.indexOf(x) !== compareProperties.lastIndexOf(x)))

    return (
        <div className='w-full'>
            {itemAllChar ? itemAllChar.map((key, index) =>
                key && !propsBlackList.includes(key) &&
                <div key={index}>
                    <div key={key} className='flex text-[18px]'>
                        <div className='w-full pt-[10px] pb-[0px] pl-[15px] bg-[#DEDEDE] text-[black] font-semibold'>{key}</div>
                    </div>
                    <div className='flex text-[20px] justify-around'>{compareProperties.map((it, index) =>
                        <div key={index} className='w-full border bg-[#EAF6EA]'>
                            {(compareProperties.find(item => item[key] !== it[key])) ?
                                <div className='pl-[22px] pr-[22px] bg-[#EAF6EA] text-[black] p-[15px] text-center' dangerouslySetInnerHTML={{ __html: it[key]}}></div>
                                :
                                <div className='pl-[22px] pr-[22px] bg-[white] text-center p-[15px]' dangerouslySetInnerHTML={{ __html: it[key] }}></div>
                            }
                        </div>
                    )}</div>

                </div>
            )
                : <p className='text-[18px] text-[#8f8f8f]'>Выберите категорию</p>
            }
        </div>
    )
}

export default ProductCompare;