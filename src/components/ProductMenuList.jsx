import { Link } from "react-router-dom";

const ProductMenuList = ({prMenuList, activePart, openPartFnc}) => {

    const activeTabClasses = 'border-b-[2px] border-[#008954] pb-[12px]'

    return(
        <div className='product_menu flex space-x-[50px]'>
            {prMenuList.map(i =>
                <Link 
                    to='' 
                    key={i[0]} 
                    className={`${activePart === i[0] && activeTabClasses}`} 
                    onClick={(e) => openPartFnc(e.target, i[0])}>
                        {i[1]}
                </Link>
            )}
        </div>
    )
}

export default ProductMenuList;