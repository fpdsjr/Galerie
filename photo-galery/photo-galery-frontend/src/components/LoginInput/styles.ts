import styled from 'styled-components';

export const Container = styled.div`
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

  input {
    width: 32rem;
    max-width: 32rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    padding: 0.5rem;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  margin-top: 4px;
  color: red !important;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  height: 2.5rem;
  width: 32rem;
  text-align: center;
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
`;

export const JoinButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.25rem;
  text-decoration: underline;
  color: #111111;
  border: 0;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    transition: all 0.2s ease-in-out 0s;
    color: #cb8805;
  }
`;
