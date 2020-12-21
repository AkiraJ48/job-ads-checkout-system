import React, { useEffect, useReducer, useState } from 'react';

import { ApiActions } from '../api/Api';
import read from '../api/read';
import ProductSelectionReducer, { ActionType, initialState } from './ProductSelectionReducer';
import { getProductProps } from './ProductSelectionSelectors';
import ProductSelection from './components/ProductSelection';

function ProductSelectionContainer(props: { onCheckout: () => void }) {
  const { onCheckout } = props;

  /* 
    Expectation is that we'd retrieve the customer from some user preferences and it'd be
    passed down to this component. You wouldn't have a dropdown for the customer value. I've added
    this purely for visibility purposes of different customer pricing rules.
  */
  const [customer, setCustomer] = useState('');
  const [state, dispatch] = useReducer(ProductSelectionReducer, initialState);

  useEffect(() => {
    async function load() {
      const products = await read({ 
        action: ApiActions.LOAD_PRODUCT_SELECTIONS,
        context: { customerId: customer } 
      });
      dispatch({ type: ActionType.SET_INITIAL_STATE, products })
    }

    load();
  }, [customer])

  const products = getProductProps(state);

  return (
    <ProductSelection
      customer={customer}
      products={products}
      onCheckout={onCheckout}
      onUpdateCustomer={setCustomer}
    />
  );
}

export default ProductSelectionContainer;
