import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1700px;
  margin: 0 auto;
  max-height: 100%;

  div {
    width: 50%;

    img {
      height: 89vh;
      object-position: 60px;
      margin-top: 5px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column wrap;

  justify-content: center;
  padding: 0 5rem 0 0;

  h1 {
    line-height: 5rem;
    font-size: 3rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    gap: 2rem;

    button {
      background: #fec001;
      border-radius: 14px;
      border: none;
      font-size: 1.1rem;
      font-weight: 700;
      width: 140px;
      height: 60px;
      padding: 0 0px;
      position: relative;
      transition: all 0.2s ease-in-out 0s;
      box-shadow: 1px 1px 5px #384850;
    }

    button:active {
      background: #f5f5fa;
    }

    button:hover {
      box-shadow: 1px 1px 10px black;
      transition: all 0.2s ease-in-out 0s;
      filter: brightness(0.9);
    }
  }
`;
