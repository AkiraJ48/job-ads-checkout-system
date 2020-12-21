import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import JobAdView from '../JobAdView';
import { JobAdViewProps } from '../ComponentTypes';

type PartialJobAdViewProps = Partial<JobAdViewProps>
const renderJobAdView = (props: PartialJobAdViewProps) => {
  const { 
    jobAds = [], 
    itemsInCart = [], 
    onCheckout = () => {}, 
    onUpdateCart = () => {}
  } = props;

  return render(
    <JobAdView
      customer={''}
      jobAds={jobAds}
      itemsInCart={itemsInCart}
      onCheckout={onCheckout}
      onUpdateCart={onUpdateCart}
      onUpdateCustomer={() => {}}
    />
  );
  }

describe('JobAdView', () => {
  const jobAds = [
    {
      id: '1',
      title: 'Title1',
      description: '',
      price: 1,
    }
  ];

  describe('checkout button', () => {
    test('renders the checkout button', async () => {
      const { getByText } = renderJobAdView({});
      const checkoutButton = getByText(/Checkout/i);
  
      expect(checkoutButton).toBeInTheDocument();
    });
  
    test('clicking the checkout button triggers onCheckout', () => {
      const onCheckout = jest.fn();
      const { getByText } = renderJobAdView({ onCheckout });
      const checkoutButton = getByText(/Checkout/i);
      fireEvent.click(checkoutButton);
  
      expect(onCheckout).toHaveBeenCalled();
    });
  })

  describe('jobAd title', () => {
    test('renders the title of the job ads', () => {
      const { getByText } = renderJobAdView({ jobAds });
      const jobAdTitle = getByText(/Title1/i);
  
      expect(jobAdTitle).toBeInTheDocument();    
    })
  })

  describe('add to cart button', () => {
    test('renders the add to cart button', () => {
      const { getByText } = renderJobAdView({ jobAds });
      const addToCartButton = getByText(/Add to cart/i);
  
      expect(addToCartButton).toBeInTheDocument();
    })
  
    test('clicking the add to cart button trigers onUpdateCart', () => {
      const onUpdateCart = jest.fn();
      const { getByText } = renderJobAdView({ jobAds, onUpdateCart });
      const addToCartButton = getByText(/Add to cart/i);
      fireEvent.click(addToCartButton);
  
      expect(onUpdateCart).toHaveBeenCalled();
    })
  })

  describe('add/remove quantities button', () => {
    const itemsInCart = [
      {
        id: '1',
        quantity: 1
      }
    ];

    test('renders the add/remove quantities buttons when items exist in the cart', () => {
      const itemsInCart = [
        {
          id: '1',
          quantity: 1
        }
      ];

      const { getByText } = renderJobAdView({ jobAds, itemsInCart });
      const addQuantityButton = getByText(/\+/i);
      const removeQuantityButton = getByText(/-/i);
  
      expect(addQuantityButton).toBeInTheDocument();
      expect(removeQuantityButton).toBeInTheDocument();
    })

    test('clicking the add quantity button triggers onUpdateCart', () => {
      const onUpdateCart = jest.fn();
      const { getByText } = renderJobAdView({ jobAds, onUpdateCart, itemsInCart });
      const addQuantityButton = getByText(/\+/i);
      fireEvent.click(addQuantityButton);

      expect(onUpdateCart).toHaveBeenCalled();
    })

    test('clicking the remove quantity button triggers onUpdateCart', () => {
      const onUpdateCart = jest.fn();
      const { getByText } = renderJobAdView({ jobAds, onUpdateCart, itemsInCart });
      const removeQuantityButton = getByText(/-/i);
      fireEvent.click(removeQuantityButton);

      expect(onUpdateCart).toHaveBeenCalled();
    })
  })
})
