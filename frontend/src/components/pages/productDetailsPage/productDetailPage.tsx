import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import ProductDetail from "../../productDetail"


export interface MatchParams {
    category_slug: string,
    product_slug: string
}

const ProductDetailsPage: React.FC = () => {
  const match = useRouteMatch<MatchParams>()
  const {category_slug, product_slug} = match.params

  return (
    <>
      <ProductDetail category_slug={category_slug} product_slug={product_slug} />
    </>
  )
}

export default ProductDetailsPage

