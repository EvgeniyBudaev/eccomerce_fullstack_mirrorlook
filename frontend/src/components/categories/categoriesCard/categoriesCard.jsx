import React from 'react'
import cn from 'classnames'

import styles from './categoriesCard.module.scss'


const CategoriesCard = (props) => {
  const {name, image} = props
  const content = cn(styles.content, styles.hoverShadow)

  return (
    <>
      <div className={styles.categoriesCard}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.categoriesCard}>{name}</h2>
          </div>
          <div className={content}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesCard
