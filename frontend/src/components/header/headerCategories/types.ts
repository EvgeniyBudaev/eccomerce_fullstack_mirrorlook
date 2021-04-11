interface ICategory {
  id: string,
  name: string,
  urlCategoryName: string
}

export type MapStatePropsHeaderCategoriesType = {
  categories: Array<ICategory>,
  loadingHeaderCategories: boolean,
  loadedHeaderCategories: boolean,
}

type MapDispatchPropsHeaderCategoriesType = {
  loadCategories: () => void,
}

export type HeaderCategoriesPopsType = MapStatePropsHeaderCategoriesType & MapDispatchPropsHeaderCategoriesType