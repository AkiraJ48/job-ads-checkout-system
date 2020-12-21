import ProductProps from '../ProductSelection/ProductProps';
import { ApiActions, ApiArguments, ApiResponse } from './Api';
import loadCheckout from './stubs/loadCheckout';
import loadProductSelections from './stubs/loadProductSelections';
import Checkout, { LoadCheckoutApiArgs } from './types/Checkout';
import { LoadProductSelectionApiArgs } from './types/Product';

async function read(args: LoadProductSelectionApiArgs): Promise<ProductProps[]>;
async function read(args: LoadCheckoutApiArgs): Promise<Checkout>;
async function read(args: ApiArguments): Promise<ApiResponse> {
  switch(args.action) {
    case ApiActions.LOAD_PRODUCT_SELECTIONS:
      return await loadProductSelections(args.context);
    case ApiActions.LOAD_CHECKOUT:
      return await loadCheckout(args.context);
  }
}

export default read;