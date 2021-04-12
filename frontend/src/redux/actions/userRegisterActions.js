import axios from "axios"

import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../../constants/userConstants"


export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const {data} = await axios.post('/api/users/register/', {'name': name, 'email': email, 'password': password}, config)

    dispatch({type: USER_REGISTER_SUCCESS, payload: data})
    dispatch({type: USER_LOGIN_SUCCESS, payload: data})

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}