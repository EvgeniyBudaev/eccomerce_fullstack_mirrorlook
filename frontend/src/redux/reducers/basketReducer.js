import {
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM,
    INCREMENT_ITEM_FROM_BASKET,
    DECREMENT_ITEM_FROM_BASKET,
    CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD
} from "../../constants/basketConstants"
import {addItemToCart, decrementItemToCart, removeItemFromCart} from "../utils"

const initialState = {
    entities: [],
    shippingAddress: {}
}

const basketReducer = (state = initialState, action) => {
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
                entities: removeItemFromCart(state.entities, action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }

        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }

        default:
            return state
    }
}

export {basketReducer}