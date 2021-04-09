import axios from "axios"

import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants"


const fetchProducts = (categoryId, category_slug) => async (dispatch) => {
    try {
        dispatch({type: LOAD_PRODUCTS_REQUEST })
        const {data} = await axios.get(`/api/categories/${category_slug}/`)
        dispatch({type: LOAD_PRODUCTS_SUCCESS, payload: data, categoryId, category_slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCTS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}


export { fetchProducts }