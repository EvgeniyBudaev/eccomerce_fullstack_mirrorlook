import React from 'react'
import {withRouter} from "react-router"

import styles from './catalogContent.module.scss'
import CardsList from "./cardsList"


const CatalogContent = (props) => {
  // console.log('[CatalogContent][props]', props)

  const {category_slug} = props.match.params

  return (
    <div className={styles.catalogContent}>
      <CardsList category_slug={category_slug} />
    </div>
  )
}


export default withRouter(CatalogContent)
