import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginSvgAnimate from '../../assets/login-animation.svg';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { Container, ImageContainer } from './styles';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    try {
      await auth.authenticate(email, password);
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  }

  const dontHaveAccount = "Don't have an account?";

  return (
    <Container>
      <ImageContainer>
        <img src={loginSvgAnimate} alt="login" />
      </ImageContainer>
      <div>
        <h1>Login</h1>
        <p>Welcome Back</p>
        <label htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
        <p>
          ${dontHaveAccount} <strong>Join</strong>
        </p>
      </div>
    </Container>
  );
}

export default Login;
