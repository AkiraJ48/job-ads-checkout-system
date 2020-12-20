import Product from "./Product";
import PricingRule from "./PricingRule";

export type CheckoutContext = {
  products: Product[],
  customerId: string
}

type Checkout = {
  products: Product[],
  pricingRules: PricingRule[],
  totalAmount: number,
}

export default Checkout;
