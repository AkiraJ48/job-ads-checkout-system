import { CheckoutContext } from "../types/Checkout";
import loadPricingRules from "./loadPricingRules";
import loadProducts from "./loadProducts";
import buildCheckoutCart from '../transformers/buildCheckoutCart';

async function loadCheckout(props: CheckoutContext) {
  const { customerId, selectedProducts } = props;
  const [products, discountRules] = await Promise.all([loadProducts(), loadPricingRules({ customerId })]);
  const checkoutCart = buildCheckoutCart(products, discountRules, selectedProducts);
  return checkoutCart;
}

export default loadCheckout;
