import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout";
import { getCategories, getCategoryById } from "../components/services/categories";
import { getCatCrumbs } from "../components/services/breadcrumbs";
import { useFetching } from "../hooks/useFetching";
import CatalogContent from "../components/CatalogContent";

const Catalog = () => {

    

    const params = useParams()

    const [category, setCategory] = useState([])

    const [crumbs, setСrumbs] = useState([])

    const [fetchCategory, isCategoryLoading, categoryError] = useFetching(async(id) => {
        const resultAllCats = await getCategories()

        const res = getCatCrumbs(id, resultAllCats)
        setСrumbs(res)

        const result = await getCategoryById(id)
        setCategory(result)
    })

    useEffect(() => {
        fetchCategory(params.id)
    }, [])

    return(
        <Layout crumbs={crumbs}>
            <CatalogContent catalogId={params.id} title={category.name} />
        </Layout>
    )

}


export default Catalog;