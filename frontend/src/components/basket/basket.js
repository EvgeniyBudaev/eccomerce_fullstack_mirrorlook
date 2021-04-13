import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import styles from './basket.module.scss'
// import BasketCard from './basketCard'
// import BasketBottom from './basketBottom'



const Basket = (props) => {
  console.log('[Basket][props]', props)

  // if (!total) {
  //   return (
  //     <section className={styles.basket}>
  //       <div className={styles.container}>
  //         <div className={styles.basket}>
  //           <h4 className={styles.title}>В корзине нет выбранных товаров</h4>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  return (
    <section className={styles.basket}>
      <div className={styles.container}>
        <h2 className={styles.title}>Корзина</h2>
        <div className={styles.cards}>
          {/*{orderProducts.map(({product, amount, subtotal}) => (*/}
          {/*  <BasketCard*/}
          {/*    product={product}*/}
          {/*    amount={amount}*/}
          {/*    key={product.id}*/}
          {/*    subtotal={subtotal}*/}
          {/*  />*/}
          {/*))}*/}

          {/*<BasketBottom total={total} />*/}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
})

export default connect(mapStateToProps)(Basket)
