import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Icons from "../Icons"
import { setCatUrl } from "../services/categories"




const ListCategory = ({ list, sublist, itemList }) => {

    let openList

    const toggleVisible = (id) => {
        // If subList open, close for open another list
        if (openList && (openList !== id)) {

            const icon = document.getElementById(`iconDownForList-${openList}`)
            const elementList = document.getElementById(`elementList-${openList}`)
            const titleNameList = document.getElementById(`titleNameList-${openList}`)
            titleNameList.className = titleNameList.className.includes("truncate") ? titleNameList.className.replace("truncate", "sd") : titleNameList.className.replace("sd", "truncate")
            elementList.className = elementList.className.includes("grid") ? elementList.className.replace("grid", "hidden") : elementList.className
            icon.style.transform = icon.style.transform ? '' : 'rotate(180deg)'

        }

        const icon = document.getElementById(`iconDownForList-${id}`)
        const elementList = document.getElementById(`elementList-${id}`)
        const titleNameList = document.getElementById(`titleNameList-${id}`)
        titleNameList.className = titleNameList.className.includes("truncate") ? titleNameList.className.replace("truncate", "sd") : titleNameList.className.replace("sd", "truncate")
        elementList.className = elementList.className.includes("grid") ? elementList.className.replace("grid", "hidden") : elementList.className.replace("hidden", "grid")
        icon.style.transform = icon.style.transform ? '' : 'rotate(180deg)'

    }

    return (
        <div>

            {itemList ?

                itemList.map((listItem, index) => (

                    <div key={listItem[0].id} className="border-b">

                        <button onClick={() => { toggleVisible(listItem[0].id + index); openList = (listItem[0].id + index) }} className='w-full flex justify-between items-center mt-[10px]'>

                            <h1 id={`titleNameList-${listItem[0].id + index}`} className='font-bold mb-[10px] text-[18px] truncate'>{listItem[0].name}</h1>
                            <Icons id={`iconDownForList-${listItem[0].id + index}`} name='pointer_b' className='h-[13px] w-[13px]' />

                        </button>

                        <div id={`elementList-${listItem[0].id + index}`} className={`mb-[10px] hidden`}>

                            {listItem[1].map((item) => (
                                item.parent_id == listItem[0].id && (
                                    <Link key={item.id} to={setCatUrl(listItem[1], item.id, false)} className="flex items-center mb-[20px]">
                                        <span className="text-[16px] ml-[20px] whitespace-nowrap" dangerouslySetInnerHTML={{ __html: item.name }}></span>
                                    </Link>
                                )
                            ))}

                        </div>

                    </div>

                )) :

                list.map((listItem, index) => (

                    <div key={listItem.id} className="border-b">

                        <button onClick={() => { toggleVisible(listItem.id + index); openList = (listItem.id + index) }} className='w-full flex justify-between items-center mt-[10px]'>

                            <h1 id={`titleNameList-${listItem.id + index}`} className='font-bold mb-[10px] text-[18px]'>{listItem.name}</h1>
                            <Icons id={`iconDownForList-${listItem.id + index}`} name='pointer_b' className='h-[13px] w-[13px]' />

                        </button>

                        <div id={`elementList-${listItem.id + index}`} className={`mb-[10px] hidden`}>

                            {sublist.map((item) => (

                                item.parent_id == listItem.id && (
                                    <Link key={item.id} to={setCatUrl(sublist, item.id, false)} className="flex items-center mb-[20px]">
                                        <span className="text-[16px] ml-[30px]" dangerouslySetInnerHTML={{ __html: item.name }}></span>
                                    </Link>
                                )

                            ))}

                        </div>
                    </div>
                ))
            }

        </div >

    )
}

export default ListCategory