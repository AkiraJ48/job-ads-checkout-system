import ProductProps from "../ProductSelection/components/ProductProps";
import Checkout, { LoadCheckoutApiArgs } from "./types/Checkout";
import { LoadProductSelectionApiArgs } from "./types/Product";

export enum ApiActions {
  LOAD_PRODUCT_SELECTIONS,
  LOAD_CHECKOUT,
};

export type ApiArgs = {
  action: ApiActions,
}

export type ApiArguments = LoadProductSelectionApiArgs | LoadCheckoutApiArgs;
export type ApiResponse = ProductProps[] | Checkout;