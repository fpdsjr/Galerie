import React from 'react';

import heroImage from '../../assets/hero.svg';
import { Container, TextContainer } from './styles';

function Main() {
  return (
    <Container>
      <TextContainer>
        <h1>Your private photos gallery</h1>
        <p>
          Upload your images, download it whenever you want, and share with your
          friends with just one click.
        </p>
        <div>
          <button type="button">Log in</button>
          <button type="button">Sign up</button>
        </div>
      </TextContainer>
      <div>
        <img src={heroImage} alt="hero img" />
      </div>
    </Container>
  );
}

export default Main;
