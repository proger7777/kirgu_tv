const defaultState = {
    favoriteItem: []
}

const ADD_FAVORITE_ITEM = "ADD_FAVORITE_ITEM"
const REMOVE_FAVORITE_ITEM = "REMOVE_FAVORITE_ITEM"
const REMOVE_FAVORITE_IN_INFO_ITEM = "REMOVE_FAVORITE_IN_INFO_ITEM"

export const favoriteReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_FAVORITE_ITEM:
            return { ...state, favoriteItem: [ ...state.favoriteItem, action.payload ] }
        case REMOVE_FAVORITE_ITEM:
            return { ...state, favoriteItem: state.favoriteItem.find(it => it.id == action.payload.site_id ) ? state.favoriteItem.filter(it => it.id !== action.payload.site_id) : state.favoriteItem.filter(it => it.id !== action.payload.id) }
        case REMOVE_FAVORITE_IN_INFO_ITEM:
            return { ...state, favoriteItem: state.favoriteItem.find(it => it.site_id == action.payload.id ) ? state.favoriteItem.filter(it => it.site_id !== action.payload.id) : state.favoriteItem.filter(it => it.id !== action.payload.id) }
        default:
            return state
    }
}   

export const addFavoriteItemAction = (payload) => ({type: ADD_FAVORITE_ITEM, payload})
export const removeFavoriteItemAction = (payload) => ({type: REMOVE_FAVORITE_ITEM, payload})
export const removeFavoriteItemInInfoBlockAction = (payload) => ({type: REMOVE_FAVORITE_IN_INFO_ITEM, payload})

