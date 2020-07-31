import { Product } from './product.model'
import { DiscountRule } from './discount-rule.model'

export class Promotion {
  id: number
  name: string
  discountRule: DiscountRule

  constructor(id: number, name: string, discountRule: DiscountRule) {
    this.id = id
    this.name = name
    this.discountRule = discountRule
  }
}
