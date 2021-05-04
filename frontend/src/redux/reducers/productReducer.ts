import produce from "immer"

import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST,
    LOAD_PRODUCT_DETAILS_SUCCESS
} from "../../constants/productConstants"
import {
    ProductDetailsTypes,
    IFailure,
    IProduct,
} from "../types"

export interface IStateProduct {
  loading: boolean
  loaded: boolean
  error: null | IFailure,
  product: any
}

const initialState: IStateProduct  = {
  loading: false,
  loaded: false,
  error: null as IFailure | null,
  product: {}
}

const productReducer = (state = initialState, action: ProductDetailsTypes ): IStateProduct  =>
  produce(state, (draft) => {
    // console.log('[productReducer][action]', action)

    switch(action.type) {
      case LOAD_PRODUCT_DETAILS_REQUEST: {
        draft.loading = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_DETAILS_SUCCESS: {
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.product = action.payload
        break
      }
      case LOAD_PRODUCT_DETAILS_FAILURE: {
        draft.loading = false
        draft.loaded = false
        draft.error = action.payload
        break
      }

      default:
        return
    }
  })

export {productReducer}