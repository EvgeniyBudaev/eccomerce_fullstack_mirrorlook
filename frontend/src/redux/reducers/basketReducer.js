import {BASKET_ADD_ITEM} from "../../constants/basketConstants"


const basketReducer = (state={basketItems:[], shippingAddress: {}}, action) => {
  switch (action.type) {
    case BASKET_ADD_ITEM:
      const item = action.payload
      const existItem = state.basketItems.find(x => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          basketItems: state.basketItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, item]
        }
      }

    default:
      return state
  }
}

export {basketReducer}