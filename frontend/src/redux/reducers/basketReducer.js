import {BASKET_ADD_ITEM} from "../../constants/basketConstants"
import {addItemToCart} from "../utils"


const basketReducer = (state={entities:[], shippingAddress: {}}, action) => {
  switch (action.type) {
    case BASKET_ADD_ITEM:
      return {
        ...state,
        entities: addItemToCart(state.entities, action.payload)
      }

    default:
      return state
  }
}

export {basketReducer}