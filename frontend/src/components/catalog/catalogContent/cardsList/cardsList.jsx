import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'

import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../../../redux/selectors'
import Loader from '../../../loader'

import {fetchProducts} from "../../../../redux/actions/productsAction"
import styles from './cardsList.module.scss'
import Card from "../../../card"



const CardsList = (props) => {
  console.log('[CardsList][props]', props)
  const { fetchProducts, categoryId, products, loading, loaded} = props;



  useEffect(() => {
    if (!loading && !loaded) {
      fetchProducts(categoryId);
    }
  }, [fetchProducts, loading, loaded, categoryId])


    if (loading) {
      return <Loader />;
    }

    return (
      <ul className={styles.cardsList}>
        {products.map(product => <Card key={product.id} product={product} />)}
      </ul>
    )
}

export default withRouter(connect(
  createStructuredSelector({
    loading: productsLoadingSelector,
    loaded: productsLoadedSelector,
  }),
  {fetchProducts}
)(CardsList))


