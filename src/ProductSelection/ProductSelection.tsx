import React from 'react';
import { VStack, Box, Button, Heading, Select } from '@chakra-ui/react';

import Product from './Product';

/* 
  Assumptions: I think I should have the customer id if they've gotten this far
*/
function ProductSelection(props: { onCheckout: () => void }) {
  const { onCheckout } = props;

  return (
    <VStack spacing="24px">
      <Box width="100%" marginTop="12px">
        <Heading as="h3" size="md">
          Customer:
        </Heading>
        <Select>
          <option value="Default">Default</option>
          <option value="Myer">Myer</option>
          <option value="Second Bite">Second Bite</option>
          <option value="Axil Coffee">Axil Coffee</option>
        </Select>
      </Box>
      <Product
        title="Classic Ad"
        description="Offers the most basic level of advertisement"
        price="$269.99"
        specialDeal="You can buy 3 for 2!"
        containsSpecialDeal
      />
      <Product
        title="Stand out Ad"
        description="Allows advertisers to use a company logo and use a longer presentation text"
        price="$322.99"
      />
      <Product
        title="Premium Ad"
        description="Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility"
        price="$394.99"
      />
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

export default ProductSelection;
