import { combineReducers } from 'redux'

import {productReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"
import {productsReducer} from "./productsReducer"
import {basketReducer} from "./basketReducer"
import {userLoginReducer} from "./userReducer"



const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    productDetails: productReducer,
    basket: basketReducer,
    userLogin: userLoginReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }