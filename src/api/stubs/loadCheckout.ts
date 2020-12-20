import { CheckoutContext } from "../types/Checkout";
import PricingRule from "../types/PricingRule";
import Product from "../types/Product";
import loadPricingRules from "./loadPricingRules";
import loadProducts from "./loadProducts";

function calculateDiscounts(products: Product[], pricingRules: PricingRule[]) {
  return null;
}

async function loadCheckout(props: CheckoutContext) {
  const { customerId } = props;
  const [products, pricingRules] = await Promise.all([loadProducts(), loadPricingRules({ customerId })]);
  const discounts = calculateDiscounts(products, pricingRules);

  return {
    products: [],
    pricingRules: [],
    totalAmount: 0
  }
}

export default loadCheckout;