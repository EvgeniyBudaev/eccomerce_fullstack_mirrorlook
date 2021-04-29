import {
  USER_DETAILS_RESET,
  USER_LIST_RESET,
  USER_LOGOUT
} from "../../constants/userConstants"
import {ORDER_LIST_MY_RESET} from "../../constants/orderConstants"


export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
  dispatch({ type: ORDER_LIST_MY_RESET })
  dispatch({ type: USER_LIST_RESET })
}