import axios from 'axios'
import { Dispatch } from "redux"

import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST,
    LOAD_PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DECREMENT, PRODUCT_INCREMENT,
    PRODUCT_REMOVE,
} from "../../constants/productConstants"
import {
    ProductDecrementType,
    ProductDetailsTypes,
    ProductIncrementType, ProductRemoveType
} from "../types"


const fetchProductDetail = (category_slug: string, product_slug: string) => async (dispatch: Dispatch<ProductDetailsTypes>) => {
    try {
        dispatch({type: LOAD_PRODUCT_DETAILS_REQUEST, product_slug })
        const {data} = await axios.get(`/api/categories/${category_slug}/${product_slug}`)

        dispatch({type: LOAD_PRODUCT_DETAILS_SUCCESS, payload: data, product_slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCT_DETAILS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
            product_slug
        })
    }
}



export { fetchProductDetail}


