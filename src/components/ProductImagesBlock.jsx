import React, {  }  from 'react';
import { useEffect, useState } from "react";
import { setImagePath } from "./services/images";
import ProductSmalImgItem from "./ProductSmalImgItem";

const ProductImagesBlock = ({images}) => {

    const [activeSmallImg, setActiveSmallImg] = useState(images[0][1])
    const [selectImage, setSelectImage] = useState(images[0][0])

    function showImage(image) {
        setSelectImage(image[0])
        setActiveSmallImg(image[1])
    }

    useEffect(() => {
        setSelectImage(images[0][1])
        setActiveSmallImg(images[0][1])
    }, [images])

    return(
        <>
            <div className='w-[100px]'>
                {images.map((image, inx) => 
                    <ProductSmalImgItem key={inx} image={image} activeImg={activeSmallImg} showImage={showImage} />
                )}
            </div>

            <img src={setImagePath(selectImage)} alt='' className='p-[70px] product_big_image border border-[#e6e6e6] rounded-[5px] w-[1140px] h-[767px] object-contain w-[1140px] h-[767px]' />
        </>
    )
}

export default ProductImagesBlock;