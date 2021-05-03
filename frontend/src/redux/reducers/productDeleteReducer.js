import {
    PRODUCT_DELETE_FAILURE,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS
} from "../../constants/productConstants"


export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {loading: true}

        case PRODUCT_DELETE_SUCCESS:
            return {loading: false, success: true}

        case PRODUCT_DELETE_FAILURE:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}