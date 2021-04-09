import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Loader from "../loader"
import { fetchProductDetail } from "../../redux/actions/productActions"
import { productByIdSelector, productLoadedSelector, productLoadingSelector } from "../../redux/selectors"


const ProductDetail = (props) => {
  console.log('[ProductDetail][props]', props)
  const {fetchProductDetail, category_slug, product_slug, loading, loaded, product} = props

    useEffect(() => {
      if (!loading && !loaded) fetchProductDetail(category_slug, product_slug)
  }, [fetchProductDetail, loading, loaded, category_slug, product_slug])


  if (loading || !loaded) return <Loader />

  return (
    <>
      <h1>Карточка продукта</h1>
      {/*<ProductCard product={product} />*/}
    </>
  )
}



export default connect(  createStructuredSelector({
  product: productByIdSelector,
  loading: productLoadingSelector,
  loaded: productLoadedSelector,
}), {fetchProductDetail})(ProductDetail)


