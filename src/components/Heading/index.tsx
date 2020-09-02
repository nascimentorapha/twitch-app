import React from 'react';

import { Container, HeadingText } from './styles';

const Heading: React.FC = ({children}) => {
  console.log("cheguei aqui 3");
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};

export default Heading;
