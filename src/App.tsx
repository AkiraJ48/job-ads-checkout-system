import React, { ReactElement } from 'react';
import './App.css';

import { Container, Input } from '@chakra-ui/react';

function Card(props: { children: ReactElement }) {
  const { children } = props;
  return (
    <Container
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2);"
      padding="8px"
    >
      {children}
    </Container>
  )
}

function App() {
  return (
    <Container
      width="1024px"
      margin="auto"
    >
      <Card>
        <Input />
      </Card>    
    </Container>
  );
}

export default App;
