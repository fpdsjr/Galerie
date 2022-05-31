import styled, { keyframes } from 'styled-components';

interface IProps {
  fileLength: number;
}

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

export const Container = styled.div<IProps>`
  width: ${({ fileLength }) => (fileLength > 0 ? '76%' : '0%')};
  column-count: 2;
  column-gap: 10px;

  @media (max-width: 850px) {
    width: ${({ fileLength }) => (fileLength > 0 ? '100%' : '0%')};
    height: ${({ fileLength }) => (fileLength > 0 ? '100%' : '0%')};
    column-count: 1;
  }

  @media (max-width: 700px) {
    width: ${({ fileLength }) => (fileLength > 0 ? '100%' : '0%')};
    column-count: 1;
  }
`;

export const PreviewContainer = styled.div`
  margin: 0;
  position: relative;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;

  button {
    position: absolute;
    top: 22px;
    right: 5px;
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
  width: 100%;
  border-radius: 0.5rem;
  animation: 5s ${animateFilter} ease-in-out;
`;

export const Loader = styled.img`
  position: absolute;
  top: 25px;
  left: 20px;
  width: 35px;
  height: 35px;
`;
