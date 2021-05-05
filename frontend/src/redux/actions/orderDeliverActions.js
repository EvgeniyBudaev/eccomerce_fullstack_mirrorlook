import axios from "axios"
import {
    ORDER_DELIVER_FAILURE,
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_SUCCESS
} from "../../constants/orderConstants"

export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DELIVER_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/orders/${order.id}/deliver/`,
            {},
            config
        )

        dispatch({type: ORDER_DELIVER_SUCCESS, payload: data})

    } catch (error) {
        dispatch({
            type: ORDER_DELIVER_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}