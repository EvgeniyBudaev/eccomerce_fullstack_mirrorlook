import axios from "axios"

import {
    USER_DETAILS_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS
} from "../../constants/userConstants"


export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST
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

    const {data} = await axios.get(`/api/users/${id}/`, config)

    dispatch({type: USER_DETAILS_SUCCESS, payload: data})

  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}