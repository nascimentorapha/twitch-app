import React from 'react';

import { Container } from './styles';

const Title: React.FC = ({ children }) => {
  console.log("cheguei aqui 4");
  return (
    <Container>{children}</Container>
  );
};

export default Title;
