import { Product } from './product.model'
import { DiscountRule } from './discount-rule.model'

export class Promotion {
  id: number
  discountRule: DiscountRule

  constructor(id: number, name: string, discountRule: DiscountRule) {
    this.id = id
    this.discountRule = discountRule
  }

  get description(): string | undefined {
    return this.discountRule ? this.discountRule.description : undefined
  }
}
