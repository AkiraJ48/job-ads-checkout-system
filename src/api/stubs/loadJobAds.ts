import { DiscountRuleContext } from '../types/DiscountRule';
import loadDiscountRules from './loadDiscountRules';
import buildJobAds from '../transformers/buildJobAds';
import loadProducts from './loadProducts';

async function loadJobAds(props: DiscountRuleContext) {
  const [products, discountRules] = await Promise.all([loadProducts(), loadDiscountRules(props)]);
  const response = buildJobAds(products, discountRules);
  return response;
}

export default loadJobAds;