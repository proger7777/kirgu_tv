import React, {  }  from 'react';
import { setHidden } from "../utils/classes";

const ProductPropsBlock = ({item, open}) => {
    
    return(
        <div className={`w-[60%] m-auto ${setHidden(!open)}`}>
            {item.properties ? Object.keys(item.properties).map(key => 
                    item.properties[key] &&
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