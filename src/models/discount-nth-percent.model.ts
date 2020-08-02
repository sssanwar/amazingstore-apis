import { DiscountRule, DiscountRuleType } from './discount-rule.model'
import { CartItem } from './cart-item.model'
import { AppliedDiscount } from './applied-discount.model'

export class DiscountNthPercent extends DiscountRule {
  static RULE_ID: number = DiscountRuleType.NthPercent
  private nthCount: number
  private percentOff: number

  constructor(template: string, params: { nthCount: number; percentOff: number }) {
    super(template)
    this.nthCount = params.nthCount
    this.percentOff = params.percentOff
  }

  get description(): string {
    return this.template
      .replace(/\{nthCount\}/gi, this.nthCount.toString())
      .replace(/\{percentOff\}/gi, this.percentOff.toString())
  }

  calculateDiscount(item: CartItem): AppliedDiscount | undefined {
    // IMPORTANT: Because there was no mention of how multiple valid rules work or take precedence,
    // here we are assuming the promotion applies to a multiply of *nthCount* as well.

    // FOR EXAMPLE: If the nthCount is 5 and the quantity is 10 then every 5th item will have the 20% discount applied.
    // Other valid promotions will be applied too.

    const multiplier = Math.floor(item.quantity / this.nthCount)
    if (multiplier === 0) return undefined
    const discountedPrice = item.product.unitPrice * multiplier * (this.percentOff / 100)
    return {
      amount: discountedPrice,
      description: this.description
    }
  }
}
