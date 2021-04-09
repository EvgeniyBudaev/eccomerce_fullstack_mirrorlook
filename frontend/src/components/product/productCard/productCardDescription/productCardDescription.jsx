import React from 'react'
import {Link} from 'react-router-dom'

import styles from './productCardDescription.module.scss'
import iconFavorite from '../../../../assets/images/icon-favorite.svg'
import wallet from '../../../../assets/images/wallet.png'
import visa from '../../../../assets/images/visa.png'
import master from '../../../../assets/images/master.png'
import {ROUTES} from "../../../../routes"


const ProductCardDescription = ({description}) => {
  return (
    <div className={styles.description}>
      <div className={styles.descriptionText}>
        <p>{description}</p>
      </div>
      <div className={styles.descriptionInfo}>
        <div className={styles.descriptionInfoFavorites}>
          <Link to={ROUTES.HOME}>
            <img src={iconFavorite} alt="favorite" />
            <span>В избранное</span>
          </Link>
        </div>
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
    </div>
  )
}

export default ProductCardDescription
