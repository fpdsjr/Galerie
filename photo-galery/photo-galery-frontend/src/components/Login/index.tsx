/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginSvgAnimate from '../../assets/login-animation.svg';
import { useAuth } from '../../context/AuthProvider/useAuth';
import LoginError from '../LoginError';
import LoginInput from '../LoginInput';
import { Container, LoginContainer, ImageContainer } from './styles';

interface IValues {
  email: string;
  password: string;
}

function Login() {
  const [invalidUser, setInvalidUser] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit({ email, password }: IValues) {
    try {
      await auth.authenticate(email, password);

      navigate('/home');

      setInvalidUser(false);
    } catch (err) {
      setInvalidUser(true);
    }
  }

  return (
    <Container>
      {invalidUser && <LoginError invalidUser={invalidUser} />}
      <LoginContainer>
        <ImageContainer>
          <img src={loginSvgAnimate} alt="login" />
        </ImageContainer>
        <LoginInput handleSubmit={handleSubmit} />
      </LoginContainer>
    </Container>
  );
}

export default Login;
