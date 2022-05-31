import styled, { keyframes } from 'styled-components';

import signUpImage from '../../assets/signup.jpg';

export const Container = styled.div`
  display: flex;

  form {
    width: 100%;
  }
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

  @media (max-width: 750px) {
    display: none;
  }
`;
