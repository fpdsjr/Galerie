import styled, { keyframes } from 'styled-components';

const animateFilter = keyframes`
  0% {
    filter: brightness(0)
  }
  25% {
    filter: brightness(0.7)
  }
  50% {
    filter: brightness(0.8)
  }
  75% {
    filter: brightness(0.9)
  }
  100% {
    filter: brightness(1)
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    position: absolute;
    top: 30px;
    left: 92%;
    width: 60px;
    opacity: 1;
    background: none;
    border: 0px;
    color: #fec001;
    transition: all 0.2s;

    &:hover {
      transition: all 0.2s ease-in-out 0s;
      color: red;
    }
  }
`;

export const PreviewImage = styled.img`
  width: 990px;
  max-height: 600px;
  border-radius: 0.5rem;
  animation: 5s ${animateFilter} ease-in-out;
`;

export const Loader = styled.img`
  position: absolute;
  top: 35px;
  left: 30px;
  width: 35px;
  height: 35px;
`;
