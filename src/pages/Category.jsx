import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { getCategories, getCategoriesById } from "../components/services/categories";
import Layout from "../layout";
import CategoryList from "../components/CategoryList";
import { getCatCrumbs } from "../components/services/breadcrumbs";

const Category = () => {
    const params = useParams()
    
    const [allCats, setAllCats] = useState([])
    const [categories, setCategories] = useState([])

    const [crumbs, setСrumbs] = useState([])

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async(id) => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        const res = getCatCrumbs(id, resultAllCats)
        setСrumbs(res)   

        const result = await getCategoriesById(id)
        setCategories(result)
    })

    useEffect(() => {
        fetchCategories(params.id)
    }, [params.id])

    return(
        <Layout crumbs={crumbs}>
            {!isCatsLoading && <CategoryList categories={categories} allCats={allCats} /> }
        </Layout>
    )

}


export default Category;