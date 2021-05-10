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
import {userUpdateReducer} from "./userUpdateReducer"
import {productDeleteReducer} from "./productDeleteReducer"
import {productCreateReducer} from "./productCreateReducer"
import {productUpdateReducer} from "./productUpdateReducer"
import {orderListReducer} from "./orderListReducer"
import {orderDeliverReducer} from "./orderDeliverReducer"
import {productReviewCreateReducer} from "./productReviewCreateReducer"

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    productDetails: productReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer
})


type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>


export { rootReducer }