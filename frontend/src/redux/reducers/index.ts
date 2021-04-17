import { combineReducers } from 'redux'

import {productReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"
import {productsReducer} from "./productsReducer"
import {userLoginReducer} from "./userLoginReducer"
import {userRegisterReducer} from "./userRegisterReducer"
import {orderCreateReducer} from "./orderReducer"
import {cartReducer} from "./cartReducer"



const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    productDetails: productReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }