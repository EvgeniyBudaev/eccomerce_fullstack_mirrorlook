import axios from "axios";
import {
    ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS
} from "../../constants/orderConstants"

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST
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

    const {data} = await axios.get(`/api/orders/`, config)

    dispatch({type: ORDER_LIST_SUCCESS, payload: data})

  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}