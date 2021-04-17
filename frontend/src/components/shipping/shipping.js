import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router"

import Button from "../UI/button"
import {saveShippingAddress} from "../../redux/actions/cartActions"
import {ROUTES} from "../../routes"
import CheckoutSteps from "../checkoutSteps"


const Shipping = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {address, city, postalCode, country}
        dispatch(saveShippingAddress(data))
        history.push(ROUTES.PAYMENT)
    }

    return (
        <>
            <CheckoutSteps step1 step2 />
            <h2>Доставка</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="shipping_address">Адрес</label>
                <input
                    id="shipping_address"
                    type="text"
                    placeholder="Введите Ваш адрес"
                    value={address ? address : ''}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="shipping_city">Город</label>
                <input
                    id="shipping_city"
                    type="text"
                    placeholder="Введите название Вашего города"
                    value={city ? city : ''}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="shipping_postalCode">Почтовый индекс</label>
                <input
                    id="shipping_postalCode"
                    type="text"
                    placeholder="Введите Ваш почтовый индекс"
                    value={postalCode ? postalCode : ''}
                    onChange={(e) => setPostalCode(e.target.value)}
                />

                <label htmlFor="shipping_country">Страна</label>
                <input
                    id="shipping_country"
                    type="text"
                    placeholder="Страна"
                    value={country ? country : ''}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <Button type="submit" text="Продолжить" />
            </form>
        </>
    )
}

export default Shipping