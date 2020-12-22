import Checkout, { CheckoutContext, LoadCheckoutApiArgs } from '../api/types/Checkout';

export type CheckoutServiceProps = {
  read: (args: LoadCheckoutApiArgs) => Promise<Checkout>
  context: CheckoutContext,
}

export type CheckoutViewProps = {
  cart: Checkout
}