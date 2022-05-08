import React from 'react';

import { Container, HeaderDefaultButton } from './styles';

function Header() {
  return (
    <Container>
      <h1>Galerie</h1>
      <div>
        <HeaderDefaultButton type="button">About</HeaderDefaultButton>
        <HeaderDefaultButton type="button">Contact</HeaderDefaultButton>
      </div>
    </Container>
  );
}

export default Header;
