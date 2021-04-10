import axios from "axios"
import {Dispatch} from "redux"

import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants"
import {ProductsTypes} from "../types"


const fetchProducts = (category_slug: string) => async (dispatch: Dispatch<ProductsTypes>) => {
    try {
        dispatch({type: LOAD_PRODUCTS_REQUEST, category_slug })
        const {data} = await axios.get(`/api/categories/${category_slug}/`)
        dispatch({type: LOAD_PRODUCTS_SUCCESS, payload: data, category_slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCTS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
            category_slug
        })
    }
}


export { fetchProducts }