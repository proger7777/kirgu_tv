const defaultState = {

  comparison: [],

}

const COMPARISON = "COMPARISON"
const CLEAR_COMPARISON = "CLEAR_COMPARISON"

export const compareReducer = (state = defaultState, action) => {

  switch (action.type) {

    case COMPARISON:

      let exist = { ...state }.comparison.find((item) =>

        item.product.xml_id == action.payload.product.id || item.product.id == action.payload.product.xml_id || item.product.id == action.payload.product.id

      )

      if (exist) {

        return { ...state, comparison: [...state.comparison.filter(item => item.product.xml_id !== action.payload.product.id && item.product.id !== action.payload.product.xml_id && item.product.id !== action.payload.product.id)] }

      } else {

        return { ...state, comparison: [...state.comparison, action.payload] }

      }

    case CLEAR_COMPARISON:
      return { ...state, comparison: [] }

    default:
      return state
  }

}

export const comparisonAction = (payload) => ({ type: COMPARISON, payload })
export const clearComparisonAction = (payload) => ({ type: CLEAR_COMPARISON, payload })