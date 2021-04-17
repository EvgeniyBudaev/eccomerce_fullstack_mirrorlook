import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router"

import {ROUTES} from "../../../routes"
import CheckoutSteps from "../../checkoutSteps"
import Button from "../../UI/button"
import {savePaymentMethod} from "../../../redux/actions/cartActions"


const PaymentPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history.push(ROUTES.SHIPPING)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push(ROUTES.PLACE_ORDER)
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 />
            <h2>Выбор способа оплаты</h2>
            <form onSubmit={submitHandler}>
                <div className="form__group">
                    <label htmlFor="paypal">PayPal or Credit Card</label>
                    <input
                        id="paypal"
                        type="radio"
                        name="paymentMethod"
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                </div>
                <Button type="submit" text="Продолжить" />
            </form>
        </>
    )
}

export default PaymentPage