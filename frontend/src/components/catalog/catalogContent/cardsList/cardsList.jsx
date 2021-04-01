import React, {useEffect} from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../../../redux/selectors'
import {loadProducts} from '../../../../redux/actions/actions'
import Loader from '../../../loader'
import {withRouter} from 'react-router'
import {getPaginator, limit} from '../../../../utilities/utils'
import {stringify} from 'query-string'

// class CardsList extends Component {
//   state = {error: null}
//
//   loadProductsIfNeeded = () => {
//     const {loadProducts, categoryId, loading, loaded} = this.props
//     if (!loading && !loaded) {
//       loadProducts(categoryId)
//     }
//   }
//
//   componentDidMount() {
//     this.loadProductsIfNeeded()
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.categoryId !== this.props.categoryId) {
//       this.loadProductsIfNeeded()
//     }
//   }
//
//   componentDidCatch(error) {
//     this.setState({error})
//   }
//
//   render() {
//     console.log('[cardsList][props]', this.props)
//     const {products, loading, location} = this.props
//     const {currentPage, offset} = getPaginator(location.search)
//     console.log('ff', offset, currentPage)
//     const stringifiedParams = stringify({
//       limit,
//       offset
//     })
//
//     if (loading) {
//       return <Loader />
//     }
//
//     if (this.state.error) {
//       return <p>В этом ресторане меню не доступно</p>
//     }
//
//     return (
//       <ul className={styles.cardsList}>
//         {products.map((id) => (
//           <Card key={id} id={id} />
//         ))}
//       </ul>
//     )
//   }
// }

const CardsList = (props) => {
  //console.log('[CardsList][props]', props)
  const { loadProducts, categoryId, products, loading, loaded, location, isClickedBtnGrid } = props;

    const {currentPage, offset} = getPaginator(location.search)
    //console.log('[CardsList][offset, currentPage]', offset, currentPage)
    const stringifiedParams = stringify({
      limit,
      offset
    })


  useEffect(() => {
    if (!loading && !loaded) {
      loadProducts(categoryId, stringifiedParams);
    }
  }, [loadProducts, loading, loaded, categoryId, currentPage, stringifiedParams])


    if (loading) {
      return <Loader />;
    }

    return (
      <ul className={styles.cardsList}>
        {products.map(id => <Card key={id} id={id} isClickedBtnGrid={isClickedBtnGrid} />)}
      </ul>
    )
}

export default withRouter(connect(
  createStructuredSelector({
    loading: productsLoadingSelector,
    loaded: productsLoadedSelector,
  }),
  {loadProducts}
)(CardsList))


