import DiscountRule, { DiscountRuleType } from "../types/DiscountRule";
import Product from "../types/Product";

function buildSpecialDealDescription(rule: DiscountRule) {
  if (rule.type === DiscountRuleType.DISCOUNT) {
    return `You get $${rule.discountAmount} off!`;
  } else if (rule.type === DiscountRuleType.X_FOR_Y) {
    return `You can buy ${rule.x} for ${rule.y}!`;
  }
  return '';
}

function buildJobAds(products: Product[], discountRules: DiscountRule[]) {
  return products.map(product => {
    const rulesRelatedToProduct = discountRules.find(rule => rule.products.includes(product.id));
    const specialDeal = rulesRelatedToProduct ? buildSpecialDealDescription(rulesRelatedToProduct) : '';

    return {
      id: product.id,
      title: product.name,
      description: product.description,
      price: product.price,
      containsSpecialDeal: Boolean(rulesRelatedToProduct),
      specialDeal,
    }
  })
}

export default buildJobAds;
