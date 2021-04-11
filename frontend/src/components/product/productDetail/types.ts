import {IProduct} from "../../../redux/types";


export type MapStatePropsProductDetailType = {
     product: IProduct,
     loading: boolean,
    loaded: boolean,
}

export type MapDispatchPropsProductDetailType = {
    fetchProductDetail: (category_slug: string, product_slug: string) => void,
}

export type PropProductDetailType = {
    category_slug: string,
    product_slug: string
}

export type OwnPropsProductDetailType = {
    product_slug: string
}