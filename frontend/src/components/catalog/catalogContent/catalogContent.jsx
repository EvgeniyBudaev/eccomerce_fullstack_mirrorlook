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
  const {category_slug} = match.params
  console.log('category_slug', category_slug)
    console.log('[CatalogContent][categories]', categories)
  const category = categories.find((category) => category.category_slug === category_slug)


  return (
    <div className={styles.catalogContent}>
      <CardsList categoryId={category.id} category_slug={category_slug} />
    </div>
  )
}


export default withRouter(CatalogContent)
