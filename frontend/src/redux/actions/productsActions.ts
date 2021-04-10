import axios from "axios"
import {Dispatch} from "redux"

import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants"
import {ProductsTypes} from "../types"


const fetchProducts = (categoryId: number, category_slug: string) => async (dispatch: Dispatch<ProductsTypes>) => {
    try {
        dispatch({type: LOAD_PRODUCTS_REQUEST, categoryId })
        const {data} = await axios.get(`/api/categories/${category_slug}/`)
        dispatch({type: LOAD_PRODUCTS_SUCCESS, payload: data, categoryId, category_slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCTS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
            categoryId
        })
    }
}


export { fetchProducts }