import {
  PRODUCT_DECREMENT,
  PRODUCT_INCREMENT, PRODUCT_REMOVE
} from "../../constants/productConstants"
import {BasketActionTypes} from "../types"


interface IBasketState {
  [payload: number]: number
}

// { [productId]: amount }
const basketReducer = (state: IBasketState = {}, action: BasketActionTypes): IBasketState => {
  const {type, payload} = action

  switch (type) {
    case PRODUCT_INCREMENT:
      return {...state, [payload.id]: (state[payload.id] || 0) + 1}
    case PRODUCT_DECREMENT:
      return {...state, [payload.id]: (state[payload.id] > 0 ? state[payload.id] - 1 : 0  || 0)}
    case PRODUCT_REMOVE:
      return {...state, [payload.id]: 0}
    default:
      return state
  }
}

export {basketReducer}
