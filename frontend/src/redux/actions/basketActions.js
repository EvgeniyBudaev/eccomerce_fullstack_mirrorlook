import axios from 'axios'

import {BASKET_ADD_ITEM} from "../../constants/basketConstants"


export const addToBasket = (category_slug, product_slug, qty= 0) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/categories/${category_slug}/${product_slug}`)

    dispatch({
    type: BASKET_ADD_ITEM,
    payload : {
      product: data.id,
      name: data.name,
      image:data.image,
      price: data.price,
      count_in_stock: data.count_in_stock,
        qty
    }
  })

  // localStorage.setItem('basketItems', JSON.stringify(getState().cart.cartItems))
}