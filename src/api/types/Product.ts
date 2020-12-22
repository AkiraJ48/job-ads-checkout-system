import { ApiActions, ApiArgs } from "../Api";
import { DiscountRuleContext } from "./DiscountRule";

export type LoadProductSelectionApiArgs = ApiArgs & {
  action: ApiActions.LOAD_JOB_ADS,
  context: DiscountRuleContext,
};

type Product = {
  id: string,
  name: string,
  description: string,
  price: number
};

export default Product;
