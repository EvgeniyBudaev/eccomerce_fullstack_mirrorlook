import {createSelector} from 'reselect'

import {getById} from "../utilities/utils"


const categoriesSelector = (state) => state.categories.entities
export const categoriesLoadingSelector = (state) =>
    state.categories.loading
export const categoriesLoadedSelector = (state) =>
    state.categories.loaded
export const categoriesErrorSelector = (state) =>
    state.categories.error
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

export const productDetailsSelector = (state) => state.productDetails
export const productDetailsLoadingSelector = (state) =>
    state.productDetails.loading
export const productDetailsLoadedSelector = (state) =>
    state.productDetails.loaded

export const productLoadingSelector = (state, props) =>
    state.productDetails.loading[props.product_slug]
export const productLoadedSelector = (state, props) =>
    state.productDetails.loaded[props.product_slug]
export const productByIdSelector = (state, props) => state.productDetails.product[props.product_slug]


export const cartSelector = (state) => state.cart.entities


export const totalSelector = createSelector(
    cartSelector,
    (orderProducts) =>
        orderProducts.reduce((acc, item) => acc += item.price * item.quantity, 0)
)


