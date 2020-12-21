import { ApiActions, ApiArgs } from "../Api";
import { PricingRulesContext } from "./PricingRule";

export type LoadProductSelectionApiArgs = ApiArgs & {
  action: ApiActions.LOAD_JOB_ADS,
  context: PricingRulesContext,
};

type Product = {
  id: string,
  name: string,
  description: string,
  price: number
};

export default Product;
