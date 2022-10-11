import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { cartReducer } from "./addCart";
import { compareReducer } from "./addComparison";
import { favoritesReducer } from "./addFavorites";

const rootReducer = combineReducers({

    favorites: favoritesReducer,
    cart: cartReducer,
    comparison: compareReducer,

})

export const store = createStore(rootReducer, composeWithDevTools())