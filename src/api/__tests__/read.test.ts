import read from '../read';
import products from '../data/products.json';
import myer from '../data/myer-pricing-rules.json';
import { ApiActions } from '../Api';

describe('read', () => {
  test(`calling read with ${ApiActions[ApiActions.LOAD_PRODUCTS]} should return products`, async () => {
    const response = await read({ action: ApiActions.LOAD_PRODUCTS });

    expect(response).toBeDefined();
    expect(response).toEqual(products);
  })

  test(`calling read with ${ApiActions[ApiActions.LOAD_PRICING_RULES]} should return pricing rules`, async () => {
    const response = await read({ 
      action: ApiActions.LOAD_PRICING_RULES, 
      context: { 
        customerId: 'myer' 
      }
    });

    expect(response).toBeDefined();
    expect(response).toEqual(myer);
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