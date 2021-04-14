import {
  BASKET_ADD_ITEM,
  BASKET_REMOVE_ITEM
} from "../../constants/basketConstants"
import {addItemToCart, removeItemFromCart} from "../utils"


const basketReducer = (state = {entities: [], shippingAddress: {}}, action) => {
    switch (action.type) {
        case BASKET_ADD_ITEM:
            return {
                ...state,
                entities: addItemToCart(state.entities, action.payload)
            }

        case BASKET_REMOVE_ITEM:
            return {
                ...state,
                // entities: state.entities.filter(x => x.id !== action.payload)
                entities: removeItemFromCart(state.entities, action.payload)
            }

        default:
            return state
    }
}

export {basketReducer}