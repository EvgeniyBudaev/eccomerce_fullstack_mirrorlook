import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import styles from './productCardData.module.scss'
import {productDecrement, productIncrement} from '../../../../redux/actions/actions'
import {productAmountByIdSelector, productSelector} from '../../../../redux/selectors'
import {ROUTES} from '../../../../routes'


const ProductCardData = (props) => {
  //console.log('[ProductCardData][props]', props)
  const {product, amount, productIncrement, productDecrement} = props
  const {id, code, baseColor, height, width, weight, typeOfInstallation, inStock} = product

  const dataListItem1 = (classNames(styles.dataListItem, styles.item1))
  const dataListItem2 = (classNames(styles.dataListItem, styles.item2))
  const quantityBtnDecrement = (classNames(styles.quantityBtn, styles.quantityLeft))
  const quantityBtnIncrement = (classNames(styles.quantityBtn, styles.quantityRight))
  return (
    <div className={styles.data}>
      <div className={styles.dataArticle}>
        Артикул: <span>{code}</span>
      </div>
      <div className={styles.dataList}>
        <ul className={dataListItem1}>
          <li>Цвет основы</li>
          <li>Высота</li>
          <li>Ширина</li>
          <li>Вес</li>
          <li>Тип установки</li>
        </ul>
        <ul className={dataListItem2}>
          <li>{baseColor}</li>
          <li>{height} см</li>
          <li>{width} см</li>
          <li>{weight} кг</li>
          <li>{typeOfInstallation}</li>
        </ul>
      </div>
      <div className={styles.dataAvailability}>
        {inStock ? 'В наличии' : 'Нет в наличии'}
      </div>
      {
        inStock ? (
        <div>
          <div className={styles.dataOrderPrice}>30 000 ₽</div>
          <div className={styles.dataOrderQuantity}>
            <span>Кол-во:</span>
            <div className={styles.quantityNum}>
              <button className={quantityBtnDecrement} onClick={() => productDecrement(id)}>-</button>
              <div>{amount || 0}</div>
              <button className={quantityBtnIncrement} onClick={() => productIncrement(id)}>+</button>
            </div>
          </div>
          <div className={styles.dataOrderBtn}>
            <Link to={ROUTES.BASKET}>
              <button>Перейти в корзину</button>
            </Link>
          </div>
        </div>
      ) : null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  amount: productAmountByIdSelector,
  productAAA: productSelector,
})

export default connect(mapStateToProps, {productIncrement, productDecrement})(ProductCardData)


