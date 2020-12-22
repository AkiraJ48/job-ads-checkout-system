import React, { useEffect, useState } from 'react';
import CheckoutView from './CheckoutView';

import { ApiActions } from '../api/Api';
import { CheckoutContainerProps } from './Types';
import Checkout from '../api/types/Checkout';

function CheckoutContainer(props: CheckoutContainerProps) {
  const { read, context } = props;
  const [cart, setCart] = useState({ totalAmount: 0, products: [] } as Checkout);

  console.log(cart);

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

export default CheckoutContainer;
