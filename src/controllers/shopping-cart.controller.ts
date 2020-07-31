import { Request, Response } from 'express'
import { ShoppingCartService } from '../services/shopping-cart.service'

export const calculateTotal = (req: Request, res: Response) => {
  const cartService = new ShoppingCartService()
  res.send(cartService.calculateTotal(JSON.parse(req.body)))
}
