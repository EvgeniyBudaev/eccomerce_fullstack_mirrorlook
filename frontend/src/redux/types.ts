export interface ICategory {
  id: number,
  name: string,
  slug: string,
  image: string,
}

export interface ICategories {
  categories: Array<ICategory>
}

export type MapStatePropsCategoriesType = {
  categories: Array<ICategory>,
  loadingCategories: boolean,
  loadedCategories: boolean,
}

export type MapDispatchPropsCategoriesType = {
  fetchCategories: () => void,
}

export type CategoriesPropsType = MapStatePropsCategoriesType & MapDispatchPropsCategoriesType