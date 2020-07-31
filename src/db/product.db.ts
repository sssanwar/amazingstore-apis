import { productsRaw } from './rawdata.db'
import { Product } from '../models/product.model'
import { getPromotionById } from './promotion.db'

export const getAllProducts = () => {
  return productsRaw.map(rawData => productMapper(rawData))
}

export const getProductById = (id: number) => {
  const rawData = productsRaw.find(rawData => rawData.id === id)
  return productMapper(rawData)
}

const productMapper = (rawData: any) => {
  return new Product(
    rawData.id,
    rawData.name,
    rawData.unitPrice,
    rawData.promotionIds.map((id: number) => getPromotionById(id))
  )
}
