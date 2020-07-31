import { DiscountRule, DiscountRuleType } from './discount-rule.model'
import { CartItem } from './cart-item.model'
import { AppliedDiscount } from './applied-discount.model'

export class DiscountItemCount extends DiscountRule {
  static RULE_ID: number = DiscountRuleType.ItemCount
  private groupSize: number
  private reduceCountBy: number

  constructor(template: string, params: { groupSize: number; reduceCountBy: number }) {
    super(template)
    this.groupSize = params.groupSize
    this.reduceCountBy = params.reduceCountBy
  }

  calculateDiscount(item: CartItem): AppliedDiscount {
    const multiplier = Math.floor(item.quantity / this.groupSize)
    return {
      amount: item.product.unitPrice * multiplier * this.reduceCountBy,
      description: this.template
        .replace(/\{groupSize\}/gi, this.groupSize.toString())
        .replace(/\{quantity\}/gi, item.quantity.toString())
        .replace(/\{reducedCount\}/gi, (this.groupSize - this.reduceCountBy).toString())
        .replace(/\{reduceCountBy\}/gi, this.reduceCountBy.toString())
    }
  }
}
