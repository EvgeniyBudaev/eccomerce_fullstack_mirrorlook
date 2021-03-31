import React from 'react'

import Footer from "../../footer"
import styles from './mainLayout.module.scss'


const MainLayout = (props) => {
  return (
        <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/*<Header />*/}
          {props.children}
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainLayout