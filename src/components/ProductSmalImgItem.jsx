import React, {  }  from 'react';
import { setImagePath } from "../utils/images";

const ProductSmalImgItem = ({image, activeImg, showImage}) => {

    const activeCl = image[1] === activeImg ? 'border border-[#008954] p-[10px]' : ''

    return(
        <img         
            src={setImagePath(image[1])} 
            alt='' 
            className={`${activeCl} w-full object-contain h-[100px] rounded-[4px] cursor-pointer m-auto mb-[10px]`}
            onClick={() => showImage(image)}
        />
    )}

export default ProductSmalImgItem;