import {
  PRODUCT_DECREMENT,
  PRODUCT_INCREMENT, PRODUCT_REMOVE
} from "../../constants/productConstants"


// { [productId]; amount }
const basketReducer = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case PRODUCT_INCREMENT:
      return {...state, [payload.product_slug]: (state[payload.product_slug] || 0) + 1}
    case PRODUCT_DECREMENT:
      return {...state, [payload.product_slug]: (state[payload.product_slug] > 0 ? state[payload.product_slug] - 1 : 0  || 0)}
    case PRODUCT_REMOVE:
      return {...state, [payload.product_slug]: 0}
    default:
      return state
  }
}

export {basketReducer}
