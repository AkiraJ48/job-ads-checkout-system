import JobAd from "../JobAd/JobAd";
import Checkout, { LoadCheckoutApiArgs } from "./types/Checkout";
import { LoadProductSelectionApiArgs } from "./types/Product";

export enum ApiActions {
  LOAD_JOB_ADS,
  LOAD_CHECKOUT,
};

export type ApiArgs = {
  action: ApiActions,
}

export type ApiArguments = LoadProductSelectionApiArgs | LoadCheckoutApiArgs;
export type ApiResponse = JobAd[] | Checkout;