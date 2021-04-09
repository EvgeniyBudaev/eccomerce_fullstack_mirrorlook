import axios from 'axios'

import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST, LOAD_PRODUCT_DETAILS_SUCCESS,
} from "../../constants/productConstants"


const fetchProductDetail = (category_slug, product_slug) => async (dispatch) => {
    try {
        dispatch({type: LOAD_PRODUCT_DETAILS_REQUEST })
        console.log('category_slug', category_slug)
        console.log('product_slug', product_slug)
        const response = await axios.get(`/api/categories/${category_slug}/${product_slug}`)
        console.log('response', response)
        const {data} = await axios.get(`/api/categories/${category_slug}/${product_slug}`)
        console.log('data action', data)

        dispatch({type: LOAD_PRODUCT_DETAILS_SUCCESS, payload: data, category_slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCT_DETAILS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}

export { fetchProductDetail }


