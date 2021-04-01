import { arrToMap } from '../../utilities/utils'

import { LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAILURE } from "../../constants/categoriesConstants"


const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  response: null,
}


const categoriesReducer = (state = initialState, action) => {
  const {type, payload, error} = action
  // console.log('reducer action', action)

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
