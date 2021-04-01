import { combineReducers } from 'redux'

import {productDetailsReducer, productListReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"


const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }