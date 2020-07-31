import { Product } from './product.model'

export class CartItem {
  product: Product
  quantity: number

  constructor(item: Product, quantity: number) {
    this.product = item
    this.quantity = quantity
  }
}
