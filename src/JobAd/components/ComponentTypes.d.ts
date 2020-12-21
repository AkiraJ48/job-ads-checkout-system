import { JobAd } from '../Types';

export type JobAdViewProps = {
  customer: string,
  jobAds: JobAd[],
  itemsInCart: SelectedJobAds[],
  onCheckout: () => void,
  onUpdateCustomer: (customer: string) => void,
  onUpdateCart: (id: string, quantity: number) => void,
}

export type JobAdWidgetProps = JobAd & AddToCartProps;

export type AddToCartProps = {
  numberOfItemsSelected: number,
  onUpdateCart: (value: number) => void
}