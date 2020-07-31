import { DiscountNthPercent } from '../../models/discount-nth-percent.model'
import { CartItem } from '../../models/cart-item.model'
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { getProductById } from '../../db/product.db'

describe('DiscountRule tests', () => {
  let cartService: ShoppingCartService

  beforeAll(() => {
    cartService = new ShoppingCartService()
  })

  it('applies Nth Percent discount correctly', () => {
    const rule = new DiscountNthPercent('abc', { nthCount: 5, percentOff: 20 })

    const disc1 = rule.calculateDiscount(new CartItem(getProductById(1), 1))
    expect(disc1.amount).toEqual(0)

    const disc5 = rule.calculateDiscount(new CartItem(getProductById(1), 5))
    expect(disc5.amount).toEqual(44)

    const disc7 = rule.calculateDiscount(new CartItem(getProductById(1), 7))
    expect(disc7.amount).toEqual(44)

    const disc10 = rule.calculateDiscount(new CartItem(getProductById(1), 10))
    expect(disc10.amount).toEqual(88)

    const disc11 = rule.calculateDiscount(new CartItem(getProductById(1), 11))
    expect(disc11.amount).toEqual(88)
  })
})
