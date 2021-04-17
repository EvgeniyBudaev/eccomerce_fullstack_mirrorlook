import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import styles from './cart.module.scss'
import {cartSelector, totalSelector} from "../../redux/selectors"
import BasketCard from './cartCard'
import BasketBottom from "./cartBottom"



const Cart = (props) => {
  // console.log('[Cart][props]', props)
    const {items, total} = props

  if (!total) {
    return (
      <section className={styles.basket}>
        <div className={styles.container}>
          <div className={styles.basket}>
            <h4 className={styles.title}>В корзине нет выбранных товаров</h4>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.basket}>
      <div className={styles.container}>
        <h2 className={styles.title}>Корзина</h2>
        <div className={styles.cards}>

            {items.map((product) => (
            <BasketCard
              product={product}
              key={product.id}
              total={total}
            />
          ))}

          <BasketBottom total={total} />
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
    items: cartSelector,
    total: totalSelector
})

export default connect(mapStateToProps)(Cart)
