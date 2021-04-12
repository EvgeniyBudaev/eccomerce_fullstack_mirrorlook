import {USER_DETAILS_RESET, USER_LOGOUT} from "../../constants/userConstants"


export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
}