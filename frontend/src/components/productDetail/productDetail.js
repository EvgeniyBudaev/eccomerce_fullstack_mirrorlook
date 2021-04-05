import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Loader from "../loader"


const ProductDetail = (props) => {
  console.log('[Product][props]', props)
  const {match, fetchProductDetail, loading, loaded} = props
  const id = match.params.slug

  useEffect(() => {
    if (!loading && !loaded) fetchProductDetail(id)
  }, [fetchProductDetail, loading, loaded, id])

  if (loading || !loaded) return <Loader />

  return (
    <>
      {/*<ProductCard product={product} />*/}
    </>
  )
}



export default connect(  createStructuredSelector({

}), {fetchProductDetail})(ProductDetail)
