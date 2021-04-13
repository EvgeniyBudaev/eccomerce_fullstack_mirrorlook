import {IProduct} from "../../../../redux/types"

export type MapStatePropsCardsListType = {
  products: Array<IProduct>,
  loading: boolean,
  loaded: boolean,
}

export type MapDispatchPropsCardsListType = {
  fetchProductsByCategory: (category_slug: string) => void,
}

export type PropCardsListTypes = {
  category_slug: string
}

export type OwnPropsCardsListCategorySlugType = {
  category_slug: string
}