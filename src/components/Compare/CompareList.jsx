import React, { useEffect, useState } from 'react';
import { getProduct } from "../services/product";
import { useFetching } from '../../hooks/useFetching';
import Loadering from '../Loadering';
import Icons from '../Icons';
import CompareProducts from './CompareProducts';
import CompareProps from './CompareProps';


const CompareList = ({ cat, catalogId }) => {

    const [propsProduct, setPropsProduct] = useState()

    const [props, setProps] = useState([])

    const [allProps, setAllProps] = useState([])

    const [downNumber, setDownNumber] = useState(0)

    const [upNumber, setUpNumber] = useState(4)

    const [fetchProduct, isProductLoading, productError] = useFetching(async (catId, id) => {

        const resProduct = await getProduct(id)
        setPropsProduct(resProduct)
        propsList(resProduct)
    })

    let allList = []
    let list = []

    const propsList = (prop) => {

        for (let key in prop.properties) {
            if (!list.find((item) => item == key) && !propsBlackList.includes(key)) {
                list.push(key)
                setProps(list)
            }
        }
        allList.push(prop)
        setAllProps(allList)
    }

    useEffect(() => {

        allList = []
        list = []

        cat.map((item) => {

            fetchProduct(item.catId, item.product.id)
        })
        setDownNumber(0)
        setUpNumber(4)
    }, [cat])

    const propsBlackList = ['Картинки', 'Характеристики', 'Сумма бонусов для товара с характеристикой',
        'Сумма бонусов для товара без характеристики', 'Возм исп начисление бонусы без характеристики',
        'Возм исп списывать бонусы без характеристики', 'Возм исп начисление бонусы с характеристикой',
        'Возм исп списывать бонусы с характеристикой', 'Акции', 'Рассрочка', 'Цвет']


    return (
        <div className='flex w-[1720px] h-full overflow-y-scrollS'>

            {isProductLoading
                ? <Loadering />
                : (
                    <div className='mb-[7px] text-[16px] border-b '>

                        <div className='flex mb-[20px]' >

                            <button className='absolute bottom-[840px] bg-[#F5F5F5] w-[30px] h-[30px] flex items-center justify-center rounded-[15px] left-[85px]' onClick={() => { if (downNumber - 1 >= 0) { setDownNumber(downNumber - 1); setUpNumber(upNumber - 1) } }}>
                                <Icons name='left' className=" w-[30px] h-[30px] " color={`${(downNumber > 0) ? ('#008954') : ('#C4C4C4')}`} />
                            </button>

                            {allProps.map((item, i) => (
                                (i >= downNumber && i <= upNumber) ? (

                                    <div className='catalog_content mt-[20px] mr-[12px]' key={i}>
                                        <CompareProducts cat={item} catalogId={catalogId} propList={props} />
                                    </div>
                                ) : (<></>)

                            ))}

                            <button className='absolute bottom-[840px] bg-[#F5F5F5] w-[30px] h-[30px] flex items-center justify-center rounded-[15px] right-[95px]' onClick={() => { if (upNumber + 1 < allProps.length) { setDownNumber(downNumber + 1); setUpNumber(upNumber + 1) } }}>
                                <Icons name='right' className=" w-[30px] h-[30px]" color={`${(upNumber + 1 !== allProps.length) ? ('#008954') : ('#C4C4C4')}`} />
                            </button>

                        </div>

                        <CompareProps allProps={allProps} props={props} upNumber={upNumber} downNumber={downNumber} />

                    </div>
                )}

        </div>
    )

}

export default CompareList;