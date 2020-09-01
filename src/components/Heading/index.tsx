import React from 'react';

import { Container, HeadingText } from './styles';

const Heading: React.FC = () => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};

export default Heading;
