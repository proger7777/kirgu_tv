import { setHidden } from "../utils/classes";
import ProductImagesBlock from "./ProductImagesBlock";
import ProductInfoDataBlock from "./ProductInfoDataBlock";

const ProductInfoBlock = ({item, open}) => {

    return(
        <div className={`${setHidden(!open)} flex space-x-[30px]`}>
            <ProductImagesBlock images={item.images} />
            <ProductInfoDataBlock item={item} />
        </div>
    )
}

export default ProductInfoBlock;