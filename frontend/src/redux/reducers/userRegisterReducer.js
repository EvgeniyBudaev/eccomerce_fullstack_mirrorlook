import {
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../../constants/userConstants"


const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true}

        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case USER_REGISTER_FAILURE:
            return {loading: false, error: action.payload}

      case USER_LOGOUT:
        return {}

        default:
            return state
    }
}

export {userRegisterReducer}