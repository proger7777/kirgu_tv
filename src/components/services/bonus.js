const OPEN_BONUS = 'openBonus'

export const checkAuthBonusForm = () => {
    let res = true

    let saved = localStorage.getItem(OPEN_BONUS)

    if (saved && (new Date().getTime() - saved > 60 * 1000)) {
        localStorage.removeItem('openBonus')
        res = false
    } 

    return res
}


export const setCheckBonus = () => {
    localStorage.setItem(OPEN_BONUS, new Date().getTime())
}

export const clearCheckBonus = () => {
    localStorage.removeItem(OPEN_BONUS)
}




