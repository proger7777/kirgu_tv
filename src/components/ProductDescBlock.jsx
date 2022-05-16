import React, {  }  from 'react';
import { setHidden } from "./services/classes";

const ProductDescBlock = ({item, open}) => {

    return(
        <div className={`${setHidden(!open)} text-[#505050]`}>
            {item.description
                ? item.description
                : <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>
            }
        </div>
    )
}

export default ProductDescBlock;