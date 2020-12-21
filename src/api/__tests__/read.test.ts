import read from '../read';
import { ApiActions } from '../Api';
import products from '../data/products.json';
import myer from '../data/myer-pricing-rules.json';
import buildJobAds from '../transformers/buildJobAds';

describe('read', () => {
  test(`calling read with ${ApiActions[ApiActions.LOAD_PRODUCT_SELECTIONS]} should return products`, async () => {
    const response = await read({ 
      action: ApiActions.LOAD_PRODUCT_SELECTIONS, 
      context: { customerId: 'Myer'} 
    });

    const jobAds = buildJobAds(products, myer);

    expect(response).toBeDefined();
    expect(response).toEqual(jobAds);
  })

  test(`calling read with ${ApiActions[ApiActions.LOAD_CHECKOUT]} should return checkout`, async () => {
    const response = await read({
      action: ApiActions.LOAD_CHECKOUT,
      context: {
        products: [],
        customerId: '',
      }
    });

    expect(response).toBeDefined();
    expect(response).toEqual(myer);
  })
})