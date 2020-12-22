import { CheckoutContext } from "../api/types/Checkout";
import { LoadProductSelectionApiArgs } from "../api/types/Product";

export type JobAdServiceProps = {
  onCheckout: (props: CheckoutContext) => void,
  read: (args: LoadProductSelectionApiArgs) => Promise<JobAd[]>
}

export type JobAd = {
  id: string,
  title: string,
  description: string,
  price: number,
  containsSpecialDeal?: boolean,
  specialDeal?: string
}

export type SelectedJobAds = {
  quantity: number,
  id: string,
}

export interface JobAdState {
  jobAds: JobAd[]
  selectedJobAds: SelectedJobAds[],
}

export enum ActionType {
  SET_INITIAL_STATE,
  UPDATE_CART,
}

export type SetInitialState = {
  type: ActionType.SET_INITIAL_STATE,
  ads: JobAd[],
}

export type UpdateCart = {
  type: ActionType.UPDATE_CART,
  id: string,
  quantity: number,
};

export type Action = SetInitialState | UpdateCart;