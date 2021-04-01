import React from 'react'

import Header from "../../header"
import Footer from "../../footer"
import styles from './mainLayout.module.scss'


const MainLayout: React.FC = (props) => {
  return (
        <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
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