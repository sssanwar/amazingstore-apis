import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product.model'

describe('ProductService tests', () => {
  let allProducts: Product[]

  beforeAll(() => {
    const productService = new ProductService()
    allProducts = productService.getAllProducts()
  })

  it('retrieves all products', () => {
    expect(allProducts).toHaveLength(4)
  })

  it('returns correct data', () => {
    expect(allProducts[0].name).toEqual('Kids Party')
    expect(allProducts[3].unitPrice).toEqual(110)
  })

  it('has correct number of promotions set', () => {
    expect(allProducts[0].promotions.length).toEqual(1)
    expect(allProducts[1].promotions.length).toEqual(2)
    expect(allProducts[3].promotions.length).toEqual(2)
  })
})
