import Checkout, { LoadCheckoutApiArgs } from "./types/Checkout";
import PricingRule, { LoadPricingRulesApiArgs } from "./types/PricingRule";
import Product, { LoadProductsApiArgs } from "./types/Product";

export enum ApiActions {
  LOAD_PRODUCTS,
  LOAD_PRICING_RULES,
  LOAD_CHECKOUT,
};

export type ApiArgs = {
  action: ApiActions,
}

export type ApiArguments = LoadProductsApiArgs | LoadPricingRulesApiArgs | LoadCheckoutApiArgs;
export type ApiResponse = Product[] | PricingRule[] | Checkout;