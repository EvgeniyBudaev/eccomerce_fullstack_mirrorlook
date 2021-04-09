import axios from "axios"
import {Dispatch} from "redux"

import { LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_FAILURE, LOAD_CATEGORIES_SUCCESS } from "../../constants/categoriesConstants"
import { CategoriesTypes } from "../types"



const fetchCategories = () => async (dispatch: Dispatch<CategoriesTypes>) => {
    try {
        dispatch({type: LOAD_CATEGORIES_REQUEST})
        const {data} = await axios.get('/api/categories/')
        dispatch({type: LOAD_CATEGORIES_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: LOAD_CATEGORIES_FAILURE, error: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}


export { fetchCategories }