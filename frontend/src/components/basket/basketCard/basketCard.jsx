import React from 'react'
import {connect, ConnectedProps, useDispatch} from 'react-redux'

import styles from './basketCard.module.scss'
import {removeItemFromBasket, addItemToBasket} from "../../../redux/actions/basketActions"

const mapDispatchToProps = dispatch => ({
    removeItemFromCartHandler: id => dispatch(removeItemFromBasket(id)),
    addItemToCartHandler: id => dispatch(addItemToBasket(id))
})

const connector = connect(null, mapDispatchToProps)


const BasketCard = (props) => {
  const {product, removeItemFromCartHandler, addItemToCartHandler} = props
  const {id, image, name, price, quantity} = product
  console.log('[basketCard][props]', props)

    // const dispatch =  useDispatch()
    // const removeItemFromCartHandler = (id) => {
    //     dispatch(removeItemFromBasket(id))
    // }

  return (
    <div className={styles.basketCard}>
      <div className={styles.images}>
        <img src={image} alt="images" />
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionArticle}>арт. VZ232S</p>
        <p className={styles.descriptionTitle}>{name}</p>
      </div>
      <div className={styles.unit}>
        <p className={styles.unitText}>Цена за ед.</p>
        <p className={styles.unitPrice}>{price} ₽</p>
      </div>
      <div className={styles.amountBox}>
        <button className={styles.button}  onClick={() => {}}>-</button>
        <div className={styles.amount}>
          <p className={styles.amountText}>Кол-во</p>
          <div className={styles.amountNumber}>{quantity}</div>
        </div>
        <button
            className={styles.button}
            onClick={() => addItemToCartHandler(product)}
        >+</button>
      </div>
      <div className={styles.total}>
        <p className={styles.totalPrice}>{quantity * price} ₽</p>
        <button
            className={styles.totalButton}
            onClick={() => removeItemFromCartHandler(id)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M14.3846 3.74765C14.3846 4.94919 13.4377 5.92311 12.2692 5.92311H9.73074C8.5622 5.92311 7.61536 4.94919 7.61536 3.74765V3.02165C7.61536 1.81927 8.5622 0.846191 9.73074 0.846191H12.2692C13.4377 0.846191 14.3846 1.81927 14.3846 3.02165V3.74765Z"
                stroke="#B0976A"
                strokeWidth="2.08"
                strokeMiterlimit="10"
              />
              <path
                d="M7.61533 8.46152V18.6154M17.7692 19.4615C17.7692 20.3957 17.011 21.1538 16.0769 21.1538H5.92302C4.98887 21.1538 4.23071 20.3957 4.23071 19.4615V5.0769H17.7692V19.4615ZM14.3846 8.46152V18.6154V8.46152ZM10.9999 8.46152V18.6154V8.46152Z"
                stroke="#B0976A"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M19.4615 5.07683V4.23068C19.4615 3.76444 19.0816 3.38452 18.6153 3.38452H3.38457C2.91834 3.38452 2.53841 3.76444 2.53841 4.23068V5.07683H1.69226V6.76914H3.38457H18.6153H20.3076V5.07683H19.4615Z"
                fill="#B0976A"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Удалить</p>
        </button>
      </div>
    </div>
  )
}

export default connector(BasketCard)
