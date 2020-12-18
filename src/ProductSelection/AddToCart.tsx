import React, { useState } from 'react';
import { Button, Center, Flex } from '@chakra-ui/react';

// Unit test this
// Expectation is that I should have a single element with no items
// Then I should have 3 elements if there are items
function AddToCart() {
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

export default AddToCart;
