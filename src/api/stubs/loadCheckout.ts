import { CheckoutContext } from "../types/Checkout";
import PricingRule from "../types/PricingRule";
import Product from "../types/Product";
import loadPricingRules from "./loadPricingRules";
import loadJobAds from "./loadJobAds";

function calculateDiscounts(products: Product[], pricingRules: PricingRule[]) {
  return null;
}

async function loadCheckout(props: CheckoutContext) {
  const { customerId } = props;
  const [products, pricingRules] = await Promise.all([loadJobAds({ customerId }), loadPricingRules({ customerId })]);

  return {
    products: [],
    pricingRules: [],
    totalAmount: 0
  }
}

export default loadCheckout;
