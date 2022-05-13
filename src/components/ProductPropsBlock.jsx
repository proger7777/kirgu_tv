import { setHidden } from "../utils/classes";

const ProductPropsBlock = ({item, open}) => {

    const propsBlackList = ['Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
    'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
    'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
    'Возм исп списывать бонусы с характеристикой']
    
    return(
        <div className={`w-[60%] m-auto ${setHidden(!open)}`}>
            {item.properties ? Object.keys(item.properties).map(key => 
                    item.properties[key] && !propsBlackList.includes(key) &&
                        <div key={key} className='mb-[7px] flex p-[5px] text-[16px] rounded-[4px] border-b border-[#e6e6e6]'>
                            <div className='text-[#505050] w-1/2'>{key}</div>
                            <div className='w-1/2 text-right'>{item.properties[key]}</div>
                        </div>
                )
            : <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>
            }
        </div>
    )
}

export default ProductPropsBlock;