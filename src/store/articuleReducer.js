const defaultState = {
    articuleItem: []
}

const ADD_ARTICULE = "ADD_ARTICULE"

export const articuleReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_ARTICULE:
            return { ...state, articuleItem: [...state.articuleItem, action.payload] }
        default:
            return state
    }

}

export const addArticuleAction = (payload) => ({ type: ADD_ARTICULE, payload })
