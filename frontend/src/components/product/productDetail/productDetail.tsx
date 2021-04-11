import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {RouteComponentProps, withRouter} from "react-router"

import Loader from "../../loader"
import { fetchProductDetail } from "../../../redux/actions/productActions"
import {
  productByIdSelector,
  productLoadedSelector,
  productLoadingSelector,
} from "../../../redux/selectors"
import ProductCard from "../productCard"
import {RootStateType} from "../../../redux/reducers"
import {
  MapDispatchPropsProductDetailType,
  MapStatePropsProductDetailType,
  OwnPropsProductDetailType, PropProductDetailType
} from "./types"


type OwnPropsType = OwnPropsProductDetailType & RouteComponentProps

export type ProductDetailPropsType = MapStatePropsProductDetailType  & MapDispatchPropsProductDetailType & PropProductDetailType

const ProductDetail: React.FC<ProductDetailPropsType> = (props) => {
  // console.log('[ProductDetail][props]', props)
  const {fetchProductDetail, category_slug, product_slug, loading, loaded, product} = props

    useEffect(() => {
      if (!loading && !loaded) fetchProductDetail(category_slug, product_slug)
  }, [fetchProductDetail, loading, loaded, category_slug, product_slug])


  if (loading || !loaded) return <Loader />

  return (
    <>
      <ProductCard product={product} />
    </>
  )
}


const mapStateToProps = (state: RootStateType, ownProps: OwnPropsType ): MapStatePropsProductDetailType => {
  return {
    loading: productLoadingSelector(state, ownProps),
    loaded: productLoadedSelector(state, ownProps),
    product: productByIdSelector(state, ownProps),
  }
}


export default withRouter(connect(
    mapStateToProps, {fetchProductDetail})(ProductDetail))


