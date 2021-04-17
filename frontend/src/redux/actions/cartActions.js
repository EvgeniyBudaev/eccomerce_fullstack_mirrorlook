import axios from 'axios'

import {
    INCREMENT_ITEM_FROM_CART,
    CART_ADD_ITEM,
    CART_REMOVE_ITEM, DECREMENT_ITEM_FROM_CART, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD
} from "../../constants/cartConstants"


export const addToBasket = (category_slug, product_slug) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/categories/${category_slug}/${product_slug}`)

    dispatch({
    type: CART_ADD_ITEM,
        payload: {
            id: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            count_in_stock: data.count_in_stock,
            category_slug: category_slug,
            product_slug: product_slug
        }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.entities))
}


export const incrementItemToBasket = (product) => (dispatch, getState) => {
  dispatch({
    type: INCREMENT_ITEM_FROM_CART,
    payload: product,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.entities))
}


export const decrementItemToBasket = (product) => (dispatch, getState) => {
  dispatch({
    type: DECREMENT_ITEM_FROM_CART,
    payload: product,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.entities))
}


export const removeItemFromBasket = (id) => (dispatch, getState) => {
    console.log('action remove by id', id)
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.entities))
}


export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}


export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}