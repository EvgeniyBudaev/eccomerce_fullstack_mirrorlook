import React from 'react'

import styles from './productCard.module.scss'
import ProductCardDescription from './productCardDescription'
// import ProductCardData from './productCardData'
import ProductCardDetailed from './productCardDetailed'
import ProductCardSlider from './productCardSlider'


const ProductCard = (props) => {
  console.log('[ProductCard][props]', props)
  const {product} = props
  const {name, description} = product

  return (
    <>
      <section className={styles.productCard}>
        <div className={styles.container}>
          <h2 className={styles.title}>Венецианское зеркало</h2>
          <h2 className={styles.productName}>{name}</h2>
          <div className={styles.inner}>
            <ProductCardDescription description={description} />
            <ProductCardSlider product={product} />
            {/*<ProductCardData product={product} />*/}
          </div>
        </div>
      </section>
      <ProductCardDetailed product={product} />
    </>
  )
}

export default ProductCard





