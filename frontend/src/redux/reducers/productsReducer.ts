import produce from 'immer'

import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants"
import {arrToMap} from "../../utilities/utils"
import {IFailure, ILoaded, ILoading, IProduct, ProductsTypes} from "../types"

interface IEntities {
  [payload: string]: Array<IProduct>
}

export interface IStateProducts {
  loading: ILoading
  loaded: ILoaded,
  error: null | IFailure,
  entities: IEntities
}

const initialState: IStateProducts = {
  loading: {},
  loaded: {},
  error: null as IFailure | null,
  entities: {},
}


// { category_slug: [{product}] }
const productsReducer = (state = initialState, action: ProductsTypes): IStateProducts =>
  produce(state, (draft) => {
    // console.log('[productsReducer][action]', action)

    switch (action.type) {
      case LOAD_PRODUCTS_REQUEST: {
        draft.loading[action.category_slug] = true
        break
      }
      case LOAD_PRODUCTS_SUCCESS: {
        draft.loading[action.category_slug] = false
        draft.loaded[action.category_slug] = true
        draft.error = null
        draft.entities[action.category_slug] = action.payload
        break
      }
      case LOAD_PRODUCTS_FAILURE: {
        draft.loading[action.category_slug] = false
        draft.loaded[action.category_slug] = false
        draft.error = action.payload
        break
      }
      default:
        return
    }
  })


export {productsReducer}
