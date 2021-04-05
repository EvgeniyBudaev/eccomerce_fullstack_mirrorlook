import React from 'react'
import {useSelector} from "react-redux"
import {withRouter} from "react-router"

import styles from './catalogContent.module.scss'
import {categoriesListSelector} from "../../../redux/selectors"
import CardsList from "./cardsList"



const CatalogContent = (props) => {
  console.log('[CatalogContent][props]', props)
  const {match} = props

  const categories = useSelector(categoriesListSelector)
  const {slug} = match.params
  const category = categories.find((category) => category.slug === slug)


  return (
    <div className={styles.catalogContent}>
      <CardsList categoryId={category.id} slug={slug} />
    </div>
  )
}


export default withRouter(CatalogContent)
