import { DiscountRule, DiscountRuleType } from './discount-rule.model'
import { CartItem } from './cart-item.model'
import { AppliedDiscount } from './applied-discount.model'

export class DiscountGroupPrice extends DiscountRule {
  static RULE_ID: number = DiscountRuleType.GroupPrice
  private groupSize: number
  private groupPrice: number

  constructor(template: string, params: { groupSize: number; groupPrice: number }) {
    super(template)
    this.groupSize = params.groupSize
    this.groupPrice = params.groupPrice
  }

  calculateDiscount(item: CartItem): AppliedDiscount {
    const multiplier = Math.floor(item.quantity / this.groupSize)
    const preDiscountPrice = item.quantity * item.product.unitPrice
    const discountAmount =
      preDiscountPrice -
      (multiplier * this.groupPrice + (item.quantity - multiplier * this.groupSize) * item.product.unitPrice)
    return {
      amount: discountAmount,
      description: this.template
        .replace(/\{groupSize\}/gi, this.groupSize.toString())
        .replace(/\{groupPrice\}/gi, (this.groupPrice * multiplier).toString())
    }
  }
}
