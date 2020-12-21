import React from 'react';
import { Container, useMediaQuery } from '@chakra-ui/react';

import JobAdContainer from './JobAd/JobAdContainer';

function App() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const width = isLargerThan768 ? "768px" : "";

  return (
    <Container
      width={width}
      margin="auto"
    >
      <JobAdContainer
        onCheckout={() => {}}
      />
    </Container>
  );
}

export default App;
