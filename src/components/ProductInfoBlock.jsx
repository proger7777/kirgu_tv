import React, {  }  from 'react';
import { setHidden } from "./services/classes";
import ProductImagesBlock from "./ProductImagesBlock";
import ProductInfoDataBlock from "./ProductInfoDataBlock";

const ProductInfoBlock = ({item, open, catId}) => {

    return(
        <div className={`${setHidden(!open)} flex space-x-[30px]`}>
            <ProductImagesBlock images={item.images} />
            <ProductInfoDataBlock item={item} catId={catId}/>
        </div>
    )
}

export default ProductInfoBlock;