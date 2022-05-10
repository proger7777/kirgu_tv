import { getMainCatId } from "./categories";

export const activeMenu = (catId, allCats, fromAllCats) => {
    const res = fromAllCats ? 'allcats' : getMainCatId(catId, allCats)
    return res
}