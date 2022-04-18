import { Link } from "react-router-dom";
import { setImagePath } from "../utils/images";
import { setCatUrl } from "./services/categories";

const CategoryListItem = ({cat, allCats}) => {

    return (
        <Link key={cat.id} to={setCatUrl(allCats, cat.id)} className='cat_link border-[1px] border-[#F5F5F5] w-[324px] h-[276px] pl-[20px] pr-[20px] flex flex-col items-center'>
            <img src={setImagePath(cat.image)} alt='' className='object-contain h-[197px] m-auto mt-[20px] mb-[10px]' />
            <span className='text-[14px] font-semibold block w-full text-center'>{cat.name}</span>
        </Link> 
    )

}

export default CategoryListItem;