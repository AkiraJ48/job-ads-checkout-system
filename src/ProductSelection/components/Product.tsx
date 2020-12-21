import React from 'react';
import { Alert, AlertTitle, Box, Heading, Text } from '@chakra-ui/react';

import Card from './Card';
import AddToCart from './AddToCart';
import ProductProps from './ProductProps';

function Product(props: ProductProps) {
  const {
    title,
    description,
    price,
    specialDeal,
    containsSpecialDeal = false
  } = props;

  const SpecialDeal = containsSpecialDeal && (
    <Box marginBottom="8px" >
      <Alert status="success" padding="6px 12px" >
        <AlertTitle>
          { specialDeal }
        </AlertTitle>
      </Alert>
    </Box>
  )

  const Title = (
    <Box marginBottom="8px" >
      <Heading as="h2" size="lg" >
        { title }
      </Heading>
    </Box>
  );

  const Description = (
    <Box display="grid" gridTemplateColumns="2fr 1fr" >
      <Text noOfLines={ 5}>
        { description }
      </Text>
      <Box textAlign="end" >
        { price }
      </Box>
    </Box>
  );

  return (
    <Card height="232px">
      <Box display="grid" height="100%" alignContent="space-between">
        <Box>
          { SpecialDeal }
          { Title }
          { Description }
        </Box>
        <AddToCart />
      </Box>
    </Card>
  )
}

export default Product;