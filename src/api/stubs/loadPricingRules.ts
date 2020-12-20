import PricingRule, { PricingRulesContext } from '../types/PricingRule';

async function loadPricingRules(props: PricingRulesContext): Promise<PricingRule[]> {
  const { customerId } = props;
  let response;
  if (customerId === 'myer') {
    response = await import('../data/myer-pricing-rules.json');
  } else if (customerId === 'axil') {
    response = await import('../data/axil-pricing-rules.json')
  } else if (customerId === 'second-bite') {
    response = await import('../data/second-bite-pricing-rules.json')
  } else {
    response = await import('../data/default-pricing-rules.json')
  }
  return response;
}

export default loadPricingRules;
