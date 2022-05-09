import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import heroImage from '../../assets/hero.svg';
import { useAuth } from '../../context/AuthProvider/useAuth';
import Header from '../Header';
import { Container, TextContainer } from './styles';

function Home() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    const userAlreadyLogged = auth.verifyUser();

    if (!userAlreadyLogged) {
      navigate('/');
    } else {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TextContainer>
          <h1>Your private photos gallery</h1>
          <p>
            Upload your images, download it whenever you want, and share with
            your friends with just one click.
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
    </>
  );
}

export default Home;
