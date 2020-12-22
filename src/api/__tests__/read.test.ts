import read from '../read';
import { ApiActions } from '../Api';
import { JobAd } from '../../JobAd/Types';
import Checkout from '../types/Checkout';

describe('read', () => {
  test(`calling read with ${ApiActions[ApiActions.LOAD_JOB_ADS]} should return job ads`, async () => {
    const response = await read({ 
      action: ApiActions.LOAD_JOB_ADS, 
      context: { customerId: 'Myer'} 
    });

    expect(response).toBeDefined();
    expect(response as JobAd[]).toBeTruthy();
  })

  test(`calling read with ${ApiActions[ApiActions.LOAD_CHECKOUT]} should return checkout`, async () => {
    const response = await read({
      action: ApiActions.LOAD_CHECKOUT,
      context: {
        selectedProducts: [],
        customerId: '',
      }
    });

    expect(response).toBeDefined();
    expect(response as Checkout).toBeTruthy();
  })
})