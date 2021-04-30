import axios from "axios"
import {
    USER_DELETE_FAILURE,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS
} from "../../constants/userConstants"

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST
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

    const {data} = await axios.delete(`/api/users/delete/${id}`, config)

    dispatch({type: USER_DELETE_SUCCESS, payload: data})

  } catch (error) {
    dispatch({
      type: USER_DELETE_FAILURE,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}