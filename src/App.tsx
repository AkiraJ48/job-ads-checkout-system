import React, { ReactElement, useState } from 'react';
import { Container, VStack, Alert, AlertTitle, Box, Button } from '@chakra-ui/react';

function Card(props: { children: ReactElement, height?: string }) {
  const { children, height } = props;
  return (
    <Container
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2);"
      padding="16px"
      width="100%"
      height={height}
    >
      {children}
    </Container>
  )
}

type ProductProps = {
  title: string, 
  description: string, 
  price: string, 
  containsSpecialDeal?: boolean,
  specialDeal?: string
}

function AddToCardButton() {
  const [itemsAddToCart, setItemsAddedToCart] = useState(0);
  const hasAddedToCart = itemsAddToCart > 0;

  const button = hasAddedToCart ? (
    <Box>
      <Button 
        onClick={() => console.log('hello')} 
        colorScheme="blue">
          +
      </Button>
      {itemsAddToCart}
      <Button
        onClick={() => console.log('hello')}
        colorScheme="blue">
        +
      </Button>
    </Box>
  ) : (
    <Button 
      onClick={() => {
        const itemsAdded = itemsAddToCart + 1;
        setItemsAddedToCart(itemsAdded);
      }} 
      colorScheme="blue">
        Add to cart
    </Button>
  )

  return button;
}

function Product(props: ProductProps) {
  const { 
    title, 
    description, 
    price, 
    specialDeal, 
    containsSpecialDeal = false
  } = props;

  return (
    <Card height="208px">
      <Box display="grid" height="100%" alignContent="space-between">
        <Box>
          {
            containsSpecialDeal && (
              <Alert status="error">
                <AlertTitle>{specialDeal}</AlertTitle>
              </Alert>
            )
          }
          <Box>
            {title}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              {description}
            </Box>
            <Box>
              {price}
            </Box>
          </Box>
        </Box>
        <AddToCardButton />
      </Box>
    </Card>    
  )
}

function App() {
  return (
    <Container
      width="768px"
      margin="auto"
    >
      <VStack spacing="24px">
        <Product 
          title="Classic Ad" 
          description="Offers the most basic level of advertisement" 
          price="$269.99"
          specialDeal="Yayyay"
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
      </VStack>
    </Container>
  );
}

export default App;
