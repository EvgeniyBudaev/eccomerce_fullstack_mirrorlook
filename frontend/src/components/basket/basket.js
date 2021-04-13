import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect, useSelector} from 'react-redux'

import styles from './basket.module.scss'
import {basketSelector, totalSelector} from "../../redux/selectors"
import BasketCard from './basketCard'
import BasketBottom from "./basketBottom"



const Basket = (props) => {
  console.log('[Basket][props]', props)
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

          {/*{orderProducts.map(({product, amount, subtotal}) => (*/}
          {/*  <BasketCard*/}
          {/*    product={product}*/}
          {/*    amount={amount}*/}
          {/*    key={product.id}*/}
          {/*    subtotal={subtotal}*/}
          {/*  />*/}
          {/*))}*/}

          <BasketBottom total={total} />
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
    items: basketSelector,
    total: totalSelector
})

export default connect(mapStateToProps)(Basket)
