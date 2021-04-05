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
export const productsByCategorySelector = (state, props) => state.products.entities[props.match.params.slug]
export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.categoryId]
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.categoryId]



export const productSelector = getById(productsSelector)