import React from 'react';
import { VStack, Box, Button, Heading, Select } from '@chakra-ui/react';

import Product from './Product';
import ProductProps from './ProductProps';

function ProductSelection(props: {
  customer: string,
  products: ProductProps[],
  onCheckout: () => void,
  onUpdateCustomer: (customer: string) => void
}) {
  const { customer, products, onCheckout, onUpdateCustomer } = props;

  return (
    <VStack spacing="24px">
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
      {
        products.map(product => (
          <Product
            key={product.key}
            title={product.title}
            description={product.description}
            price={product.price}
            specialDeal={product.specialDeal}
            containsSpecialDeal={product.containsSpecialDeal}
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

export default ProductSelection;
