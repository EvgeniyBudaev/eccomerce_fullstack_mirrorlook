import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'

import {
  productsByCategorySelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../../../redux/selectors'
import Loader from '../../../loader'

import {fetchProducts} from "../../../../redux/actions/productsActions"
import styles from './cardsList.module.scss'
import Card from "../../../card"



const CardsList = (props) => {
  console.log('[CardsList][props]', props)
  const { fetchProducts, products, loading, loaded, category_slug } = props

  let allProductsByCategory
  if (products) allProductsByCategory = Object.values(products)
  // console.log('allProductsByCategory', allProductsByCategory)

  useEffect(() => {
    if (!loading && !loaded) {
      fetchProducts(category_slug);
    }
  }, [fetchProducts, loading, loaded, category_slug])


    if (loading) {
      return <Loader />;
    }

    return (
      <ul className={styles.cardsList}>
        {/*{arrayKeysProducts.map(id => <Card key={id} id={id} />)}*/}
        {allProductsByCategory && allProductsByCategory.map(product => <Card key={product.id} product={product} category_slug={category_slug} />)}
      </ul>
    )
}


const mapStateToProps = (state, ownProps) => {
  return {
    loading: productsLoadingSelector(state, ownProps),
    loaded: productsLoadedSelector(state, ownProps),
    products: productsByCategorySelector(state, ownProps),
  }
}

export default withRouter(connect(
  mapStateToProps,
  {fetchProducts}
)(CardsList))


