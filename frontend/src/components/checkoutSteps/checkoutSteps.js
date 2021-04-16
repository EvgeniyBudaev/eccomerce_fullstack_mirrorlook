import React from 'react'
import {Link} from 'react-router-dom'
import {ROUTES} from "../../routes"

import styles from './checkoutSteps.module.scss'


const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <>
            <nav>
                <div className="nav__item">
                    {step1 ? (
                        <Link to={ROUTES.LOGIN}>
                            Login
                        </Link>
                    ) : (
                        <Link to={ROUTES.LOGIN} className={styles.disabled_link}>
                            Login
                        </Link>
                    )}
                </div>

                <div className="nav__item">
                    {step2 ? (
                        <Link to={ROUTES.SHIPPING}>
                            Доставка
                        </Link>
                    ) : (
                        <Link to={ROUTES.SHIPPING} className={styles.disabled_link}>
                            Доставка
                        </Link>
                    )}
                </div>

                <div className="nav__item">
                    {step3 ? (
                        <Link to={ROUTES.PAYMENT}>
                            Оплата
                        </Link>
                    ) : (
                        <Link to={ROUTES.PAYMENT} className={styles.disabled_link}>
                            Оплата
                        </Link>
                    )}
                </div>

                <div className="nav__item">
                    {step4 ? (
                        <Link to={ROUTES.PLACE_ORDER}>
                            Разместить заказ
                        </Link>
                    ) : (
                        <Link to={ROUTES.PLACE_ORDER} className={styles.disabled_link}>
                            Разместить заказ
                        </Link>
                    )}
                </div>
            </nav>

        </>
    )
}

export default CheckoutSteps
