import React, {  }  from 'react';
import { setHidden } from "./services/classes";
import ProductReviewItem from "./ProductReviewItem";

const ProductReviewsBlock = ({item, open}) => {
    
    return(
        <div className={`${setHidden(!open)}`}>
        { item.reviewsData.reviews.length
            ? item.reviewsData.reviews.map((i, inx) => <ProductReviewItem key={i.ID} item={i} noFirst={inx !== 0} /> )
            : <p className='text-[18px] text-[#8f8f8f]'>Нет данных</p>
        }
        </div>
    )
}

export default ProductReviewsBlock;