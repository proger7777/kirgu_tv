import React, {  }  from 'react';
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { getCategories, getCategoriesById } from "../components/services/categories";
import Layout from "../layout";
import CategoryList from "../components/CategoryList";

const Categories = () => {

    const [allCats, setAllCats] = useState([])
    const [categories, setCategories] = useState([])

    const [fetchCategories, isCatsLoading, catsError] = useFetching(async() => {
        const resultAllCats = await getCategories()
        setAllCats(resultAllCats)

        const result = await getCategoriesById(null)
        setCategories(result)
    })

    useEffect(() => {
        fetchCategories()
    }, [])

    const crumbs = [['Категории', 'categories']]

    return(
        <Layout crumbs={crumbs} activeMenu='allcats'>
            <CategoryList categories={categories} allCats={allCats} fromAllCats='true' />
        </Layout>
    )

}


export default Categories;