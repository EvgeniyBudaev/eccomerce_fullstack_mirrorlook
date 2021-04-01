import { combineReducers } from 'redux'

import {productDetailsReducer, productListReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"
import productsReducer from "./productsReducer"


const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer,
    products: productsReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }