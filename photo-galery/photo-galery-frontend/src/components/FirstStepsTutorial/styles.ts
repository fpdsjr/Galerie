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
`;

export const TextContainer = styled.div`
  width: 600px;
`;
