import produce from 'immer'

import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants"
import {arrToMap} from "../../utilities/utils"


const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
}

// { [productId]: product }
const productsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const {type, payload, categoryId} = action
    //console.log('[productsReducer][action]', action)

    switch (type) {
      case LOAD_PRODUCTS_REQUEST: {
        draft.loading[categoryId] = true
        break
      }
      case LOAD_PRODUCTS_SUCCESS: {
        draft.loading[categoryId] = false
        draft.loaded[categoryId] = true
        draft.error = null
        draft.entities = {...draft.entities, ...arrToMap(payload)}
        break
      }
      case LOAD_PRODUCTS_FAILURE: {
        draft.loading[categoryId] = false
        draft.loaded[categoryId] = false
        draft.error = payload
        break
      }
      default:
        return
    }
  })

export default productsReducer
