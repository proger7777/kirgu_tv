import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { cartReducer } from "./addCart";
import { compareReducer } from "./addComparison";
import { favoritesReducer } from "./addFavorites";
import { buildingMapReducer } from "./buildingMap";

const rootReducer = combineReducers({

    favorites: favoritesReducer,
    cart: cartReducer,
    comparison: compareReducer,
    buildingMap: buildingMapReducer,

})

export const store = createStore(rootReducer, composeWithDevTools())