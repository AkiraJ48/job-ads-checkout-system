import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import JobAdView from '../JobAdView';

describe('JobAdView', () => {
  test('renders the checkout button', async () => {
    const onCheckout = () => {};
    const { getByText } = render(
      <JobAdView
        jobAds={[]}
        onCheckout={onCheckout}
        customer={''}
        onUpdateCustomer={() => { }}
      />
    );
    const checkoutButton = getByText(/Checkout/i);

    expect(checkoutButton).toBeInTheDocument();
  });

  test('clicking the checkout button triggers onCheckout', () => {
    const onCheckout = jest.fn();
    const { getByText } = render(
      <JobAdView 
        jobAds={[]} 
        onCheckout={onCheckout} 
        customer={''}
        onUpdateCustomer={() => {}}
      />
    );
    const checkoutButton = getByText(/Checkout/i);
    fireEvent.click(checkoutButton);

    expect(onCheckout).toHaveBeenCalled();
  });
})
