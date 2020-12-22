import { PricingRulesContext } from '../types/DiscountRule';
import loadPricingRules from './loadPricingRules';
import buildJobAds from '../transformers/buildJobAds';

async function loadJobAds(props: PricingRulesContext) {
  const products = (await import('../data/products.json')).default;
  const discountRules = await loadPricingRules(props);
  
  const response = buildJobAds(products, discountRules);
  return response;
}

export default loadJobAds;