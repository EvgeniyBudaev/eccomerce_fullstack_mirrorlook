import React from 'react'
import Classnames from 'classnames'

import EmptyBlockToHomePage from "./empty"
import Hamburger from "../hamburger"
import Logo from "./logo"
import HeaderMenuBottom from "./headerMenuBottom"
import styles from './header.module.scss'
import HeaderCategories from "./headerCategories"


const Header = () => {

    const headerStyles = Classnames(
    styles.header,
  )

    return (
      <>
        <div className={headerStyles}>
          <div className={styles.container}>
            <div className={styles.innerMenuAndLogo}>
              <div className={styles.logoAndHamburger}>
                <Hamburger />
                <Logo />
              </div>
              <div className={styles.menu} data-headermenu="">
                {/*<HeaderMenuTop />*/}
                <HeaderMenuBottom />
              </div>
            </div>
            <HeaderCategories />
          </div>
        </div>
        <EmptyBlockToHomePage />
      </>
    )
}

export default Header