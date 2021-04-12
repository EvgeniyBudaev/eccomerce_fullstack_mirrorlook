import {
  LOAD_CATEGORIES_FAILURE,
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS
} from "../constants/categoriesConstants"
import {
  LOAD_PRODUCT_DETAILS_FAILURE,
  LOAD_PRODUCT_DETAILS_REQUEST,
  LOAD_PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DECREMENT,
  PRODUCT_INCREMENT,
  PRODUCT_REMOVE
} from "../constants/productConstants"
import {
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS
} from "../constants/productsConstants"


export interface ILoading {
  [product_slug: string]: boolean
}

export interface ILoaded {
  [product_slug: string]: boolean
}

export type IFailure = {
  error: Error
}


// Категории
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

export type HeaderCategoriesPropsType = MapStatePropsCategoriesType & MapDispatchPropsCategoriesType

export type CategoriesTypes = LoadCategoriesRequestType | LoadCategoriesSuccessType | LoadCategoriesFailureType

export type LoadCategoriesRequestType = {
  type: typeof LOAD_CATEGORIES_REQUEST,
}

export type LoadCategoriesSuccessType = {
  type: typeof LOAD_CATEGORIES_SUCCESS,
  payload: Array<ICategory>,
}

export type LoadCategoriesFailureType = {
  type: typeof LOAD_CATEGORIES_FAILURE,
  error: IFailure,
}



// Детали продукта
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
  product_slug: string
}

export type LoadProductDetailsSuccessType = {
  type: typeof LOAD_PRODUCT_DETAILS_SUCCESS,
  payload: IProduct,
  product_slug: string
}

export type LoadProductDetailsFailureType = {
  type: typeof LOAD_PRODUCT_DETAILS_FAILURE,
  payload: IFailure,
  product_slug: string
}

export type ProductDetailsTypes = LoadProductDetailsRequestType | LoadProductDetailsSuccessType | LoadProductDetailsFailureType



// Продукты
export type LoadProductsRequestType = {
  type: typeof LOAD_PRODUCTS_REQUEST,
  category_slug: string
}

export type LoadProductsSuccessType = {
  type: typeof LOAD_PRODUCTS_SUCCESS,
  payload: Array<IProduct>,
  category_slug: string
}

export type LoadProductsFailureType = {
  type: typeof LOAD_PRODUCTS_FAILURE,
  payload: IFailure,
  category_slug: string
}

export type ProductsTypes = LoadProductsRequestType | LoadProductsSuccessType | LoadProductsFailureType


// Decrement, Increment, Remove product
type ProductIncrementActionPayloadType = {
  product_slug: string,
}
export type ProductIncrementActionType = {
  type: typeof PRODUCT_INCREMENT,
  payload: ProductIncrementActionPayloadType
}
export type ProductIncrementType = (product_slug: string) => ProductIncrementActionType


type ProductDecrementActionPayloadType = {
  product_slug: string
}
type ProductDecrementActionType = {
  type: typeof PRODUCT_DECREMENT,
  payload: ProductDecrementActionPayloadType
}
export type ProductDecrementType = (product_slug: string) => ProductDecrementActionType


type ProductRemoveActionType = {
  type: typeof PRODUCT_REMOVE,
  payload: {product_slug: string}
}
export type ProductRemoveType = (product_slug: string) => ProductRemoveActionType

export type BasketActionTypes =  ProductIncrementActionType | ProductDecrementActionType | ProductRemoveActionType
