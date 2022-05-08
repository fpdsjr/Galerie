import styled from 'styled-components';

export const Container = styled.div`
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

  button {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    color: #111111;
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
`;

export const JoinButton = styled.button`
  width: 40rem;
  height: 2.5rem;
  font-weight: 700;
  height: 2.5rem;
  border-radius: 0.25rem;
  margin-top: 10px;
  background: #fec001;
  color: #273339;
  border: 1px solid #d7d7d7;
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
