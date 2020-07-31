import { CartItem } from './cart-item.model'
import { AppliedDiscount } from './applied-discount.model'

export class ShoppingCart {
  private _items: CartItem[] = new Array<CartItem>()

  updateCartItems(cartItems: CartItem[]) {
    cartItems.forEach(cartItem => {
      const existingItem = this._items.find(ci => ci.product.id == cartItem.product.id)

      // Add new if it's not existing, update quantity otherwise, and remove item if quantity is 0.
      if (existingItem) existingItem.quantity = cartItem.quantity
      else this._items.push(cartItem)
    })

    // Remove item with zero quantity
    this._items = this._items.filter(ci => ci.quantity > 0)
  }

  getAllDiscounts(): AppliedDiscount[] {
    return this._items.flatMap(item =>
      item.product.promotions.flatMap(p => {
        const appliedDiscount = p.discountRule.calculateDiscount(item)
        return appliedDiscount ? [appliedDiscount] : []
      })
    )
  }

  getPreDiscountAmount(): number {
    return this._items.reduce((total, item) => total + item.quantity * item.product.unitPrice, 0.0)
  }

  getDiscountAmount(appliedDiscounts: AppliedDiscount[]): number {
    return appliedDiscounts.reduce((total, disc) => total + disc.amount, 0.0)
  }

  getTotalAmount() {
    const appliedDiscounts = this.getAllDiscounts()
    const discountAmount = this.getDiscountAmount(appliedDiscounts)
    const subTotal = this.getPreDiscountAmount()

    return {
      subTotal: subTotal,
      total: this.getPreDiscountAmount() - discountAmount,
      saved: discountAmount,
      details: appliedDiscounts.map(d => d.description)
    }
  }
}
