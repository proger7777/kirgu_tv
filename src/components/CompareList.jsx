import React, { useEffect, useState } from 'react';
import { getProduct, setProductUrl } from "./services/product";
import { useFetching } from '../hooks/useFetching';
import Loadering from './Loadering';
import CompareItem from './CompareItem';


const CompareList = ({ cat, catalogId }) => {

    const [propsProduct, setPropsProduct] = useState()

    const [props, setProps] = useState([])

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resProduct = await getProduct(id)
        setPropsProduct(resProduct)
        propsList(resProduct.properties)
    })


    function propsList(prop) {
        let list = props
        for (let key in prop) {
            if (!list.find((item) => item == key) && !propsBlackList.includes(key)) {
                list.push(key)
                setProps(list)
            }
        }

    }

    useEffect(() => {
        cat.map((item) => {

            fetchProduct(item.category, item.id)
        })

    }, [])

    const propsBlackList = ['Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой', 'Акции', 'Рассрочка']




    return (
        <div className='flex w-[1720px]'>

            <div className={`flex-col w-[280px] mt-[15px]`}>

                <div className='h-[405px] w-[280px] border-b'>

                    <h1>Характеристики</h1>

                </div>

                <div className='bg-gray-100'>
                    {props.map((item, i) => (
                        <div className='mb-[7px] h-[50px] p-[5px] text-[16px] border-b' key={i}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

            </div>


            {(cat.length) ? (

                <div className='flex h-full overflow-y-hidden' >
                    
                    {cat.map((item, i) => (

                        <div className=' catalog_content gap-[25px] mt-[15px] ml-[20px]' key={i}>
                            <CompareItem cat={item} catalogId={catalogId} propList={props} />
                        </div>

                    ))}

                </div>

            ) : (<></>)}

        </div>
    )

}

export default CompareList;