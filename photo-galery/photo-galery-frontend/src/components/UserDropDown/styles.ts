import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 85px;
  right: -15px;
  position: absolute;
  background-color: #e5ad01;
  z-index: 1;
  border-radius: 0.25rem;
`;

export const DropDownMenuContent = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.1rem;

  h4 {
    padding: 0.5rem 0rem 0rem 0.25rem;
    width: 100%;
    height: 3.5rem;
  }

  button {
    text-align: center;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
    padding: 0rem 0rem 0rem 0.5rem;
    text-align: justify;
    width: 100%;
    font-size: 1.2rem;
    border: none;
    height: 100%;
    background: none;
  }

  button:before {
    content: ' ';
    width: 200px;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    bottom: 50%;
    right: 0px;
    height: 1px;
    background: #1e2126;
  }
  transition: all 0.2s ease-in-out 0s;

  button:hover {
    color: #e5ad01;
    background: #1e2126;
  }
`;

export const Square = styled.div`
  position: absolute;
  top: -5px;
  left: 80%;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: #e5ad01;
`;
