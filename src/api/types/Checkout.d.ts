import Product from "./Product";
import PricingRule from "./PricingRule";
import { ApiActions, ApiArgs } from "../Api";

export type LoadCheckoutApiArgs = ApiArgs & {
  action: ApiActions.LOAD_CHECKOUT,
  context: CheckoutContext,
}

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
