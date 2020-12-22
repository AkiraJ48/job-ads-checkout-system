import Product from "../types/Product";
import DiscountRule, { DiscountRuleType, SimplePricingRule, XForYPricingRule } from "../types/DiscountRule";
import { CheckoutProduct, SelectedProduct } from "../types/Checkout";

function isDiscountPricingRule(rule: DiscountRule): rule is SimplePricingRule {
  return rule.type === DiscountRuleType.DISCOUNT;
}

function isXForYPricingRule(rule: DiscountRule): rule is XForYPricingRule {
  return rule.type === DiscountRuleType.X_FOR_Y;
}

function applySimpleDiscount(products: CheckoutProduct[], discountRules: SimplePricingRule[]) {
  return products.map(product => {
    const matchingRuleExists = discountRules.find(rule => rule.products.includes(product.id));

    if (matchingRuleExists) {
      return {
        ...product,
        discountedPrice: product.price - matchingRuleExists.discountAmount,
      }
    }
    return product;
  })
}

function applyXforYDiscount(products: CheckoutProduct[], discountRules: XForYPricingRule[]) {
  return products.map(product => {
    const matchingRuleExists = discountRules.find(rule => rule.products.includes(product.id));

    if (matchingRuleExists) {
      const canApplyDeal = product.quantity >= matchingRuleExists.x;

      if (canApplyDeal) {
        const additionalDealAdded = Math.floor(product.quantity / matchingRuleExists.x);
        const remainingQuantity = product.quantity % matchingRuleExists.x;
        return {
          ...product,
          total: (product.price * matchingRuleExists.y * additionalDealAdded) + (product.price * remainingQuantity),
        }
      }
    }

    return product;
  })
}

function applyDiscounts(products: CheckoutProduct[], discountRules: DiscountRule[]) {
  const discountPricingRules = discountRules.filter(isDiscountPricingRule);
  const xForYPricingRules = discountRules.filter(isXForYPricingRule);

  const productsWithSimpleDiscountsApplied = applySimpleDiscount(products, discountPricingRules);
  const productsWithXForYDiscountsApplied = applyXforYDiscount(productsWithSimpleDiscountsApplied, xForYPricingRules);

  return productsWithXForYDiscountsApplied;
}

function buildCheckoutCart(products: Product[], discountRules: DiscountRule[], selectedProducts: SelectedProduct[]) {
  const productsInCart = selectedProducts.map(selectedProduct => {
    const product = products.filter(p => p.id === selectedProduct.id)[0];
    return {
      ...product,
      quantity: selectedProduct.quantity,
    }
  });

  const productsWithDiscountsApplied = applyDiscounts(productsInCart, discountRules);

  const totalAmount = productsWithDiscountsApplied.reduce((acc, product) => {
    if (product !== undefined) {
      const total = product.total ?? product.total;
      const productPrice = (product.discountedPrice ?? product.price) * product.quantity;
      const price = total ?? productPrice;
      return acc + price
    }
    return acc;
  }, 0);

  return {
    products: productsWithDiscountsApplied,
    totalAmount: Number(totalAmount.toFixed(2)),
  }
}

export default buildCheckoutCart;