import {createSelector} from 'reselect'

import {getById} from "../utilities/utils"


const categoriesSelector = (state) => state.categories.entities
export const categoriesLoadingSelector = (state) =>
  state.categories.loading
export const categoriesLoadedSelector = (state) =>
  state.categories.loaded
export const categoriesListSelector = createSelector(
  categoriesSelector,
  Object.values
)



export const productsSelector = (state) => state.products.entities
export const productsByCategorySelector = (state, props) => state.products.entities[props.match.params.category_slug]
export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.category_slug]
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.category_slug]



export const productSelector = getById(productsSelector)


export const productLoadingSelector = (state, props) =>
  state.productDetails.loading[props.product_slug]
export const productLoadedSelector = (state, props) =>
  state.productDetails.loaded[props.product_slug]
export const productByIdSelector = (state, props) => state.productDetails.entities[props.product_slug]



const basketSelector = (state) => state.basket

export const orderProductsSelector = createSelector(
  productsSelector,
  basketSelector,
  (products, order) => {
    return Object.keys(order)
      // .filter((productId) => order[productId] > 0)
      // .map((productId) => products[productId])
      // .map((product) => ({
      //   product,
      //   amount: order[product.id],
      //   subtotal: order[product.id] * product.price,
      // }))
  }
)

// export const totalSelector = createSelector(
//   orderProductsSelector,
//   (orderProducts) =>
//     orderProducts.reduce((acc, {subtotal}) => acc + subtotal, 0)
// )
