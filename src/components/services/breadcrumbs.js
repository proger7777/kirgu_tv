export const getCatCrumbs = (catId, allCategories) => {
    let result = []

    while(catId !== null) {
        let cat = allCategories.find(i => i.id === catId)
        result.push([cat.name, `category/${catId}`])
        catId = cat.parent_id
    }

    result.push(['Категории', 'categories'])

    return result.reverse()
}