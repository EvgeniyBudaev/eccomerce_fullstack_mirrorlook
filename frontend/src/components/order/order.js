import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch, useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {PayPalButton} from 'react-paypal-button-v2'

import {getOrderDetails, payOrder} from "../../redux/actions/orderActions"
import {
    ORDER_DELIVER_RESET,
    ORDER_PAY_RESET
} from "../../constants/orderConstants"
import {ROUTES} from "../../routes"
import Loader from "../loader"
import {deliverOrder} from "../../redux/actions/orderDeliverActions"


const Order = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const orderId = match.params.id
    const dispatch = useDispatch()

    const [sdkReady, setSdkReady] = useState(false)
    const [loadState, setLoadState] = useState({loading: false, loaded: false})

    const orderDetails = useSelector(state => state.orderDetails)
    const {order, error, loading} = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const {loading: loadingPay, success: successPay} = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    const {loading: loadingDeliver, success: successDeliver} = orderDeliver

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    }


    const addPayPalScript = () => {
        setLoadState({loading: true, loaded: false});
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AfxnbxPjJW864FxtAPNyPRGcu6r6RT2lW8WAnJgh2nRxjC3S3BY-HYUMKMwZDdeYeYmkBgT3dT4lKH56'
        script.async = true

        script.addEventListener("load", () =>
            setLoadState({loading: false, loaded: true}))

        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }

        if (!order || successPay || order.id !== Number(orderId) || successDeliver) {
            dispatch({type: ORDER_PAY_RESET})
            dispatch({type: ORDER_DELIVER_RESET})
            dispatch(getOrderDetails(orderId))
        } else if (!order.is_paid) {
            if (!window.paypal) {
                if (!loadState.loading && !loadState.loaded) {
                    addPayPalScript()
                }
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, order, orderId, successPay, loadState, successDeliver])

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
    }

    const deliverHandler = () => {
        dispatch(deliverOrder(order))
    }

    return loading ? (
        <Loader/>
    ) : error ? (
        <p>{error}</p>
    ) : (
        <>
            <h2>?????? ?????????? ???{order.id}</h2>
            <div className="listGroup">
                <div className="listGroup__item">
                    <h3>????????????????</h3>
                    <p><strong>??????: </strong> {order.user.name}</p>
                    <p><strong>Email: </strong><a
                        href={`mailto:${order.user.email}`}>{order.user.email}</a>
                    </p>
                    <p>
                        <strong>????????????????:</strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city}
                        {'   '}
                        {order.shippingAddress.postalCode},
                        {' '}
                        {order.shippingAddress.country},
                    </p>
                    {order.is_delivered ? (
                        <p>???????????????????? {order.delivered_at}</p>
                    ) : (
                        <p>???? ????????????????????</p>
                    )}
                </div>

                <div className="listGroup__item">
                    <h3>???????????? ????????????</h3>
                    <p>
                        <strong>???????????? ????????????:</strong>
                        {order.paymentMethod}
                    </p>
                    {order.is_paid ? (
                        <p>???????????????? {order.paid_at}</p>
                    ) : (
                        <p>???? ????????????????</p>
                    )}
                </div>

                <div className="listGroup__item">
                    <h3>???????????????????? ????????????</h3>
                    <div>
                        <strong>???????????? ?????? ????????????:</strong>
                        {order.orderItems.length === 0 ?
                            <p>?????? ?????????? ????????</p> : (
                                <div className="listGroup">
                                    {order.orderItems.map((item) => (
                                        <div className="listGroup__item"
                                             key={item.id}>
                                            <img src={item.image}
                                                 alt={item.name}/>
                                            <Link
                                                to={ROUTES.CATEGORIES + item.category_slug + '/' + item.product_slug}>
                                                {item.name}
                                            </Link>
                                            {item.quantity} X {item.price} ??????.
                                            = {item.quantity * item.price} ??????.
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            </div>

            <div className="listGroup">
                <div className="listGroup__item">
                    <h3>?????????? ????????????</h3>
                </div>
                <div className="listGroup__item">
                    <div>??????????:</div>
                    <div>{Math.ceil(order.itemsPrice)} ??????.</div>
                </div>
                <div className="listGroup__item">
                    <div>????????????????:</div>
                    <div>{Math.ceil(order.shipping_price)} ??????.</div>
                </div>
                <div className="listGroup__item">
                    <div>??????:</div>
                    <div>{order.tax_price} ??????.</div>
                </div>
                <div className="listGroup__item">
                    <div>?????????? ?????????? ????????????:</div>
                    <div>{Math.ceil(order.total_price)} ??????.</div>
                </div>

                {!order.is_paid && (
                    <div className="listGroup__item">
                        {loadingPay && <Loader/>}
                        {!sdkReady ? (
                            <Loader/>
                        ) : (
                            <PayPalButton amount={order.total_price}
                                          onSuccess={successPaymentHandler}/>
                        )}
                    </div>
                )}
            </div>

            {loadingDeliver && <Loader />}

            {userInfo && userInfo.isAdmin && order.is_paid && !order.is_delivered && (
                <div className="listGroup__item">
                  <button
                      type='button'
                      className='btn btn-blick'
                      onClick={deliverHandler}
                  >
                    Mark As Deliver
                  </button>
                </div>
            )}
        </>
    )

}

export default Order