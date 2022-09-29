const defaultState = {

  favorites: [],

}

const FAVORITES = "FAVORITES"
const CLEAR_FAVORITES = "CLEAR_FAVORITES"

export const favoritesReducer = (state = defaultState, action) => {

  switch (action.type) {

    case FAVORITES:

      let exist = { ...state }.favorites.find((item) =>

        item.product.xml_id == action.payload.product.id || item.product.id == action.payload.product.xml_id || item.product.id == action.payload.product.id

      )

      if (exist) {

        return { ...state, favorites: [...state.favorites.filter(item => item.product.xml_id !== action.payload.product.id && item.product.id !== action.payload.product.xml_id && item.product.id !== action.payload.product.id)] }

      } else {

        return { ...state, favorites: [...state.favorites, action.payload] }

      }

    case CLEAR_FAVORITES:
      return { ...state, favorites: [] }

    default:
      return state
  }

}

export const favoritesAction = (payload) => ({ type: FAVORITES, payload })
export const clearFavoritesAction = (payload) => ({ type: CLEAR_FAVORITES, payload })