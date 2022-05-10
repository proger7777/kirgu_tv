import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { getCategories, getCategoriesById, getCatCrumbs } from "../components/services/categories";
import Layout from "../layout";
import CategoryList from "../components/CategoryList";
import { activeMenu } from "../components/services/menu";
import Loadering from "../components/Loadering";

const Category = () => {
    const params = useParams()

    const navigate = useNavigate()
    
    const search = useLocation().search;
    const fromAllCats = new URLSearchParams(search).get('from_all_cats'); 
    
    const [allCats, setAllCats] = useState([])
    const [categories, setCategories] = useState([])

    const [mainCatId, setMainCatId] = useState()
    
    const [crumbs, setСrumbs] = useState([])

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async(id) => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        const result = await getCategoriesById(id)
        setCategories(result)

        const res = getCatCrumbs(id, resultAllCats)
        setСrumbs(res)   

        setMainCatId(activeMenu(id, resultAllCats, fromAllCats))
    })

    useEffect(() => {        
        fetchCategories(params.id)
        
    }, [params.id])

    return(
        <Layout crumbs={crumbs} activeMenu={mainCatId}>
            {isCatsLoading 
                ? <Loadering />
                : <CategoryList categories={categories} allCats={allCats} fromAllCats={fromAllCats} /> 
            }
        </Layout>
    )

}


export default Category;