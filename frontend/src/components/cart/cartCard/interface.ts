import {IProduct, ProductDecrementType, ProductIncrementType, ProductRemoveType} from '../../../redux/types'

export interface IBasketCardProps {
  product: IProduct,
  amount: number,
  subtotal: number,
  productDecrement: ProductDecrementType,
  productIncrement: ProductIncrementType,
  productRemove: ProductRemoveType,
}

