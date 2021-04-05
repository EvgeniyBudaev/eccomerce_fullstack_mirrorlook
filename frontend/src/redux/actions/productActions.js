import axios from 'axios'

import {
    LOAD_PRODUCT_DETAILS_FAILURE,
    LOAD_PRODUCT_DETAILS_REQUEST, LOAD_PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../../constants/productConstants"
import {LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS} from "../../constants/productsConstants";


const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/')
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}


const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}


const fetchProductDetail = (categoryId, category_slug, product_slug) => async (dispatch) => {
    try {
        dispatch({type: LOAD_PRODUCT_DETAILS_REQUEST })
        console.log('category_slug', category_slug)
        console.log('product_slug', product_slug)
        const response = await axios.get(`/api/categories/${category_slug}/${product_slug}`)
        console.log('response', response)
        const {data} = await axios.get(`/api/categories/${category_slug}/`)
        console.log('data action', data)
        console.log('slug', category_slug)
        console.log('categoryId',  categoryId)
        dispatch({type: LOAD_PRODUCT_DETAILS_SUCCESS, payload: data, categoryId, category_slug})
    } catch (error) {
        dispatch({type: LOAD_PRODUCT_DETAILS_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}

export { listProducts, listProductDetails, fetchProductDetail }


