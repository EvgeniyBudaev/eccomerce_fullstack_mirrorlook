import { combineReducers } from 'redux'

import {productReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"
import {productsReducer} from "./productsReducer"
import {amountReducer} from "./amountReducer"
import {userLoginReducer} from "./userLoginReducer"
import {userRegisterReducer} from "./userRegisterReducer"



const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    productDetails: productReducer,
    amountProducts: amountReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }