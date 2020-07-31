export const promotionsRaw = [
  {
    id: 1,
    template: 'Buy {nthCount}, Get {percentOff}% off the {nthCount}th experience',
    ruleId: 3,
    params: {
      nthCount: 5,
      percentOff: 20
    }
  },
  {
    id: 2,
    template: 'Buy {groupSize} for ${groupPrice}',
    ruleId: 1,
    params: {
      groupSize: 2,
      groupPrice: 1500
    }
  },
  {
    id: 3,
    template: 'Buy {groupSize}, ONLY pay for {reducedCount}',
    ruleId: 2,
    params: {
      groupSize: 4,
      reduceCountBy: 1
    }
  },
  {
    id: 4,
    template: 'Buy {groupSize}, get {reduceCountBy} free',
    ruleId: 2,
    params: {
      groupSize: 2,
      reduceCountBy: 1
    }
  }
]

export const productsRaw = [
  {
    id: 1,
    name: 'Kids Party',
    unitPrice: 220,
    promotionIds: [1]
  },
  {
    id: 2,
    name: 'Wine Tour',
    unitPrice: 440,
    promotionIds: [1, 3]
  },
  {
    id: 3,
    name: 'Team Building',
    unitPrice: 800,
    promotionIds: [1, 2]
  },
  {
    id: 4,
    name: 'Picnic',
    unitPrice: 110,
    promotionIds: [1, 4]
  }
]
