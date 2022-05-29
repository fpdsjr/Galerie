import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: 2rem;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

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
    border: 1px solid var(--border-color);
    padding: 0.5rem;
  }

  button {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    color: var(--button-color-primary);
    transition: all 0.2s;
    border: 0;
    &:hover {
      transition: all 0.2s ease-in-out 0s;
      color: #cb8805;
    }
  }

  div {
    gap: 2rem;
    display: flex;

    input {
      width: 19rem;
    }
  }

  @media (max-width: 450px) {
    padding: 9rem 0rem;

    h1 {
      font-size: 2rem;
    }

    input {
      width: 24rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      border: 1px solid var(--border-color);
      padding: 0.5rem;
    }

    button {
      width: 24rem;
      cursor: pointer;
      font-weight: 600;
      text-decoration: underline;
      color: var(--button-color-primary);
      transition: all 0.2s;
      border: 0;
      &:hover {
        transition: all 0.2s ease-in-out 0s;
        color: #cb8805;
      }
    }

    div {
      gap: 2rem;
      display: flex;
      flex-direction: column;

      input {
        width: 24rem;
      }
    }

    p {
      button {
        width: 30px;
      }
    }
  }
`;

export const JoinButton = styled.button`
  width: 40rem;
  height: 2.5rem;
  font-weight: 700;
  height: 2.5rem;
  border-radius: 0.25rem;
  margin-top: 10px;
  background: #fec001;
  color: var(--button-color-secondary);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s ease-in-out 0s;
    filter: brightness(0.8);
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  color: #b20600 !important;
`;
