import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, Link} from "react-router-dom"
import {listOrders} from "../../redux/actions/orderListActions"
import Loader from "../loader"

const OrderList = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const orderList = useSelector(state => state.orderList)
    const {loading, error, orders} = orderList

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listOrders())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <div>
            <h1>orders</h1>
            {loading
                ? <Loader/>
                : error
                    ? <p>{error}</p>
                    : (
                        <table className="table-sm">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.user && order.user.name}</td>
                                    <td>{order.created_at.substring(0, 10)}</td>
                                    <td>{order.total_price}</td>
                                    <td>{order.is_paid ? (
                                        order.paid_at.substring(0, 10)
                                    ) : (
                                        <i className="fas fa-check">Нет</i>
                                    )}
                                    </td>
                                    <td>{order.is_delivered ? (
                                        order.delivered_at.substring(0, 10)
                                    ) : (
                                        <i className="fas fa-check">Нет</i>
                                    )}
                                    </td>
                                    <td>
                                        <Link to={`/order/${order.id}/edit`}>
                                            <button className="btn-sm">
                                                Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
        </div>
    )
}

export default OrderList