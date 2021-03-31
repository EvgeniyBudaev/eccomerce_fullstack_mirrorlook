import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {  composeWithDevTools } from 'redux-devtools-extension'

import { productDetailsReducer, productListReducer } from "./reducers/productReducer"
import {categoriesReducer} from "./reducers/categoriesReducer"


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store