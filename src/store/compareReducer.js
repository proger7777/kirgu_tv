const defaultState = {
    compareItem: [],
    compareItemLittle: []
}

const ADD_COMPARE_ITEM = "ADD_COMPARE_ITEM"
const ADD_COMPARE_ITEM_LITTLE = "ADD_COMPARE_ITEM_LITTLE"
const REMOVE_COMPARE_ITEM = "REMOVE_COMPARE_ITEM"
const REMOVE_COMPARE_ITEM_LITTLE = "REMOVE_COMPARE_ITEM_LITTLE"

export const compareReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COMPARE_ITEM:
            return { ...state, compareItem: [ ...state.compareItem, action.payload ] }
        case ADD_COMPARE_ITEM_LITTLE:
            return { ...state, compareItemLittle: [ ...state.compareItemLittle, action.payload ] }
        case REMOVE_COMPARE_ITEM:
            return { ...state, compareItem: state.compareItem.filter(it => it.id !== action.payload.site_id) }
        case REMOVE_COMPARE_ITEM_LITTLE:
            return { ...state, compareItemLittle: state.compareItemLittle.filter(it => it.id !== action.payload.id) }
        default:
            return state
    }
}

export const addCompareItemAction = (payload) => ({type: ADD_COMPARE_ITEM, payload})
export const addCompareItemLittleAction = (payload) => ({type: ADD_COMPARE_ITEM_LITTLE, payload})
export const removeCompareItemAction = (payload) => ({type: REMOVE_COMPARE_ITEM, payload})
export const removeCompareItemLittleAction = (payload) => ({type: REMOVE_COMPARE_ITEM_LITTLE, payload})
