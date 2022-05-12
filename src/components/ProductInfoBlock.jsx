import { useState } from "react";
import { setHidden } from "../utils/classes";
import ProductImagesBlock from "./ProductImagesBlock";
import ProductInfoDataBlock from "./ProductInfoDataBlock";

const ProductInfoBlock = ({item, open}) => {

    const [product, setProduct] = useState(item)

    return(
        <div className={`${setHidden(!open)} flex space-x-[30px]`}>
            <ProductImagesBlock smallImages={product.small_images} images={product.images} />
            <ProductInfoDataBlock item={product} />
        </div>
    )
}

export default ProductInfoBlock;