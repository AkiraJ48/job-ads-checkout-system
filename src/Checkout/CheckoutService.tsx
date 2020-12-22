import React, { useEffect, useState } from 'react';
import CheckoutView from './CheckoutView';

import { ApiActions } from '../api/Api';
import { CheckoutServiceProps } from './Types';
import Checkout from '../api/types/Checkout';

function CheckoutService(props: CheckoutServiceProps) {
  const { read, context } = props;
  const [cart, setCart] = useState({ totalAmount: 0, products: [] } as Checkout);

  useEffect(() => {
    async function load() {
      const checkoutCart = await read({
        action: ApiActions.LOAD_CHECKOUT,
        context,
      });

      setCart(checkoutCart);
    }

    load();
  }, [read, context])

  return (
    <CheckoutView cart={cart} />
  );
}

export default CheckoutService;
