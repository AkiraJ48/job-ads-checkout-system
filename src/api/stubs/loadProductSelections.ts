import PricingRule, { PricingRulesContext } from '../types/PricingRule';
import Product from '../types/Product';
import loadPricingRules from './loadPricingRules';

function buildSpecialDealDescription(rule: PricingRule) {
  if (rule.type === 'discount') {
    return `You get $${rule.discountAmount} off!`;
  } else if (rule.type === 'xFORy') {
    return `You can buy ${rule.x} for ${rule.y}!`;
  }
  return '';
}

function mergeProductsAndPricingRules(products: Product[], pricingRules: PricingRule[]) {
  return products.map(product => {
    const rulesRelatedToProduct = pricingRules.find(rule => rule.products.includes(product.id));
    const specialDeal = rulesRelatedToProduct ? buildSpecialDealDescription(rulesRelatedToProduct) : '';
    
    return {
      key: product.id,
      title: product.name,
      description: product.description,
      price: product.price,
      containsSpecialDeal: Boolean(rulesRelatedToProduct),
      specialDeal,
    }
  })
}

async function loadProductSelections(props: PricingRulesContext) {
  const products = (await import('../data/products.json')).default;
  const pricingRules = await loadPricingRules(props);

  const response = mergeProductsAndPricingRules(products, pricingRules);
  return response;
}

export default loadProductSelections;