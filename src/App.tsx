import React, { useState } from 'react';
import { Container, useMediaQuery } from '@chakra-ui/react';

import read from './api/read';
import JobAdContainer from './JobAd/JobAdContainer';
import CheckoutContainer from './Checkout/CheckoutContainer';
import { CheckoutContext } from './api/types/Checkout';

enum Pages {
  JOB_ADS,
  CHECKOUT
};

function App() {
  const [page, setPage] = useState(Pages.JOB_ADS);
  const [checkoutContext, setCheckoutContext] = useState({} as CheckoutContext);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const width = isLargerThan768 ? "768px" : "";
  
  const currentView = page === Pages.JOB_ADS ? (
    <JobAdContainer
      read={read}
      onCheckout={(props: CheckoutContext) => {
        setCheckoutContext(props);
        setPage(Pages.CHECKOUT)
      }}
    />
  ) : (
    <CheckoutContainer 
      read={read}
      context={checkoutContext}
    />
  );

  return (
    <Container
      width={width}
      margin="auto"
    >
      {currentView}
    </Container>
  );
}

export default App;
