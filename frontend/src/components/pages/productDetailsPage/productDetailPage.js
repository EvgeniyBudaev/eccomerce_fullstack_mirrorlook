import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import ProductDetail from "../../productDetail"


const ProductDetailsPage = () => {
  const match = useRouteMatch()
  const {category_slug, product_slug} = match.params

  return (
    <>
      <ProductDetail category_slug={category_slug} product_slug={product_slug} />
    </>
  )
}

export default ProductDetailsPage

