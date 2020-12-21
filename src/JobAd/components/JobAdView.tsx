import React from 'react';
import { VStack, Box, Button, Heading, Select } from '@chakra-ui/react';

import JobAdWidget from './JobAdWidget';
import JobAd from '../JobAd';

function JobAdView(props: {
  customer: string,
  jobAds: JobAd[],
  onCheckout: () => void,
  onUpdateCustomer: (customer: string) => void
}) {
  const { customer, jobAds, onCheckout, onUpdateCustomer } = props;

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

  return (
    <VStack spacing="24px">
      {customerDropdown}
      {
        jobAds.map(jobAd => (
          <JobAdWidget
            key={jobAd.key}
            title={jobAd.title}
            description={jobAd.description}
            price={jobAd.price}
            specialDeal={jobAd.specialDeal}
            containsSpecialDeal={jobAd.containsSpecialDeal}
          />    
        ))
      }
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
