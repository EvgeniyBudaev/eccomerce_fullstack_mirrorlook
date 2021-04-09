import produce from "immer"
import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST,
    LOAD_PRODUCT_DETAILS_SUCCESS
} from "../../constants/productConstants"


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
    console.log('[productReducer][action]', action)
    const {type, payload, product_slug} = action

    switch(type) {
      case LOAD_PRODUCT_DETAILS_REQUEST: {
        draft.loading[product_slug] = true
        draft.error = null
        break
      }
      case LOAD_PRODUCT_DETAILS_SUCCESS: {
        draft.loading[product_slug] = false
        draft.loaded[product_slug] = true
        draft.error = null
        draft.entities[product_slug] = {...draft.entities[product_slug], ...payload}
        break
      }
      case LOAD_PRODUCT_DETAILS_FAILURE: {
        draft.loading[product_slug] = false
        draft.loaded[product_slug] = false
        draft.error = action.error
        break
      }

      default:
        return
    }
  })



export {productReducer}
