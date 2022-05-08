import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1700px;
  margin: 0 auto;

  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 3rem;
    color: #1e2126;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export const HeaderDefaultButton = styled.button`
  font-size: 1rem;
  color: var(--deep-space-sparkle);
  border: 0;
  padding: 0 2rem;
  background: none;

  transition: all 0.2s;

  &:hover {
    color: #fec001;
  }
`;
