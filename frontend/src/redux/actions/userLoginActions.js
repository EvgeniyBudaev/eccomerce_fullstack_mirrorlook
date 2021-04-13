import axios from 'axios'

import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../../constants/userConstants"


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const {data} = await axios.post('/api/users/login/', {'username': email, 'password': password}, config)
    console.log('[userActions][data] ', data)

    dispatch({type: USER_LOGIN_SUCCESS, payload: data})

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response && error.response.data.detail
      ? error.response.data.detail
        : error.message
    })
  }
}

