import { AppliedDiscount } from './applied-discount.model'
import { CartItem } from './cart-item.model'

export enum DiscountRuleType {
  GroupPrice = 1,
  ItemCount,
  NthPercent
}

export abstract class DiscountRule {
  abstract description: string
  template: string

  constructor(template: string) {
    this.template = template
  }

  abstract calculateDiscount(item: CartItem): AppliedDiscount | undefined
}
