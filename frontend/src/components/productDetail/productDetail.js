import React, { useEffect } from 'react'
import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Loader from "../loader"
import { fetchProductDetail } from "../../redux/actions/productActions"


const ProductDetail = (props) => {
  console.log('[Product][props]', props)
  // const {match, fetchProductDetail, loading, loaded} = props
  // const id = match.params.product_slug

  const match = useRouteMatch()
  const {category_slug, product_slug} = match
  console.log('match', match)

    useEffect(() => {
    fetchProductDetail(category_slug, product_slug)
  }, [fetchProductDetail])

  // useEffect(() => {
  //   if (!loading && !loaded) fetchProductDetail(product_slug)
  // }, [fetchProductDetail, loading, loaded, product_slug])

  // if (loading || !loaded) return <Loader />

  return (
    <>
      <h1>Карточка продукта</h1>
      {/*<ProductCard product={product} />*/}
    </>
  )
}



export default connect(  createStructuredSelector({

}), {fetchProductDetail})(ProductDetail)

// export default ProductDetail
