import { arrToMap } from '../../utilities/utils'

import { LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAILURE } from "../../constants/categoriesConstants"
import {CategoriesTypes} from "../types"


const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null as object | null,
  payload: null as object | null,
}

export type InitialStateCategoriesType = typeof initialState
type Types = InitialStateCategoriesType & CategoriesTypes


// { [categoryId]: category }
const categoriesReducer = (state = initialState, action: Types):InitialStateCategoriesType => {
  const {type, payload, error} = action

  switch (type) {
    case LOAD_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        entities: arrToMap(payload),
        loading: false,
        loaded: true,
      }
    case LOAD_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      }
    default:
      return state
  }
}


export { categoriesReducer }
