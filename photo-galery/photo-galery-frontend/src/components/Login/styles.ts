import styled from 'styled-components';

export const Container = styled.div``;

export const LoginContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 5rem 0;

  img {
    width: 50rem;
  }

  @media (max-width: 450px) {
    padding: 2rem 0;
    img {
      width: 100%;
    }
  }
`;
