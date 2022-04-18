import CategoryListItem from "./CategoryListItem";

const CategoryList = ({categories, allCats}) => {

    return (
        <div className='grid grid-cols-5 gap-[25px]'>
            {categories && categories.map(i => 
                <CategoryListItem key={i.id} cat={i} allCats={allCats} /> 
            )}
        </div>
    )

}

export default CategoryList;