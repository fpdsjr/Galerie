import styled from 'styled-components';

interface IProps {
  fileLength: number;
}

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 1rem;
`;

const dropZoneSizes = {
  withoutImageWidth: '100%',
  withoutImageHeight: '780px',
  withImageWidth: '300px',
  withImageHeight: '710px',
};

const {
  withImageWidth,
  withoutImageWidth,
  withImageHeight,
  withoutImageHeight,
} = dropZoneSizes;

export const DropzoneContainer = styled.div<IProps>`
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${({ fileLength }) =>
    fileLength > 0 ? withImageWidth : withoutImageWidth};
  height: ${({ fileLength }) =>
    fileLength > 0 ? withImageHeight : withoutImageHeight};
  border: 2px dashed #d7d7d7;
  border-radius: 0.25rem;
  position: ${({ fileLength }) => (fileLength > 0 ? 'absolute' : '')};

  img {
    object-position: ${({ fileLength }) => (fileLength > 0 ? '-10px' : '')};
    width: ${({ fileLength }) => (fileLength > 0 ? '280px' : '1200px')};
    height: ${({ fileLength }) => (fileLength > 0 ? '100%' : '600px')};
  }
`;

export const DoneButton = styled.button<IProps>`
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  width: 300px;
  background: #fec001;
  padding: 0 2rem;
  height: 50px;
  position: relative;
  transition: all 0.2s ease-in-out 0s;
  box-shadow: 1px 1px 5px #384850;
  position: absolute;
  bottom: 50px;
  display: ${({ fileLength }) => (fileLength > 0 ? '1' : 'none')};

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

export const LeftElementContainer = styled.div<IProps>`
  width: ${({ fileLength }) =>
    fileLength > 0 ? withImageWidth : withoutImageWidth};
  height: ${({ fileLength }) =>
    fileLength > 0 ? withImageHeight : withoutImageHeight};
`;
