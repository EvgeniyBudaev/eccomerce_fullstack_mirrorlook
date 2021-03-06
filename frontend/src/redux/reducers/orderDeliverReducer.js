import {
    ORDER_DELIVER_FAILURE,
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_RESET,
    ORDER_DELIVER_SUCCESS
} from "../../constants/orderConstants"

export const orderDeliverReducer = (state= {}, action) => {
  switch(action.type) {
    case ORDER_DELIVER_REQUEST:
      return {
        loading: true
      }

    case ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true
      }

    case ORDER_DELIVER_FAILURE:
      return {
        loading: false,
        error: action.payload
      }

    case ORDER_DELIVER_RESET:
      return {}

    default:
      return state
  }
}