import axios from 'axios'

import {
    INCREMENT_ITEM_FROM_BASKET,
    BASKET_ADD_ITEM,
    BASKET_REMOVE_ITEM, DECREMENT_ITEM_FROM_BASKET
} from "../../constants/basketConstants"


export const addToBasket = (category_slug, product_slug) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/categories/${category_slug}/${product_slug}`)

    dispatch({
    type: BASKET_ADD_ITEM,
    payload : {
      id: data.id,
      name: data.name,
      image:data.image,
      price: data.price,
      count_in_stock: data.count_in_stock
    }
  })

  // localStorage.setItem('basketItems', JSON.stringify(getState().cart.cartItems))
}


export const incrementItemToBasket = (product) => (dispatch, getState) => {
  dispatch({
    type: INCREMENT_ITEM_FROM_BASKET,
    payload: product,
  })
  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const decrementItemToBasket = (product) => (dispatch, getState) => {
  dispatch({
    type: DECREMENT_ITEM_FROM_BASKET,
    payload: product,
  })
  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeItemFromBasket = (id) => (dispatch, getState) => {
    console.log('action remove by id', id)
  dispatch({
    type: BASKET_REMOVE_ITEM,
    payload: id,
  })
  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}