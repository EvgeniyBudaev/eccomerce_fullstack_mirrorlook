import React from 'react'
import styles from './hamburger.module.scss'
import classNames from 'classnames'

const Hamburger = () => {
  const hamburger = classNames(styles.hamburger, styles.menuBtn)
  const spanOne = classNames(styles.span, styles.open)
  const spanTwo = classNames(styles.span, styles.two)
  const spanThree = classNames(styles.span, styles.three)

  return (
    <div className={styles.btnMenu} data-type="headerBtnMenu">
      <div className={hamburger} id="toggle" data-type="hamburger">
        <div className={spanOne} id="one"></div>
        <div className={spanTwo} id="two"></div>
        <div className={spanThree} id="three"></div>
      </div>
    </div>
  )
}

export default Hamburger
