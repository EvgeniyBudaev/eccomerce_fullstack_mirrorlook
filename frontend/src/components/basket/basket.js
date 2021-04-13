import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect, useSelector} from 'react-redux'

import styles from './basket.module.scss'
import {basketSelector} from "../../redux/selectors"
import BasketCard from './basketCard'
// import BasketBottom from './basketBottom'



const Basket = (props) => {
  console.log('[Basket][props]', props)
    const basket = useSelector(state => state.basket)
    const {entities} = basket

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
            {entities.map((product) => (
            <BasketCard
              product={product}
              key={product.id}
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

          {/*<BasketBottom total={total} />*/}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
    basket: basketSelector
})

export default connect(mapStateToProps)(Basket)
