import JobAd from '../JobAd/JobAd';
import { ApiActions, ApiArguments, ApiResponse } from './Api';
import loadCheckout from './stubs/loadCheckout';
import loadJobAds from './stubs/loadJobAds';
import Checkout, { LoadCheckoutApiArgs } from './types/Checkout';
import { LoadProductSelectionApiArgs } from './types/Product';

async function read(args: LoadProductSelectionApiArgs): Promise<JobAd[]>;
async function read(args: LoadCheckoutApiArgs): Promise<Checkout>;
async function read(args: ApiArguments): Promise<ApiResponse> {
  switch(args.action) {
    case ApiActions.LOAD_JOB_ADS:
      return await loadJobAds(args.context);
    case ApiActions.LOAD_CHECKOUT:
      return await loadCheckout(args.context);
  }
}

export default read;