import React, { } from 'react';
import Icons from "./Icons";

const PropFilterItem = ({ pr, openData, openAccord, setFilterProp }) => {

    let filterPr = pr.props
    let fff = filterPr

    if ( pr.name == 'Рассрочка' ) {
        filterPr = filterPr.find(e => e.name == 'пустое значение' )
        if (filterPr) {
            fff = fff.findIndex(e => e.name == 'пустое значение' )
            pr.props.splice(fff, 1)
        }

    }


    const hiddenCl = openData.id === pr.id && openData.open ? '' : 'hidden'

    return (
        <div className="border-b border-[#e6e6e6]">
            <div className="accord_title flex min-h-[65px] justify-between items-center cursor-pointer" onClick={() => openAccord(pr)}>
                <span className="font-bold">{pr.name}</span>
                <Icons name='pointer_b' className='w-[15px] h-[7px] fill-[#f0a83c]' />
            </div>

            <div className={`${hiddenCl} pt-[10px]`}>
                {pr.props.map((prChild, inx) =>
                    <label className="flex items-center mb-[20px]" key={inx}>
                        <input type="checkbox" onChange={(e) => setFilterProp(e.target.checked, pr.id, prChild.id)} />
                        <span className="text-[14px] ml-[12px]" dangerouslySetInnerHTML={{__html: prChild.name}}></span>
                    </label>
                )}
            </div>
        </div>
    )

}

export default PropFilterItem;


