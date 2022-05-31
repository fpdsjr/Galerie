import styled from 'styled-components';

interface IInvalidError {
  invalidUser: boolean;
}

export const InvalidError = styled.div<IInvalidError>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #21202e;
  background-color: #ffc728;
  opacity: ${({ invalidUser }) => (invalidUser ? 1 : 0)};
  position: fixed;

  transition-delay: 8s;
`;
