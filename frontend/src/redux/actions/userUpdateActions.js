import axios from "axios";
import {
    USER_DETAILS_SUCCESS,
    USER_UPDATE_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_RESET,
    USER_UPDATE_SUCCESS
} from "../../constants/userConstants"

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST
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

    const {data} = await axios.put(`/api/users/update/${user._id}/`, user, config)

    dispatch({type: USER_UPDATE_SUCCESS})

    dispatch({type: USER_DETAILS_SUCCESS, payload: data})

  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAILURE,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}