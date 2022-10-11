const defaultState = {

  cart: [],

}

const CART = "CART"
const CLEAR_CART = "CLEAR_CART"

export const cartReducer = (state = defaultState, action) => {

  switch (action.type) {

    case CART:

      let exist = { ...state }.cart.find((item) =>

        item.product.xml_id == action.payload.product.id || item.product.id == action.payload.product.xml_id || item.product.id == action.payload.product.id

      )

      if (exist) {

        return { ...state, cart: [...state.cart.filter(item => item.product.xml_id !== action.payload.product.id && item.product.id !== action.payload.product.xml_id && item.product.id !== action.payload.product.id)] }

      } else {

        return { ...state, cart: [...state.cart, action.payload] }

      }

    case CLEAR_CART:
      return { ...state, cart: [] }

    default:
      return state
  }

}

export const cartAction = (payload) => ({ type: CART, payload })
export const clearCartAction = (payload) => ({ type: CLEAR_CART, payload })