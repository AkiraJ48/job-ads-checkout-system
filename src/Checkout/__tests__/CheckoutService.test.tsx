import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Checkout, { CheckoutContext } from '../../api/types/Checkout';
import CheckoutService from '../CheckoutService';

describe('CheckoutService', () => {

  test('should render successfully', async () => {
    const read = () => Promise.resolve({ products: [] } as Checkout);
    await act(async () => {
      render(<CheckoutService read={read} context={{} as CheckoutContext} />)
    });
  })

  test('should trigger a read for loading the checkout cart', async () => {
    let readWasTriggered = false;
    const read = () => {
      readWasTriggered = true;
      return Promise.resolve({ products: [] } as Checkout);
    }
    await act(async () => {
      render(<CheckoutService read={read} context={{} as CheckoutContext} />)
    });

    expect(readWasTriggered).toBeTruthy();
  })
})