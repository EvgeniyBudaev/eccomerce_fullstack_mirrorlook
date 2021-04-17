import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router"
import {Link} from 'react-router-dom'

import CheckoutSteps from "../checkoutSteps"
import {ROUTES} from "../../routes"
import Button from "../UI/button"


const PlaceOrder = () => {
    const cart = useSelector(state => state.basket)
    cart.itemsPrice = cart.entities.reduce((acc, item) => acc + item.price * item.quantity, 0)
    cart.shippingPrice = (cart.itemsPrice > 50000 ? 0 : 300)
    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice)

    const placeOrder = () => {}

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
                        {cart.shippingAddress.postalCode}
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
                    <div>Общая сумма заказа:</div>
                    <div>{cart.totalPrice} руб.</div>
                </div>
                <div className="listGroup__item">
                    <Button type="button" text="Разместить заказ" onClick={placeOrder} disabled={cart.entities === 0}></Button>
                </div>
            </div>
        </>
    )
}

export default PlaceOrder
