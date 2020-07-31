import { Promotion } from './promotion.model'

export class Product {
  id: number
  name: string
  unitPrice: number
  promotions: Promotion[]

  constructor(id: number, name: string, unitPrice: number, promotions: Promotion[]) {
    this.id = id
    this.name = name
    this.unitPrice = unitPrice
    this.promotions = promotions
  }
}
