import { PricingRulesContext } from '../types/PricingRule';
import loadPricingRules from './loadPricingRules';
import buildJobAds from '../transformers/buildJobAds';

async function loadProductSelections(props: PricingRulesContext) {
  const products = (await import('../data/products.json')).default;
  const pricingRules = await loadPricingRules(props);
  
  const response = buildJobAds(products, pricingRules);
  return response;
}

export default loadProductSelections;