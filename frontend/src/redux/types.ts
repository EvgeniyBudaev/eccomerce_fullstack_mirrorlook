import {
  LOAD_CATEGORIES_FAILURE,
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS
} from "../constants/categoriesConstants"


export type IFailure = {
  error: Error
}

export interface ICategory {
  id: number,
  name: string,
  category_slug: string,
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


export type CategoriesTypes = LoadCategoriesRequestType | LoadCategoriesSuccessType | LoadCategoriesFailureType

export type LoadCategoriesRequestType = {
  type: typeof LOAD_CATEGORIES_REQUEST
}

export type LoadCategoriesSuccessType = {
  type: typeof LOAD_CATEGORIES_SUCCESS,
  payload: Array<ICategory>,
}

export type LoadCategoriesFailureType = {
  type: typeof LOAD_CATEGORIES_FAILURE,
  error: IFailure,
}