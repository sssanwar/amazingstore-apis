import * as productDb from '../db/product.db'
import { ShoppingCart } from '../models/shopping-cart.model'
import { CartItem } from '../models/cart-item.model'

export class ShoppingCartService {
  createShoppingCart(data: { productId: number; quantity: number }[]) {
    const cart = new ShoppingCart()
    const cartItems = data.map(d => new CartItem(productDb.getProductById(d.productId), d.quantity))
    cart.updateCartItems(cartItems)
    return cart
  }

  calculateTotal(data: { productId: number; quantity: number }[]) {
    return this.createShoppingCart(data).getTotalAmount()
  }
}
