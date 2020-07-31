import { Request, Response } from 'express'
import { ProductService } from '../services/product.service'

export const getProducts = (req: Request, res: Response) => {
  const productService = new ProductService()
  res.send(productService.getAllProducts())
}
