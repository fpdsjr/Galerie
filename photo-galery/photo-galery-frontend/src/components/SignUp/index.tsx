import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthProvider/useAuth';
import { Container, ImageContainer, TextContainer } from './styles';

function SignUp() {
  const [firstName, setfirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSignup(e: SyntheticEvent) {
    e.preventDefault();

    try {
      await auth.createUser({ firstName, lastName, email, password });
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <ImageContainer />
      <TextContainer>
        <h1>Join Galerie</h1>
        <div>
          <label htmlFor="firstName">
            <span>FirstName</span>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastName">
            <span>LastName</span>
            <input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
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
        <button type="button" onClick={handleSignup}>
          Join
        </button>
        <p>
          Already have an account? <strong>Login</strong>
        </p>
      </TextContainer>
    </Container>
  );
}

export default SignUp;
