import Product from "./Product";
import { ApiActions, ApiArgs } from "../Api";

export type LoadCheckoutApiArgs = ApiArgs & {
  action: ApiActions.LOAD_CHECKOUT,
  context: CheckoutContext,
}

export type SelectedProduct = {
  id: string,
  quantity: number,
};

export type CheckoutContext = {
  selectedProducts: SelectedProduct[],
  customerId: string
}

export type CheckoutProduct = Product & {
  discountedPrice?: number,
  quantity: number,
}

type Checkout = {
  products: CheckoutProduct[],
  totalAmount: number,
}

export default Checkout;
