import * as productDb from '../db/product.db'

export class ProductService {
  getAllProducts() {
    return productDb.getAllProducts()
  }

  getProductById(id: number) {
    return productDb.getProductById(id)
  }
}
