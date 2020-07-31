import { ShoppingCartService } from '../../services/shopping-cart.service'

describe('Shopping Cart Tests', () => {
  let cartService: ShoppingCartService

  beforeAll(() => {
    cartService = new ShoppingCartService()
  })

  it('calculates that total is the subtotal minus saved amount', () => {
    const calculation = cartService.calculateTotal([{ productId: 4, quantity: 12 }])
    expect(calculation.total).toEqual(calculation.subTotal - calculation.saved)
  })

  it('applies Nth Percent discount correctly', () => {
    // Kids Party: Buy 5, Get 20% off the 5th experience
    expect(cartService.calculateTotal([{ productId: 1, quantity: 1 }]).total).toEqual(220)
    expect(cartService.calculateTotal([{ productId: 1, quantity: 5 }]).total).toEqual(1056)
    expect(cartService.calculateTotal([{ productId: 1, quantity: 6 }]).total).toEqual(1276)
    expect(cartService.calculateTotal([{ productId: 1, quantity: 10 }]).total).toEqual(2112)
    expect(cartService.calculateTotal([{ productId: 1, quantity: 12 }]).total).toEqual(2552)
  })

  it('applies Group Price discount correctly', () => {
    // Team Building: Buy 2 for $1500; Buy 5, Get 20% off the 5th experience
    expect(cartService.calculateTotal([{ productId: 3, quantity: 1 }]).total).toEqual(800)
    expect(cartService.calculateTotal([{ productId: 3, quantity: 2 }]).total).toEqual(1500)
    expect(cartService.calculateTotal([{ productId: 3, quantity: 4 }]).total).toEqual(3000)
    expect(cartService.calculateTotal([{ productId: 3, quantity: 5 }]).total).toEqual(3640)
    expect(cartService.calculateTotal([{ productId: 3, quantity: 6 }]).total).toEqual(4340)
    expect(cartService.calculateTotal([{ productId: 3, quantity: 9 }]).total).toEqual(6640)
  })

  it('applies Item Count discount correctly for Wine Tours', () => {
    // Wine Tours: Buy 4, ONLY Pay for 3; Buy 5, Get 20% off the 5th experience
    expect(cartService.calculateTotal([{ productId: 2, quantity: 1 }]).total).toEqual(440)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 2 }]).total).toEqual(880)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 3 }]).total).toEqual(1320)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 4 }]).total).toEqual(1320)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 5 }]).total).toEqual(1672)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 6 }]).total).toEqual(2112)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 9 }]).total).toEqual(2992)
    expect(cartService.calculateTotal([{ productId: 2, quantity: 12 }]).total).toEqual(3784)
  })

  it('applies discounts for Picnics correctly', () => {
    // Picnics: Buy 2 get 1 free; Buy 5, Get 20% off the 5th experience
    expect(cartService.calculateTotal([{ productId: 4, quantity: 1 }]).total).toEqual(110)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 2 }]).total).toEqual(110)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 3 }]).total).toEqual(220)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 4 }]).total).toEqual(220)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 5 }]).total).toEqual(308)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 6 }]).total).toEqual(308)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 9 }]).total).toEqual(528)
    expect(cartService.calculateTotal([{ productId: 4, quantity: 12 }]).total).toEqual(616)
  })
})
