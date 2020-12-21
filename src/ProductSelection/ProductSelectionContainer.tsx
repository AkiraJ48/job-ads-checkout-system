import React, { useEffect, useReducer } from 'react';

import { ApiActions } from '../api/Api';
import read from '../api/read';
import ProductSelectionReducer, { ActionType, initialState } from './ProductSelectionReducer';
import { getProductProps } from './ProductSelectionSelectors';
import ProductSelection from './ProductSelection';

function ProductSelectionContainer(props: { onCheckout: () => void, customerId: string }) {
  const { onCheckout, customerId } = props;

  const [state, dispatch] = useReducer(ProductSelectionReducer, initialState);

  useEffect(() => {
    async function load() {
      const products = await read({ 
        action: ApiActions.LOAD_PRODUCT_SELECTIONS, 
        context: { customerId } 
      });
      dispatch({ type: ActionType.SET_INITIAL_STATE, products })
    }

    load();
  }, [])

  const products = getProductProps(state);

  return (
    <ProductSelection 
      products={products}
      onCheckout={onCheckout}
    />
  );
}

export default ProductSelectionContainer;
