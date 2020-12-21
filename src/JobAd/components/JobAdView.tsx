import React from 'react';
import { VStack, Box, Button, Heading, Select } from '@chakra-ui/react';

import JobAdWidget from './JobAdWidget';
import { JobAdViewProps } from './ComponentTypes';

function JobAdView(props: JobAdViewProps) {
  const { 
    customer, 
    jobAds, 
    itemsInCart, 
    onCheckout, 
    onUpdateCustomer, 
    onUpdateCart
  } = props;

  const customerDropdown = (
    <Box width="100%" marginTop="12px">
      <Heading as="h3" size="md">
        Customer:
        </Heading>
      <Select value={customer} onChange={(event) => {
        onUpdateCustomer(event.target.value);
      }}>
        <option value="">Default</option>
        <option value="Myer">Myer</option>
        <option value="Second Bite">Second Bite</option>
        <option value="Axil Coffee">Axil Coffee</option>
      </Select>
    </Box>
  );

  const jobAdWidgets = jobAds.map(jobAd => {
    const itemsSelected = itemsInCart.find(item => item.id === jobAd.id);
    const numberOfItemsSelected = itemsSelected ? itemsSelected.quantity : 0;

    return ( 
      <JobAdWidget
        key={jobAd.id}
        id={jobAd.id}
        title={jobAd.title}
        description={jobAd.description}
        price={jobAd.price}
        specialDeal={jobAd.specialDeal}
        containsSpecialDeal={jobAd.containsSpecialDeal}
        numberOfItemsSelected={numberOfItemsSelected}
        onUpdateCart={(value: number) => onUpdateCart(jobAd.id, value)}
      />
    )}
  )

  return (
    <VStack spacing="24px">
      {customerDropdown}
      {jobAdWidgets}
      <Button
        alignSelf="flex-end" 
        colorScheme="green" 
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </VStack>
  );
}

export default JobAdView;
