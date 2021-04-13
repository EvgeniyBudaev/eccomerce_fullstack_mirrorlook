export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

// basketReducer

//     const existingCartItem = state.cartItems.find(x => x.product === item.product)
//     if (existingCartItem) {
//         return {
//           ...state,
//           basketItems: state.cartItems.map(x => x.product === existingCartItem.product ? item : x)
//         }
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item]
//         }
//       }





// const item = action.payload
//       const existItem = state.cartItems.find(x => x.product === item.product)
//       if (existItem) {
//         return {
//           ...state,
//           basketItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
//         }
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item]
//         }
//       }