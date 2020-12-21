import { ApiActions, ApiArguments, ApiResponse } from './Api';
import loadCheckout from './stubs/loadCheckout';
import loadPricingRules from './stubs/loadPricingRules';
import loadProducts from './stubs/loadProducts';
import Checkout, { LoadCheckoutApiArgs } from './types/Checkout';
import PricingRule, { LoadPricingRulesApiArgs } from './types/PricingRule';
import Product, { LoadProductsApiArgs } from './types/Product';

async function read(args: LoadProductsApiArgs): Promise<Product[]>;
async function read(args: LoadPricingRulesApiArgs): Promise<PricingRule[]>;
async function read(args: LoadCheckoutApiArgs): Promise<Checkout>;
async function read(args: ApiArguments): Promise<ApiResponse> {
  switch(args.action) {
    case ApiActions.LOAD_PRODUCTS:
      return await loadProducts();
    case ApiActions.LOAD_PRICING_RULES:
      return await loadPricingRules(args.context);
    case ApiActions.LOAD_CHECKOUT:
      return await loadCheckout(args.context);
  }
}

export default read;