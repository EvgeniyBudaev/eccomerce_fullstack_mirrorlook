// import {
//     PRODUCT_DETAILS_FAILURE,
//     PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
//     PRODUCT_LIST_FAILURE,
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS
// } from "../../constants/productConstants"
//
//
// const productListReducer = (state = {products: []}, action) => {
//     switch (action.type) {
//         case PRODUCT_LIST_REQUEST:
//             return {loading: true, products: []}
//
//         case PRODUCT_LIST_SUCCESS:
//             return {loading: false, products: action.payload}
//
//         case PRODUCT_LIST_FAILURE:
//             return {loading: false, error: action.payload}
//
//         default:
//             return state
//     }
// }
//
// const productDetailsReducer = (state = { product: {reviews: []} }, action) => {
//     switch (action.type) {
//         case PRODUCT_DETAILS_REQUEST:
//             return {loading: true, ...state}
//
//         case PRODUCT_DETAILS_SUCCESS:
//             return {loading: false, product: action.payload}
//
//         case PRODUCT_DETAILS_FAILURE:
//             return {loading: false, error: action.payload}
//
//         default:
//             return state
//     }
// }
//
// export { productListReducer, productDetailsReducer }

import produce from "immer"
import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST,
    LOAD_PRODUCT_DETAILS_SUCCESS
} from "../../constants/productConstants"
import {arrToMap} from "../../utilities/utils"


const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
}


const productReducer = (state = initialState, action)  =>
  produce(state, (draft) => {
    // const {type, productId, product, error, reviewId, payload} = action
    //console.log('[productReducer][action]', action)

    switch(action.type) {
      case LOAD_PRODUCT_DETAILS_REQUEST: {
        draft.loading[action.productId] = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_DETAILS_SUCCESS: {
        draft.loading[action.productId] = false
        draft.loaded[action.productId] = true
        draft.error = null
        draft.entities = {...draft.entities, ...arrToMap(action.product)}
        break
      }
      case LOAD_PRODUCT_DETAILS_FAILURE: {
        draft.loading[action.productId] = false
        draft.loaded[action.productId] = false
        draft.error = action.error
        break
      }

      default:
        return
    }
  })



export {productReducer}
