import React from 'react'
import {Link} from 'react-router-dom'

import styles from './productCardDelivery.module.scss'
import wallet from '../../../../../../assets/images/wallet.png'
import visa from '../../../../../../assets/images/visa.png'
import master from '../../../../../../assets/images/master.png'
import {ROUTES} from '../../../../../../routes'

const ProductCardDelivery = () => {
  return (
    <div>
      <ul className={styles.descriptionInfoList}>
        <li>
          Доставка в:{' '}
          <span className={styles.descriptionCity}>г. Москва</span>
        </li>
        <li>
          Цена и сроки: <span>1-2 дня БЕСПЛАТНО</span>
        </li>
        <li>
          Оплата: <span>При получении</span>
        </li>
        <li className={styles.descriptionPay}>
          <Link to={ROUTES.HOME}>
            <img src={wallet} alt="pay" />
          </Link>
          <Link to={ROUTES.HOME}>
            <img src={visa} alt="pay" />
          </Link>
          <Link to={ROUTES.HOME}>
            <img src={master} alt="pay" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductCardDelivery
