import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    INCREMENT_ITEM_FROM_CART,
    DECREMENT_ITEM_FROM_CART,
    CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_CLEAR_ITEMS
} from "../../constants/cartConstants"
import {addItemToCart, decrementItemToCart, removeItemFromCart} from "../utils"

const initialState = {
    entities: [],
    shippingAddress: {}
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return {
                ...state,
                entities: addItemToCart(state.entities, action.payload)
            }

        case INCREMENT_ITEM_FROM_CART:
            return {
                ...state,
                entities: addItemToCart(state.entities, action.payload)
            }

        case DECREMENT_ITEM_FROM_CART:
            return {
                ...state,
                entities: decrementItemToCart(state.entities, action.payload)
            }

        case CART_REMOVE_ITEM:
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

        case CART_CLEAR_ITEMS:
            return {
                ...state,
                entities: []
            }

        default:
            return state
    }
}

export {cartReducer}