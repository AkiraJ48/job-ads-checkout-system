import React, { ReactElement } from 'react';
import { Container } from '@chakra-ui/react';

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

export default Card;
