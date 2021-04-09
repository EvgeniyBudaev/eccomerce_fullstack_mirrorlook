import {
  LOAD_CATEGORIES_FAILURE,
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS
} from "../constants/categoriesConstants"
import {
  LOAD_PRODUCT_DETAILS_FAILURE,
  LOAD_PRODUCT_DETAILS_REQUEST,
  LOAD_PRODUCT_DETAILS_SUCCESS
} from "../constants/productConstants";


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

export interface IProduct {
  appointment: string,
  base_mirror: string,
  category_id: number,
  code: string,
  color_frame: string,
  color_mirror: string,
  count_in_stock: number,
  country_brand: string,
  country_manufacturer: string,
  created_at: string,
  description: string,
  faced: boolean,
  form: string,
  height: number,
  heightWithoutFrame: number,
  id: number,
  image: string,
  manufacturer: string,
  material_frame: string,
  material_mirror: string,
  name: string,
  numReviews: number,
  price: number,
  product_photo1: string,
  product_photo2: string,
  product_photo3: string,
  product_photo4: string,
  product_slug: string,
  rating: string,
  type_of_installation: string,
  type_of_mounting: string,
  user: number,
  weight: number,
  weightWithoutFrame: number,
  width: number
}

export type LoadProductDetailsRequestType = {
  type: typeof LOAD_PRODUCT_DETAILS_REQUEST,
}

export type LoadProductDetailsSuccessType = {
  type: typeof LOAD_PRODUCT_DETAILS_SUCCESS,
  payload: IProduct,
  product_slug: string
}

export type LoadProductDetailsFailureType = {
  type: typeof LOAD_PRODUCT_DETAILS_FAILURE,
  payload: IFailure
}