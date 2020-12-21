import React, { useEffect, useReducer, useState } from 'react';

import { ActionType, JobAdContainerProps } from './Types';
import { ApiActions } from '../api/Api';
import JobAdReducer from './JobAdReducer';
import { getItemsInCart, getJobAds } from './JobAdSelectors';
import JobAdView from './components/JobAdView';

function JobAdContainer(props: JobAdContainerProps) {
  const { read, onCheckout } = props;

  /* 
    Expectation is that we'd retrieve the customer from some user preferences and it'd be
    passed down to this component. You wouldn't have a dropdown for the customer value. I've added
    this purely for visibility purposes so that we can see different pricing rules for different customers.
  */
  const [customer, setCustomer] = useState('');
  const [state, dispatch] = useReducer(JobAdReducer, {
    jobAds: [],
    selectedJobAds: [],
  });

  useEffect(() => {
    async function load() {
      const ads = await read({ 
        action: ApiActions.LOAD_JOB_ADS,
        context: { customerId: customer } 
      });
      dispatch({ type: ActionType.SET_INITIAL_STATE, ads })
    }

    load();
  }, [read, customer])

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
