import {IProduct} from '../../redux/types'

interface IOrderProducts {
  product: IProduct,
  amount: number,
  subtotal: number,
}

export interface IBasket {
  total: number,
  orderProducts: Array<IOrderProducts>
}

