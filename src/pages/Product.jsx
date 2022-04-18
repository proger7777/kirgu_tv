import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { getCategories } from "../components/services/categories";
import Layout from "../layout";
import { getCatCrumbs } from "../components/services/breadcrumbs";
import { getProduct } from "../components/services/product";
import ProductContent from "../components/ProductContent";

const Product = () => {
    const params = useParams()
    
    const [product, setProduct] = useState()
    const [allCats, setAllCats] = useState([])
    const [crumbs, setСrumbs] = useState([])

    const [fetchProduct, isProductLoading, productError] = useFetching(async(cat_id, id) => {
      
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)
 
        const res = getCatCrumbs(cat_id, resultAllCats)
        setСrumbs(res)   
        
        const resProduct = await getProduct(id)
        setProduct(resProduct)
    })

    useEffect(() => {
        fetchProduct(params.cat_id, params.id)
    }, [])

    return(
        <Layout crumbs={crumbs}>
            {product && <ProductContent item={product} /> }
        </Layout>
    )

}


export default Product;