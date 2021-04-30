import { combineReducers } from 'redux'

import {productReducer} from "./productReducer"
import {categoriesReducer} from "./categoriesReducer"
import {productsReducer} from "./productsReducer"
import {userLoginReducer} from "./userLoginReducer"
import {userRegisterReducer} from "./userRegisterReducer"
import {orderCreateReducer} from "./orderReducer"
import {cartReducer} from "./cartReducer"
import {orderDetailsReducer} from "./orderDetailsReducer"
import {orderPayReducer} from "./orderPayReducer"
import {orderListMyReducer} from "./orderListMyReducer"
import {userDetailsReducer} from "./userDetailsReducer"
import {userUpdateProfileReducer} from "./userUpdateProfileReducer"
import {userListReducer} from "./userListReducer"
import {userDeleteReducer} from "./userDeleteReducer"



const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    productDetails: productReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }