import {
    ORDER_DETAILS_FAILURE,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS
} from "../../constants/orderConstants"

const initialState = {
    loading: true,
    entities: [],
    shippingAddress: {}
}

export const orderDetailsReducer = (state= initialState, action) => {
  switch(action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload
      }

    case ORDER_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}