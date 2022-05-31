import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    padding: 2.5rem;
    text-align: center;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;

    ol {
      list-style-type: none;
      text-align: center;
      display: flex;
      flex-flow: column;
      gap: 1.5rem;
    }
  }

  @media (max-width: 850px) {
    height: auto;
  }

  @media (max-width: 450px) {
    width: 100%;

    div {
      padding: 2rem;
      text-align: center;
      display: flex;
      flex-flow: column;
      gap: 0.5rem;

      ol {
        list-style-type: none;
        text-align: center;
        display: flex;
        flex-flow: column;
        gap: 1rem;
      }
    }
  }
`;

export const TextContainer = styled.div`
  width: 600px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
