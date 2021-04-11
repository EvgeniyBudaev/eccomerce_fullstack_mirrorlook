import React from 'react'
import { withRouter } from "react-router"
import styles from './headerMenuTop.module.scss'
import MenuTopCity from './menuTopCity'
import MenuTopButtons from './menuTopButtons'
import cn from 'classnames'
import { RouteComponentProps } from 'react-router'


type PropsType = RouteComponentProps

const HeaderMenuTop: React.FC<PropsType> = () => {

  const menuTopTel = cn(styles.menuTopTel)


  return (
    <div className={styles.menuTop}>
      <MenuTopCity />
      <a className={menuTopTel} href="tel:89261113978">
        +7 (926) 111-39-78
      </a>
      <MenuTopButtons />
    </div>
  )
}

export default withRouter(HeaderMenuTop)


