import React from 'react';
import { Button, Center, Flex } from '@chakra-ui/react';


type AddToCartType = {
  numberOfItemsSelected: number,
  onUpdateCart: (value: number) => void
}

function AddToCart(props: AddToCartType) {
  const { numberOfItemsSelected, onUpdateCart } = props;
  const hasAddedToCart = numberOfItemsSelected > 0;

  const addToCart = (
    <Button
      onClick={() => {
        const itemsAdded = numberOfItemsSelected + 1;
        onUpdateCart(itemsAdded);
      }}
      colorScheme="blue"
      width="154.5px"
    >
      Add to cart
    </Button>
  );

  const updateQuantities = (
    <>
      <Button
        onClick={() => {
          const itemsAdded = numberOfItemsSelected - 1;
          onUpdateCart(itemsAdded);
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
        {numberOfItemsSelected}
      </Center>
      <Button
        onClick={() => {
          const itemsAdded = numberOfItemsSelected + 1;
          onUpdateCart(itemsAdded);
        }}
        colorScheme="blue"
        borderRadius="0 0.375rem 0.375rem 0"
      >
        +
      </Button>
    </>
  )

  return (
    <Flex>
      { hasAddedToCart ? updateQuantities : addToCart }
    </Flex>
  )
}

export default AddToCart;
