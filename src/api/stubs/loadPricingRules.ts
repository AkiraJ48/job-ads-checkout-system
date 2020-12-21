import PricingRule, { PricingRulesContext } from '../types/PricingRule';

async function loadPricingRules(props: PricingRulesContext): Promise<PricingRule[]> {
  const { customerId } = props;
  let response;
  if (customerId === 'Myer') {
    response = (await import('../data/myer-pricing-rules.json')).default;
  } else if (customerId === 'Axil Coffee') {
    response = (await import('../data/axil-pricing-rules.json')).default
  } else if (customerId === 'Second Bite') {
    response = (await import('../data/second-bite-pricing-rules.json')).default
  } else {
    response = (await import('../data/default-pricing-rules.json')).default
  }
  return response;
}

export default loadPricingRules;
