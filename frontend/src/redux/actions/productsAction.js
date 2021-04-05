import axios from "axios"

import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants"



const fetchProducts = (categoryId, slug) => async (dispatch) => {
    try {
        dispatch({type: LOAD_PRODUCTS_REQUEST })
        const {data} = await axios.get(`/api/categories/${slug}/`)
        console.log('data action', data)
        console.log('slug', slug)
        console.log('categoryId',  categoryId)
        dispatch({type: LOAD_PRODUCTS_SUCCESS, payload: data, categoryId, slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCTS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}


export { fetchProducts }