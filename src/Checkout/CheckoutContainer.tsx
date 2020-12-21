import React, { useEffect, useState } from 'react';
import CheckoutView from './CheckoutView';

import { ApiActions } from '../api/Api';
import { CheckoutContainerProps } from './Types';

function CheckoutContainer(props: CheckoutContainerProps) {
  const { read, context } = props;
  const [cart, setCart] = useState({});

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
    <CheckoutView></CheckoutView>
  );
}

export default CheckoutContainer;
