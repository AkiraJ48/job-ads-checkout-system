import loadCheckout from "./stubs/loadCheckout";
import loadPricingRules from "./stubs/loadPricingRules";
import loadProducts from "./stubs/loadProducts";
import Checkout, { CheckoutContext } from "./types/Checkout";
import PricingRule, { PricingRulesContext } from "./types/PricingRule";
import Product from "./types/Product";

const enum ApiActions {
  LOAD_PRODUCTS,
  LOAD_PRICING_RULES,
  LOAD_CHECKOUT,
};

type ApiArgs = {
  action: ApiActions,
  context?: undefined,
}

type LoadProductsApiArgs = ApiArgs & {
  action: ApiActions.LOAD_PRODUCTS,
};

type LoadPricingRulesApiArgs = ApiArgs & {
  action: ApiActions.LOAD_PRICING_RULES,
  context: PricingRulesContext,
};

type LoadCheckoutApiArgs = ApiArgs & {
  action: ApiActions.LOAD_CHECKOUT,
  context: CheckoutContext,
}

export type ApiArguments = LoadProductsApiArgs | LoadPricingRulesApiArgs | LoadCheckoutApiArgs;

type ApiHandler<T extends ApiArgs, U> = (context: T["context"]) => Promise<U>;
interface Mappings {
  [ApiActions.LOAD_PRODUCTS]: ApiHandler<LoadProductsApiArgs, Product[]>,
  [ApiActions.LOAD_PRICING_RULES]: ApiHandler<LoadPricingRulesApiArgs, PricingRule[]>,
  [ApiActions.LOAD_CHECKOUT]: ApiHandler<LoadCheckoutApiArgs, Checkout>,
}

const mappings: Mappings = ({
  [ApiActions.LOAD_PRODUCTS]: loadProducts,
  [ApiActions.LOAD_PRICING_RULES]: loadPricingRules,
  [ApiActions.LOAD_CHECKOUT]: loadCheckout,
});

export default mappings;