import { useEffect } from "react"
import { Link } from "react-router-dom"
import Icons from "../Icons"
import { setCatUrl } from "../services/categories"




const ListCategory = ({ list, sublist }) => {


    const toggleVisible = (id) => {

        const arrow = document.getElementById(`arrowDownFilter-${id}`)
        const elem = document.getElementById(id)
        elem.style.display = elem.style.display == 'grid' ? 'none' : 'grid'
        arrow.style.transform = arrow.style.transform ? '' : 'rotate(180deg)'

    }

    return (
        <div>
            
            {list.map((listItem) => (
                <div key={listItem.id} className="border-b">
                    <button onClick={() => toggleVisible(listItem.id)} className='w-full flex justify-between items-center mt-[10px]'>

                        <h1 className='font-bold mb-[10px] text-[18px]'>{listItem.name}</h1>
                        <Icons id={`arrowDownFilter-${listItem.id}`} name='pointer_b' className='h-[13px] w-[13px]' />

                    </button>

                    <div id={listItem.id} className='hidden mb-[10px]'>
                        {sublist.map((item) => (
                            item.parent_id == listItem.id && (
                                <Link key={item.id} to={setCatUrl(sublist, item.id, false)} className="flex items-center mb-[20px]">
                                    <span className="text-[14px] ml-[30px]" dangerouslySetInnerHTML={{ __html: item.name }}></span>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            ))}

        </div >

    )
}

export default ListCategory