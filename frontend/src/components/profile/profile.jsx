import React, {useEffect, useState} from "react"
import {useHistory, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import {USER_UPDATE_PROFILE_RESET} from "../../constants/userConstants"
import {getUserDetails} from "../../redux/actions/userDetails"
import {listMyOrders} from "../../redux/actions/orderActions"
import Loader from "../loader"
import {updateUserProfile} from "../../redux/actions/userUpdateProfileActions"


const Profile = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const {loading: loadingOrders, error: errorOrders, orders} = orderListMy

    useEffect(() => {
        if (!userInfo) {
            history.push('/login/')
        } else {
            if (!user || !user.name || success) {
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(updateUserProfile({
                'id': user.id,
                'name': name,
                'email': email,
                'password': password
            }))
            setMessage('')
        }
    }

    return (
        <div>
            <div>
                <h2>Личный профиль</h2>
                {message && <p style={{color: 'red'}}>{message}</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                {loading && <Loader/>}

                <form onSubmit={submitHandler}>
                    <div className="form__group">
                        <label htmlFor="name_input">Name</label>
                        <input
                            id="name_input"
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="login_input">Email address</label>
                        <input
                            id="login_input"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="password_input">Password</label>
                        <input
                            id="password_input"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="confirm_password_input">Confirm
                            Password</label>
                        <input
                            id="confirm_password_input"
                            type="password"
                            placeholder="Enter Confirm Password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type={"submit"}>Обновить</button>
                </form>
            </div>

            <div>
                <h2>Мои заказы</h2>
                        {loadingOrders ? (
                            <Loader/>
                        ) : errorOrders ? (
                            <p>{errorOrders}</p>
                        ) : (
                            <table className='table-sm'>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Paid</th>
                                    <th>Delivered</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.created_at.substring(0, 10)}</td>
                                        <td>{order.total_price} руб.</td>
                                        <td>{order.is_paid ? order.paid_at : (
                                            <i className='fas fa-times'
                                               style={{color: 'red'}}>не оплачено</i>
                                        )}</td>
                                        <td>
                                            <Link
                                                to={`/order/${order.id}`}>
                                                <button>Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
            </div>
        </div>
    )
}

export default Profile

