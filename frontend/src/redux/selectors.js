import {createSelector} from 'reselect'

const categoriesSelector = (state) => state.categories.entities

export const categoriesLoadingSelector = (state) =>
  state.categories.loading
export const categoriesLoadedSelector = (state) =>
  state.categories.loaded

export const categoriesListSelector = createSelector(
  categoriesSelector,
  Object.values
)