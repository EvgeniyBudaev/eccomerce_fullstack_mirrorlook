import {
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    INCREMENT_ITEM_FROM_BASKET,
    DECREMENT_ITEM_FROM_BASKET
} from "../../constants/basketConstants"
import {addItemToCart, decrementItemToCart, removeItemFromCart} from "../utils"


const basketReducer = (state = {entities: [], shippingAddress: {}}, action) => {
    switch (action.type) {
        case BASKET_ADD_ITEM:
            return {
                ...state,
                entities: addItemToCart(state.entities, action.payload)
            }

        case INCREMENT_ITEM_FROM_BASKET:
            return {
                ...state,
                entities: addItemToCart(state.entities, action.payload)
            }

        case DECREMENT_ITEM_FROM_BASKET:
            return {
                ...state,
                entities: decrementItemToCart(state.entities, action.payload)
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