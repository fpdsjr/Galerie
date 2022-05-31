import styled from 'styled-components';

interface IProps {
  fileLength: number;
}

export const Container = styled.div<IProps>`
  display: flex;
  gap: ${({ fileLength }) => (fileLength > 0 ? '1rem' : '0rem')};
  padding: 1rem;

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
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
  align-items: center;
  text-align: center;
  width: ${({ fileLength }) =>
    fileLength > 0 ? withImageWidth : withoutImageWidth};
  height: ${({ fileLength }) =>
    fileLength > 0 ? withImageHeight : withoutImageHeight};
  border: 2px dashed var(--border-color);
  border-radius: 0.25rem;
  position: ${({ fileLength }) => (fileLength > 0 ? 'absolute' : '')};

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    object-position: ${({ fileLength }) => (fileLength > 0 ? '-10px' : '')};
    width: ${({ fileLength }) => (fileLength > 0 ? '280px' : '50%')};
    height: ${({ fileLength }) => (fileLength > 0 ? '100%' : '600px')};
  }

  @media (max-width: 1550px) {
    position: relative;
    width: ${({ fileLength }) => (fileLength > 0 ? '100%' : withoutImageWidth)};
  }

  @media (max-width: 700px) {
    position: relative;
    width: ${({ fileLength }) => (fileLength > 0 ? '100%' : withoutImageWidth)};
    height: ${({ fileLength }) =>
      fileLength > 0 ? '200px' : withoutImageHeight};

    img {
      width: ${({ fileLength }) => (fileLength > 0 ? '220px' : '200px')};
      height: ${({ fileLength }) => (fileLength > 0 ? '100%' : '400px')};
    }
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

  @media (max-width: 700px) {
    width: 100%;
    position: relative;
  }
`;

export const LeftElementContainer = styled.div<IProps>`
  width: ${({ fileLength }) =>
    fileLength > 0 ? withImageWidth : withoutImageWidth};
  height: ${({ fileLength }) =>
    fileLength > 0 ? withImageHeight : withoutImageHeight};

  @media (max-width: 700px) {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;

    width: ${({ fileLength }) => (fileLength > 0 ? '100%' : withoutImageWidth)};
    height: ${({ fileLength }) =>
      fileLength > 0 ? '100%' : withoutImageHeight};
  }
`;
