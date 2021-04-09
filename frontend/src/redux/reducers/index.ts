import { combineReducers } from 'redux'

import {productReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"
import {productsReducer} from "./productsReducer"



const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    productDetails: productReducer,
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }