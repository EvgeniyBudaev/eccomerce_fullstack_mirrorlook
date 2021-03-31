import axios from "axios"
import { LOAD_CATEGORIES_REQUEST, LOAD_CATEGORIES_FAILURE, LOAD_CATEGORIES_SUCCESS } from "../../constants/categoriesConstants"




const fetchCategories = () => async (dispatch) => {
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