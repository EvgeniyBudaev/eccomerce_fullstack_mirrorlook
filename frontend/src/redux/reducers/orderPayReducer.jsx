import {
  ORDER_PAY_FAILURE,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS
} from "../../constants/orderConstants"


export const orderPayReducer = (state={}, action) => {
  switch(action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true
      }

    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true
      }

    case ORDER_PAY_FAILURE:
      return {
        loading: false,
        error: action.payload
      }

    case ORDER_PAY_RESET:
      return {}

    default:
      return state
  }
}