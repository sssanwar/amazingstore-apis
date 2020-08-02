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

  get description(): string {
    return this.template
      .replace(/\{groupSize\}/gi, this.groupSize.toString())
      .replace(/\{reducedCount\}/gi, (this.groupSize - this.reduceCountBy).toString())
      .replace(/\{reduceCountBy\}/gi, this.reduceCountBy.toString())
  }

  calculateDiscount(item: CartItem): AppliedDiscount | undefined {
    const multiplier = Math.floor(item.quantity / this.groupSize)
    if (multiplier === 0) return undefined
    return {
      amount: item.product.unitPrice * multiplier * this.reduceCountBy,
      description: this.description
    }
  }
}
