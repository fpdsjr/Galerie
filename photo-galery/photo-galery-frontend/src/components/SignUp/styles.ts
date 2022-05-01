import styled, { keyframes } from 'styled-components';

import signUpImage from '../../assets/signup.jpg';

export const Container = styled.div`
  display: flex;
`;

const blur = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  background-image: url(${signUpImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  filter: brightness(0.6);
  animation: 1s ${blur} ease-in-out;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
  }

  span {
    display: block;
    padding: 0.5rem 0;
  }

  input {
    width: 40rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    padding: 0.5rem;
  }

  strong {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    color: #111111;
    transition: all 0.2s;
    &:hover {
      transition: all 0.2s ease-in-out 0s;
      color: #cb8805;
    }
  }

  button {
    width: 40rem;
    height: 2.5rem;
    font-weight: 700;
    height: 2.5rem;
    border-radius: 0.25rem;
    background: #fec001;
    color: #273339;
    border: 1px solid #d7d7d7;
    text-align: center;
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s ease-in-out 0s;
      filter: brightness(0.8);
    }
  }

  div {
    gap: 2rem;
    display: flex;

    input {
      width: 19rem;
    }
  }
`;
