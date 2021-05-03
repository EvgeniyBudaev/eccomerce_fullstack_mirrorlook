import axios from "axios"
import {
    PRODUCT_DELETE_FAILURE,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS
} from "../../constants/productConstants"


export const deleteProduct = (category_slug, product_slug) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST
    })

    const {
      userLogin: {userInfo},
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const {data} = await axios.delete(`/api/categories/${category_slug}/delete/${product_slug}/`, config)

    dispatch({type: PRODUCT_DELETE_SUCCESS})

  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAILURE,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}