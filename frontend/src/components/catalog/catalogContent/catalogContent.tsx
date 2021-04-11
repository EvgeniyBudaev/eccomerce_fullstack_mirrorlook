import React from 'react'
import {RouteComponentProps, withRouter} from "react-router"

import styles from './catalogContent.module.scss'
import CardsList from "./cardsList"



type TParams = {
    category_slug: string;
}

const CatalogContent: (props: RouteComponentProps<TParams>) => JSX.Element = (props: RouteComponentProps<TParams>) => {
  // console.log('[CatalogContent][props]', props)

  const {category_slug} = props.match.params

  return (
    <div className={styles.catalogContent}>
      <CardsList category_slug={category_slug} />
    </div>
  )
}


export default withRouter(CatalogContent)
