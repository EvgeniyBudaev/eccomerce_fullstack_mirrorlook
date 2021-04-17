import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter, RouteComponentProps} from 'react-router'

import {
  productsByCategorySelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../../../redux/selectors'
import Loader from '../../../loader'

import {fetchProductsByCategory} from "../../../../redux/actions/productsActions"
import styles from './cardsList.module.scss'
import Card from "../../../card"
import {RootStateType} from "../../../../redux/reducers"
import {
  MapStatePropsCardsListType,
  MapDispatchPropsCardsListType,
  PropCardsListTypes,
  OwnPropsCardsListCategorySlugType} from "./types"


type OwnPropsType = OwnPropsCardsListCategorySlugType & RouteComponentProps
export type CardsListPopsType = MapStatePropsCardsListType & MapDispatchPropsCardsListType & PropCardsListTypes


const CardsList: React.FC<CardsListPopsType> = (props) => {
  // console.log('[CardsList][props]', props)
  const { fetchProductsByCategory, products, loading, loaded, category_slug } = props

  useEffect(() => {
    if (!loading && !loaded) {
      fetchProductsByCategory(category_slug);
    }
  }, [fetchProductsByCategory, loading, loaded, category_slug])


    if (loading) {
      return <Loader />;
    }

    return (
      <ul className={styles.cardsList}>
        {products && products.map(product => <Card key={product.id} product={product} category_slug={category_slug} />)}
      </ul>
    )
}


const mapStateToProps = (state: RootStateType, ownProps: OwnPropsType ): MapStatePropsCardsListType => {
  return {
    loading: productsLoadingSelector(state, ownProps),
    loaded: productsLoadedSelector(state, ownProps),
    products: productsByCategorySelector(state, ownProps),
  }
}

export default withRouter(connect(
  mapStateToProps,
  {fetchProductsByCategory}
)(CardsList))


