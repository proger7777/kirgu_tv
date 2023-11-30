import React from 'react'

const CategoriesSearch = ({ categories, categoryActiveId, setCategoryActiveId}) => {
    return (
        <div className='search-categories'>
            {categories && categories.length &&
                categories.map((item, key) =>
                    <button onClick={() => setCategoryActiveId(item.id)} key={item.id} className={categoryActiveId == item.id && 'bg-[#008954] text-white'}>
                        {item.name}
                    </button>
                )
            }
        </div>
    )
}

export default CategoriesSearch