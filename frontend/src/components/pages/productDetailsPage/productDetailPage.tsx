import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import {RouteComponentProps, withRouter} from 'react-router'

import ProductDetail from "../../product/productDetail"


export interface MatchParams {
    category_slug: string,
    product_slug: string
}

type TParams = {
    category_slug: string,
    product_slug: string
}

const ProductDetailsPage: (props: RouteComponentProps<TParams>) => JSX.Element = () => {
    const match = useRouteMatch<MatchParams>()
    const {category_slug, product_slug} = match.params

  return (
    <>
      <ProductDetail category_slug={category_slug} product_slug={product_slug} />
    </>
  )
}

export default withRouter(ProductDetailsPage)

