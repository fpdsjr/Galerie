import React from 'react';
import { useNavigate } from 'react-router-dom';

import heroImage from '../../assets/hero.svg';
import { Container, TextContainer } from './styles';

function Main() {
  const navigate = useNavigate();
  return (
    <Container>
      <TextContainer>
        <h1>Your private photos gallery</h1>
        <p>
          Upload your images, download it whenever you want, and share with your
          friends with just one click.
        </p>
        <div>
          <button type="button" onClick={() => navigate('/login')}>
            Log in
          </button>
          <button type="button" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </TextContainer>
      <div>
        <img src={heroImage} alt="hero img" />
      </div>
    </Container>
  );
}

export default Main;
