import React from 'react'
import {Link} from 'react-router-dom'
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import ClassNames from 'classnames'

import styles from './card.module.scss'
import {ROUTES} from '../../routes'
import {productSelector} from "../../redux/selectors"
// import {
//   addToBasketType,
//   IProduct,
//   ProductIncrementType
// } from "../../redux/types"

import {addToBasket} from "../../redux/actions/basketActions"



// interface ICard {
//   product: IProduct,
//   category_slug: string
// }
//
// export type CardTypes = ICard & DispatchPropsType

const connector = connect(null, {addToBasket})
// type PropsFromRedux = ConnectedProps<typeof connector>
// type DispatchPropsType = PropsFromRedux & {
//   productIncrement: ProductIncrementType,
//   addToBasket: addToBasketType
// }

// const Card: React.FC<CardTypes> = (props) => {
const Card = (props) => {
  console.log('[Card][props]', props)
  const {product, category_slug, productIncrement, addToBasket} = props
  const {product_slug} = product
  const card = ClassNames(styles.card)


  const addToBasketClickHandler = (category_slug, product_slug) => {
    return (event) => {
      event.preventDefault()
      addToBasket(category_slug, product_slug)
    }
  }

  if (!product) return null


  return (
    <div className={card}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contentImg}>
            <Link to={ROUTES.CATEGORIES + category_slug + '/' + product_slug}>
              <img src={product.image} alt="" />
            </Link>
          </div>
          <div className={styles.contentDescription}>
            <p className={styles.contentTitle}>{product.name}</p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBottomLabel}>Цена:</div>
            <button
              className={styles.footerTopBasket}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9341 10.8333H6.1233V9.16666H12.9341L15.2491 4.99999H4.36414V3.33333H16.6658C16.9608 3.33333 17.2341 3.48999 17.3841 3.74416C17.5341 3.99916 17.5383 4.31333 17.3941 4.57166L14.3916 9.97583C14.0983 10.5042 13.54 10.8333 12.9341 10.8333Z"
                  fill="#B0976A"
                />
                <path
                  d="M15.8334 14.1667H5.78506C5.15673 14.1667 4.57673 13.825 4.27173 13.2758C3.96673 12.7267 3.98423 12.0533 4.31756 11.52L5.31506 9.92332L2.57006 3.33582L0.844231 3.34415L0.836731 1.67749L3.67923 1.66415L7.18423 10.0767L5.7309 12.4025L5.78506 12.5H15.8334V14.1667ZM14.1667 15C13.7247 15 13.3008 15.1756 12.9882 15.4881C12.6757 15.8007 12.5001 16.2246 12.5001 16.6667C12.5001 17.1087 12.6757 17.5326 12.9882 17.8452C13.3008 18.1577 13.7247 18.3333 14.1667 18.3333C14.6088 18.3333 15.0327 18.1577 15.3452 17.8452C15.6578 17.5326 15.8334 17.1087 15.8334 16.6667C15.8334 16.2246 15.6578 15.8007 15.3452 15.4881C15.0327 15.1756 14.6088 15 14.1667 15ZM5.8334 15C5.39137 15 4.96745 15.1756 4.65489 15.4881C4.34233 15.8007 4.16673 16.2246 4.16673 16.6667C4.16673 17.1087 4.34233 17.5326 4.65489 17.8452C4.96745 18.1577 5.39137 18.3333 5.8334 18.3333C6.27543 18.3333 6.69935 18.1577 7.01191 17.8452C7.32447 17.5326 7.50006 17.1087 7.50006 16.6667C7.50006 16.2246 7.32447 15.8007 7.01191 15.4881C6.69935 15.1756 6.27543 15 5.8334 15Z"
                  fill="#B0976A"
                />
              </svg>
            </button>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomNum}>{product.price} ₽</div>
            <div className={styles.footerBottomStatus}>В наличии</div>
            <button
                className={styles.footerBottomBtn}
                onClick={addToBasketClickHandler(category_slug, product_slug)}
                disabled={product.count_in_stock === 0}
            >В корзину</button>
            {/*<div>{amount || 0}</div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}


export default connector(Card)
