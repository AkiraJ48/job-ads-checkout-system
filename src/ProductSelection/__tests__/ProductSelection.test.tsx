import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ProductSelection from '../ProductSelection';

describe('ProductSelection', () => {
  test('renders the checkout button', () => {
    const onCheckout = () => {};
    const { getByText } = render(<ProductSelection onCheckout={onCheckout} />);
    const checkoutButton = getByText(/Checkout/i);

    expect(checkoutButton).toBeInTheDocument();
  });

  test('clicking the checkout button triggers onCheckout', () => {
    const onCheckout = jest.fn();
    const { getByText } = render(<ProductSelection onCheckout={onCheckout} />);
    const checkoutButton = getByText(/Checkout/i);
    fireEvent.click(checkoutButton);

    expect(onCheckout).toHaveBeenCalled();
  });
})
