import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import userIcon from '../../assets/userIcon.png';

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

export const MenuImageDropDown = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${userIcon});
  background-size: 40px;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const UploadBotton = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  width: 140px;
  background: #fec001;
  padding: 0 2rem;
  height: 50px;
  position: relative;
  transition: all 0.2s ease-in-out 0s;
  box-shadow: 1px 1px 5px #384850;

  &:active {
    background: #f5f5fa;
  }

  &:hover {
    box-shadow: 1px 1px 10px black;
    transition: all 0.2s ease-in-out 0s;
    transform: scale(1.03);
    filter: brightness(0.9);
  }
`;
