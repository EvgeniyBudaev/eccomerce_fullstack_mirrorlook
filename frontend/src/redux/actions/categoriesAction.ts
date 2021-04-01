import axios from "axios"
import {Dispatch} from "redux"

import { createAsyncAction } from 'typesafe-actions'

import { LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_FAILURE, LOAD_CATEGORIES_SUCCESS } from "../../constants/categoriesConstants"
import {AppThunk, CategoriesTypes, GetStateType, ProductByIdThunk} from "../types";


const fetchCategories = ():AppThunk => async (dispatch, getState: GetStateType) => {
    try {
        dispatch({type: LOAD_CATEGORIES_REQUEST})
        const {data} = await axios.get('/api/categories/')
        console.log('dataAction', data)
        dispatch({type: LOAD_CATEGORIES_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: LOAD_CATEGORIES_FAILURE, payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message
        })
    }
}


export { fetchCategories }