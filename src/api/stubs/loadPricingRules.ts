import DiscountRule, { DiscountRuleType, PricingRulesContext } from '../types/DiscountRule';

type ApiDiscountRule = Omit<DiscountRule, "type"> & {
  type: string,
}

async function loadPricingRules(props: PricingRulesContext): Promise<DiscountRule[]> {
  const { customerId } = props;
  let response: ApiDiscountRule[];
  if (customerId === 'Myer') {
    response = (await import('../data/myer-pricing-rules.json')).default;
  } else if (customerId === 'Axil Coffee') {
    response = (await import('../data/axil-pricing-rules.json')).default
  } else if (customerId === 'Second Bite') {
    response = (await import('../data/second-bite-pricing-rules.json')).default
  } else {
    response = (await import('../data/default-pricing-rules.json')).default
  }
  const rules: DiscountRule[] = response.map((rule) => ({
    ...rule,
    type: rule.type === 'discount' ? DiscountRuleType.DISCOUNT : DiscountRuleType.X_FOR_Y,
  }))

  return rules;
}

export default loadPricingRules;
