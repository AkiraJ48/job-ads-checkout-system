import React, { useEffect, useReducer, useState } from 'react';

import { ApiActions } from '../api/Api';
import read from '../api/read';
import JobAdReducer, { ActionType, initialState } from './JobAdReducer';
import { getItemsInCart, getJobAds } from './JobAdSelectors';
import JobAdView from './components/JobAdView';

function JobAdContainer(props: { onCheckout: () => void }) {
  const { onCheckout } = props;

  /* 
    Expectation is that we'd retrieve the customer from some user preferences and it'd be
    passed down to this component. You wouldn't have a dropdown for the customer value. I've added
    this purely for visibility purposes of different customer pricing rules.
  */
  const [customer, setCustomer] = useState('');
  const [state, dispatch] = useReducer(JobAdReducer, initialState);

  useEffect(() => {
    async function load() {
      const ads = await read({ 
        action: ApiActions.LOAD_JOB_ADS,
        context: { customerId: customer } 
      });
      dispatch({ type: ActionType.SET_INITIAL_STATE, ads })
    }

    load();
  }, [customer])

  const jobAds = getJobAds(state);
  const itemsInCart = getItemsInCart(state);

  return (
    <JobAdView
      customer={customer}
      jobAds={jobAds}
      itemsInCart={itemsInCart}
      onCheckout={onCheckout}
      onUpdateCustomer={setCustomer}
      onUpdateCart={(id: string, quantity: number) => dispatch({ 
        type: ActionType.UPDATE_CART, 
        id, 
        quantity
      })}
    />
  );
}

export default JobAdContainer;
