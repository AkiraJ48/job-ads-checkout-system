import React from 'react';
import { Container, useMediaQuery } from '@chakra-ui/react';

import ProductSelection from './ProductSelection/ProductSelection';

function App() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const width = isLargerThan768 ? "768px" : "";

  return (
    <Container
      width={width}
      margin="auto"
    >
      <ProductSelectionContainer 
        onCheckout={() => {}}
      />
    </Container>
  );
}

export default App;
