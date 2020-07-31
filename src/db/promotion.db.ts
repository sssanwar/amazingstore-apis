import { promotionsRaw } from './rawdata.db'
import { Promotion } from '../models/promotion.model'
import { DiscountRule, DiscountRuleType } from '../models/discount-rule.model'
import { DiscountNthPercent } from '../models/discount-nth-percent.model'
import { DiscountGroupPrice } from '../models/discount-group-price.model'
import { DiscountItemCount } from '../models/discount-item-count.model'

export const getPromotionById = (id: number): Promotion | undefined => {
  const promotionRaw = promotionsRaw.find(pr => pr.id === id)
  return promotionRaw ? promoMapper(promotionRaw) : undefined
}

const discountRuleMapper = (rawData: any): DiscountRule | undefined => {
  switch (rawData.ruleId) {
    case DiscountRuleType.NthPercent:
      return new DiscountNthPercent(rawData.template, rawData.params)
    case DiscountRuleType.GroupPrice:
      return new DiscountGroupPrice(rawData.template, rawData.params)
    case DiscountRuleType.ItemCount:
      return new DiscountItemCount(rawData.template, rawData.params)
  }
  return undefined
}

const promoMapper = (rawData: any): Promotion => {
  return new Promotion(rawData.id, rawData.name, discountRuleMapper(rawData)!)
}
