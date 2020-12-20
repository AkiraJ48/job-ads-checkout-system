export type PricingRulesContext = {
  customerId: string
}

type PricingRule = {
  id: string,
  type: string,
  products: string[],
  discountAmount?: number,
  x?: number,
  y?: number,
};

export default PricingRule;
