import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from "react-redux"
import {withRouter} from "react-router"
import {createStructuredSelector} from "reselect"

import styles from './catalogContent.module.scss'
import {fetchProducts} from "../../../redux/actions/productsAction"
import {categoriesListSelector, productsSelector} from "../../../redux/selectors"
import CardsList from "./cardsList"



const CatalogContent = (props) => {
  const {match, productsAllByHashMap} = props

  const categories = useSelector(categoriesListSelector)
  const {restId} = match.params
  const category = categories.find((category) => category.slug === restId)
  // console.log('[category] ', category)

  console.log('productsAllByHashMap', productsAllByHashMap)
  const productsAll = Object.values(productsAllByHashMap)
  console.log('productsAll ', productsAll )


  return (
    <div className={styles.catalogContent}>
      <CardsList categoryId={category.id} products={productsAll}  />
    </div>
  )
}



const mapStateToProps = createStructuredSelector({
  productsAllByHashMap: productsSelector,
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
