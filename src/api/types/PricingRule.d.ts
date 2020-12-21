import { ApiActions, ApiArgs } from "../Api";

export type LoadPricingRulesApiArgs = ApiArgs & {
  action: ApiActions.LOAD_PRICING_RULES,
  context: PricingRulesContext,
};

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
