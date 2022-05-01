import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  display: flex;

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-flow: column wrap;
    text-align: center;
    color: #273339;

    span {
      display: block;
      text-align: left;
      margin-bottom: 0.5rem;
      color: #273339;
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

    input {
      width: 32rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      padding: 0.5rem;
    }
    button {
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
  }
`;

export const ImageContainer = styled.div`
  padding: 5rem 0;
  img {
    width: 50rem;
  }
`;
