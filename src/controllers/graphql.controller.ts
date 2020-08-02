import { buildSchema } from 'graphql'
import { ProductService } from '../services/product.service'
import { ShoppingCartService } from '../services/shopping-cart.service'

export const gqlSchema = buildSchema(`
  type DiscountRule {
    template: String
    nthCount: Int
    percentOff: Int
  }

  type Promotion {
    id: Int
    description: String
    discountRule: DiscountRule
  }

  type Product {
    id: Int
    name: String
    unitPrice: Int
    promotions: [Promotion]
  }

  type CheckoutDetails {
    subTotal: Float
    total: Float
    saved: Float
    details: [String]
  }

  input CartItem {
    productId: Int!
    quantity: Int!
  }

  type Query {
    products: [Product]
    product(id: Int): Product
  }

  type Mutation {
    updateCart(items: [CartItem]): CheckoutDetails
  }
`)

const productService = new ProductService()
const cartService = new ShoppingCartService()

export const root = {
  products: () => productService.getAllProducts(),
  product: (data: { id: number }) => productService.getProductById(data.id),
  updateCart: (data: { items: [{ productId: number; quantity: number }] }) => cartService.calculateTotal(data.items)
}
