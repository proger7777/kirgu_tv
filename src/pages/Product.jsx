import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { getCategories, getCatCrumbs } from "../components/services/categories";
import Layout from "../layout";
import { getProduct } from "../components/services/product";
import ProductContent from "../components/ProductContent";
import { activeMenu } from "../components/services/menu";

const Product = () => {
    const params = useParams()

    const search = useLocation().search;
    const fromAllCats = new URLSearchParams(search).get('from_all_cats'); 
    
    const [product, setProduct] = useState()
    const [crumbs, setСrumbs] = useState([])

    const [mainCatId, setMainCatId] = useState()

    const [fetchProduct, isProductLoading, productError] = useFetching(async(catId, id) => {

        const resultAllCats = await getCategories()

        const resProduct = await getProduct(id)

        if(catId) {
            const res = getCatCrumbs(catId, resultAllCats)
            setСrumbs(res)   
            setMainCatId(activeMenu(catId, resultAllCats, fromAllCats))
        } else {
            setСrumbs([['Поиск', '/search'], [resProduct.name, '']])
        }
        
        setProduct(resProduct)
    })

    useEffect(() => {
        fetchProduct(params.cat_id, params.id)
    }, [])

    return(
        <Layout crumbs={crumbs} activeMenu={mainCatId}>
            {product && <ProductContent item={product} /> }
        </Layout>
    )

}


export default Product;