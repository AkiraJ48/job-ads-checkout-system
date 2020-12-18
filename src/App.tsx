import React, { ReactElement, useState } from 'react';
import { Container, VStack, Alert, AlertTitle, Box, Button, Center, Flex, Heading, Text, Select, useMediaQuery } from '@chakra-ui/react';

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

// Unit test this
// Expectation is that I should have a single element with no items
// Then I should have 3 elements if there are items
function AddToCartButton() {
  const [itemsAddToCart, setItemsAddedToCart] = useState(0);
  const hasAddedToCart = itemsAddToCart > 0;

  const addToCart = (
    <Button
      onClick={() => {
        const itemsAdded = itemsAddToCart + 1;
        setItemsAddedToCart(itemsAdded);
      }}
      colorScheme="blue"
      width="154.5px"
    >
      Add to cart
    </Button>
  );

  const updateQuantities = (
    <Flex>
      <Button
        onClick={() => {
          const itemsAdded = itemsAddToCart - 1;
          setItemsAddedToCart(itemsAdded);
        }}
        colorScheme="blue"
        borderRadius="0.375rem 0 0 0.375rem"
      >
        -
      </Button>
      <Center 
        height="100%"
        width="72px"
        background="lightblue"
      >
        {itemsAddToCart}
      </Center>
      <Button
        onClick={() => {
          const itemsAdded = itemsAddToCart + 1;
          setItemsAddedToCart(itemsAdded);
        }}
        colorScheme="blue"
        borderRadius="0 0.375rem 0.375rem 0"
      >
        +
      </Button>
    </Flex>
  )

  return hasAddedToCart ? updateQuantities : addToCart;
}

function Product(props: ProductProps) {
  const { 
    title, 
    description, 
    price, 
    specialDeal, 
    containsSpecialDeal = false
  } = props;

  const SpecialDeal = containsSpecialDeal && (
    <Box marginBottom="8px">
      <Alert status="success" padding="6px 12px">
        <AlertTitle>
          {specialDeal}
        </AlertTitle>
      </Alert>
    </Box>
  )

  const Title = (
    <Box marginBottom="8px">
      <Heading as="h2" size="lg">
        {title}
      </Heading>
    </Box>
  );

  const Description = (
    <Box display="grid" gridTemplateColumns="2fr 1fr">
      <Text noOfLines={5}>
        {description}
      </Text>
      <Box textAlign="end">
        {price}
      </Box>
    </Box>
  );

  return (
    <Card height="232px">
      <Box display="grid" height="100%" alignContent="space-between">
        <Box>
          {SpecialDeal}
          {Title}
          {Description}
        </Box>
        <AddToCartButton />
      </Box>
    </Card>    
  )
}

// Also write a test for the checkout button as it's probably pretty important
function App() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const width = isLargerThan768 ? "768px" : "";

  return (
    <Container
      width={width}
      margin="auto"
    >
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
        <Button alignSelf="flex-end" colorScheme="green">
          Checkout
        </Button>
      </VStack>
    </Container>
  );
}

export default App;
