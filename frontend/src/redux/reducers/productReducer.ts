import produce from "immer"

import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST,
    LOAD_PRODUCT_DETAILS_SUCCESS
} from "../../constants/productConstants"
import {
    ProductDetailsTypes,
    ILoading,
    ILoaded,
    IFailure,
    IProduct
} from "../types"


interface IEntities {
  [payload: string]: IProduct
}

export interface IStateProduct {
  loading: ILoading
  loaded: ILoaded,
  error: null | IFailure,
  entities: IEntities
}


const initialState: IStateProduct  = {
  loading: {},
  loaded: {},
  error: null as IFailure | null,
  entities: {},
}

export type InitialStateProductType = typeof initialState
type Types = InitialStateProductType & ProductDetailsTypes


const productReducer = (state = initialState, action: ProductDetailsTypes ): InitialStateProductType  =>
  produce(state, (draft) => {
    // const {type, productId, product, error, reviewId, payload} = action
    //console.log('[productReducer][action]', action)
    console.log('[productReducer][action]', action)
    // const {type, payload, product_slug} = action

    switch(action.type) {
      case LOAD_PRODUCT_DETAILS_REQUEST: {
        draft.loading[action.product_slug] = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_DETAILS_SUCCESS: {
        draft.loading[action.product_slug] = false
        draft.loaded[action.product_slug] = true
        draft.error = null
        draft.entities[action.product_slug] = {...draft.entities[action.product_slug], ...action.payload}
        break
      }
      case LOAD_PRODUCT_DETAILS_FAILURE: {
        draft.loading[action.product_slug] = false
        draft.loaded[action.product_slug] = false
        draft.error = action.payload
        break
      }

      default:
        return
    }
  })



export {productReducer}