export const getCatCrumbs = (catId, allCategories) => {
    let result = []

    while(catId !== null) {
        let cat = allCategories.find(i => i.id === catId)
        result.push(cat.name)
        catId = cat.parent_id
    }

    result.push('Категории')

    return result.reverse()
}