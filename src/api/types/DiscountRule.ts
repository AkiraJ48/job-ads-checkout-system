export type DiscountRuleContext = {
  customerId: string
}

type DiscountRule = {
  id: string,
  type: DiscountRuleType,
  products: string[],
  discountAmount?: number
  x?: number,
  y?: number,
};

export type SimplePricingRule = DiscountRule & {
  type: DiscountRuleType.DISCOUNT,
  discountAmount: number
}

export type XForYPricingRule = DiscountRule & {
  type: DiscountRuleType.X_FOR_Y,
  x: number,
  y: number,
}

export enum DiscountRuleType {
  DISCOUNT,
  X_FOR_Y,
}

export default DiscountRule;
