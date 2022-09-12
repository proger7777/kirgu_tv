import { combineReducers, createStore } from "redux";
import { articuleReducer } from "./articuleReducer";
import { compareReducer } from "./compareReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
    favorite: favoriteReducer,
    articule: articuleReducer,
    compare: compareReducer,
})

export const store = createStore(rootReducer)