import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router"
import {Link} from 'react-router-dom'

import CheckoutSteps from "../checkoutSteps"
import {ROUTES} from "../../routes"
import Button from "../UI/button"
import {createOrder} from "../../redux/actions/orderActions"
import {ORDER_CREATE_RESET} from "../../constants/orderConstants"


const PlaceOrder = () => {
    const orderCreate = useSelector(state => state.orderCreate)
    const {order, error, success} = orderCreate
    const dispatch = useDispatch()
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    console.log('cart', cart)

    cart.itemsPrice = cart.entities.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 50000 ? 0 : 300).toFixed(2)
    cart.taxPrice = (cart.itemsPrice / 120 * 20).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice)).toFixed(2)

    if (!cart.paymentMethod) {
        history.push('/payment')
    }

    useEffect(() => {
        if (success) {
            history.push(`/order/${order.id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.entities,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <h2>Размещение заказа</h2>
            <div className="listGroup">
                <div className="listGroup__item">
                    <h3>Доставка</h3>
                    <p>
                        <strong>Доставка:</strong>
                        {cart.shippingAddress.address}, {cart.shippingAddress.city}
                        {'   '}
                        {cart.shippingAddress.postalCode},
                        {' '}
                        {cart.shippingAddress.country},
                    </p>
                </div>

                <div className="listGroup__item">
                    <h3>Способ оплаты</h3>
                    <p>
                        <strong>Способ оплаты:</strong>
                        {cart.paymentMethod}
                    </p>
                </div>

                <div className="listGroup__item">
                    <h3>Товары для заказа</h3>
                    <div>
                        <strong>Товары для заказа:</strong>
                        {cart.entities.length === 0 ? <p>Ваша корзина пуста</p> : (
                            <div className="listGroup">
                                {cart.entities.map((item) => (
                                    <div className="listGroup__item" key={item.id}>
                                        <img src={item.image} alt={item.name} />
                                        <Link to={ROUTES.CATEGORIES + item.category_slug + '/' + item.product_slug}>
                                            {item.name}
                                        </Link>
                                        {item.quantity} X {item.price} руб. = {(item.quantity * item.price).toFixed(2)} руб.
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
                    <div>{cart.itemsPrice} руб.</div>
                </div>
                <div className="listGroup__item">
                    <div>Доставка:</div>
                    <div>{cart.shippingPrice} руб.</div>
                </div>
                <div className="listGroup__item">
                    <div>НДС:</div>
                    <div>{cart.taxPrice} руб.</div>
                </div>
                <div className="listGroup__item">
                    <div>Общая сумма заказа:</div>
                    <div>{cart.totalPrice} руб.</div>
                </div>
                <div className="listGroup__item">
                    {error && <p>{error}</p>}
                </div>
                <div className="listGroup__item">
                    <Button
                        type="button"
                        text="Разместить заказ"
                        onClick={placeOrder}
                        disabled={cart.entities === 0}
                    >
                    </Button>
                </div>
            </div>
        </>
    )
}

export default PlaceOrder
