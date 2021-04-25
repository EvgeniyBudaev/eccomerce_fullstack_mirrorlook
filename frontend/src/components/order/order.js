import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {PayPalButton} from 'react-paypal-button-v2'

import {getOrderDetails, payOrder} from "../../redux/actions/orderActions"
import {ORDER_PAY_RESET} from "../../constants/orderConstants"
import {ROUTES} from "../../routes"
import Loader from "../loader"


const Order = () => {
    const match = useRouteMatch()
    const orderId = match.params.id
    const dispatch = useDispatch()

    const [sdkReady, setSdkReady] = useState(false)
    const [loadState, setLoadState] = useState({ loading: false, loaded: false })

    const orderDetails = useSelector(state => state.orderDetails)
    const {order, error, loading} = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const {loading: loadingPay, success: successPay} = orderPay

    if (!loading && !error) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    }


    const addPayPalScript = () => {
        setLoadState({ loading: true, loaded: false });
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AfxnbxPjJW864FxtAPNyPRGcu6r6RT2lW8WAnJgh2nRxjC3S3BY-HYUMKMwZDdeYeYmkBgT3dT4lKH56'
        script.async = true

        script.addEventListener("load", () =>
        setLoadState({ loading: false, loaded: true }))

        script.onload = () => {setSdkReady(true)}
        document.body.appendChild(script)
    }

    useEffect(() => {
        if (!order || successPay || order.id !== Number(orderId)) {
            dispatch({type: ORDER_PAY_RESET})
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
    }, [dispatch, order, orderId, successPay, loadState])

    useEffect(() => {
        if (!order || order.id !== Number(orderId)) {
            dispatch(getOrderDetails(orderId))
        }
    }, [dispatch, order, orderId])

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
    }


    return loading ? (
        <Loader/>
    ) : error ? (
        <p>{error}</p>
    ) : (
        <>
            <h2>Ваш заказ №{order.id}</h2>
            <div className="listGroup">
                <div className="listGroup__item">
                    <h3>Доставка</h3>
                    <p><strong>Имя: </strong> {order.user.name}</p>
                    <p><strong>Email: </strong><a
                        href={`mailto:${order.user.email}`}>{order.user.email}</a>
                    </p>
                    <p>
                        <strong>Доставка:</strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city}
                        {'   '}
                        {order.shippingAddress.postalCode},
                        {' '}
                        {order.shippingAddress.country},
                    </p>
                    {order.is_delivered ? (
                        <p>Доставлено {order.delivered_at}</p>
                    ) : (
                        <p>Не доставлено</p>
                    )}
                </div>

                <div className="listGroup__item">
                    <h3>Способ оплаты</h3>
                    <p>
                        <strong>Способ оплаты:</strong>
                        {order.paymentMethod}
                    </p>
                    {order.is_paid ? (
                        <p>Оплачено {order.paid_at}</p>
                    ) : (
                        <p>Не оплачено</p>
                    )}
                </div>

                <div className="listGroup__item">
                    <h3>Заказанные товары</h3>
                    <div>
                        <strong>Товары для заказа:</strong>
                        {order.orderItems.length === 0 ? <p>Ваш заказ пуст</p> : (
                            <div className="listGroup">
                                {order.orderItems.map((item) => (
                                    <div className="listGroup__item"
                                         key={item.id}>
                                        <img src={item.image} alt={item.name}/>
                                        <Link
                                            to={ROUTES.CATEGORIES + item.category_slug + '/' + item.product_slug}>
                                            {item.name}
                                        </Link>
                                        {item.quantity} X {item.price} руб.
                                        = {item.quantity * item.price} руб.
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="listGroup">
                <div className="listGroup__item">
                    <h3>Сумма заказа</h3>
                </div>
                <div className="listGroup__item">
                    <div>Товар:</div>
                    <div>{Math.ceil(order.itemsPrice)} руб.</div>
                </div>
                <div className="listGroup__item">
                    <div>Доставка:</div>
                    <div>{Math.ceil(order.shipping_price)} руб.</div>
                </div>
                <div className="listGroup__item">
                    <div>НДС:</div>
                    <div>{order.tax_price} руб.</div>
                </div>
                <div className="listGroup__item">
                    <div>Общая сумма заказа:</div>
                    <div>{Math.ceil(order.total_price)} руб.</div>
                </div>

                {!order.is_paid && (
                    <div className="listGroup__item">
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                          <PayPalButton amount={order.total_price}
                                        onSuccess={successPaymentHandler}/>
                      )}
                    </div>
                )}

            </div>
        </>
    )

}

export default Order